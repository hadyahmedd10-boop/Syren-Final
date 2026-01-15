import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Simple in-memory rate limiting (per instance, resets on restart)
const ipCache = new Map<string, number>();
const RATE_LIMIT_MS = 60000; // 1 minute

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    const lastRequest = ipCache.get(ip);

    if (lastRequest && now - lastRequest < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, trip_dates, budget, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }); // Silent fail for bots
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase configuration");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Create admin client to bypass RLS
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase.from("quote_requests").insert([
      {
        name,
        email,
        phone,
        trip_dates,
        budget,
        message,
        status: "pending",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit request. Please try again." },
        { status: 500 }
      );
    }

    // Update rate limit cache
    ipCache.set(ip, now);

    // Trigger email notification (fire and forget or handled gracefully)
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `http://${req.headers.get("host")}`;
      fetch(`${baseUrl}/api/notify/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          trip_dates,
          budget,
          message,
        }),
      }).catch(err => console.error("Notification trigger error:", err));
    } catch (notifyErr) {
      console.error("Failed to trigger notification:", notifyErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API Error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

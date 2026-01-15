import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Simple in-memory rate limiting
const ipCache = new Map<string, number>();
const RATE_LIMIT_MS = 60000; // 1 minute
const MIN_MESSAGE_LENGTH = 10;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    const lastRequest = ipCache.get(ip);

    if (lastRequest && now - lastRequest < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, rating, experience_slug, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      console.log("Honeypot triggered, silent fail");
      return NextResponse.json({ success: true }); // Silent fail for bots
    }

    // Basic validation
    if (!name || !message || !rating) {
      return NextResponse.json(
        { error: "Name, message, and rating are required." },
        { status: 400 }
      );
    }

    // Length check
    if (message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be at least ${MIN_MESSAGE_LENGTH} characters long.` },
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

    // Create admin client to bypass RLS and insert with service role
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase.from("testimonials").insert([
      {
        name,
        email: email || null,
        message,
        rating: Number(rating),
        experience_slug: experience_slug || null,
        approved: false, // Always default to false for manual moderation
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit testimonial. Please try again." },
        { status: 500 }
      );
    }

    // Update rate limit cache
    ipCache.set(ip, now);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Testimonial Submit API Error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

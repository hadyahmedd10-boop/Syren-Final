import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getAdminUser } from "@/lib/supabaseServer";

export async function GET() {
  const user = await getAdminUser();
  
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: "Supabase Admin not configured" }, { status: 500 });
  }

  try {
    // Fetch inquiries
    const { data: inquiries, error: inquiriesError } = await supabaseAdmin
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (inquiriesError) throw inquiriesError;

    // Fetch quote requests
    const { data: quotes, error: quotesError } = await supabaseAdmin
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (quotesError) throw quotesError;

    return NextResponse.json({
      inquiries: inquiries || [],
      quotes: quotes || [],
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Admin leads fetch error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

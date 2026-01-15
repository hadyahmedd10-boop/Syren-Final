import { NextResponse } from "next/server"; 
import { getAdminUser } from "@/lib/supabaseServer"; 
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) { 
  const user = await getAdminUser(); 

  if (!user) { 
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); 
  } 

  if (!supabaseAdmin) {
    return NextResponse.json({ error: "Supabase admin not configured" }, { status: 500 });
  }

  try {
    const { id } = await req.json(); 

    if (!id) {
      return NextResponse.json({ error: "Missing testimonial ID" }, { status: 400 });
    }

    const { error } = await supabaseAdmin 
      .from("testimonials") 
      .update({ approved: true }) 
      .eq("id", id); 

    if (error) { 
      return NextResponse.json({ error: error.message }, { status: 500 }); 
    } 

    return NextResponse.json({ success: true }); 
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
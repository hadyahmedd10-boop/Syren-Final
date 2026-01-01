import { NextResponse } from "next/server"; 
import { createClient } from "@/utils/supabase/server"; 

export async function POST(req: Request) { 
  const supabase = await createClient(); 

  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const { 
    data: { session }, 
  } = await supabase.auth.getSession(); 

  if (!session) { 
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); 
  } 

  try {
    const { id } = await req.json(); 

    if (!id) {
      return NextResponse.json({ error: "Missing testimonial ID" }, { status: 400 });
    }

    const { error } = await supabase 
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
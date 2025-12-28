import { NextResponse } from "next/server"; 
import { supabaseAdmin } from "@/lib/supabaseAdmin"; 

export async function POST(req: Request) { 
  const body = await req.json(); 

  if (!supabaseAdmin) {
    return NextResponse.json({ error: "Supabase admin not configured" }, { status: 500 });
  }

  const { error } = await supabaseAdmin 
    .from("testimonials") 
    .insert({ ...body, approved: false }); 

  if (error) { 
    return NextResponse.json({ error: error.message }, { status: 500 }); 
  } 

  return NextResponse.json({ success: true }); 
}

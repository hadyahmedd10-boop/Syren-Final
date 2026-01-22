import { NextResponse } from "next/server"; 
import { supabaseAdmin } from "@/lib/supabaseAdmin"; 

export async function POST(req: Request) { 
  const { id } = await req.json().catch(() => ({})); 
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 }); 

  const { error } = await supabaseAdmin 
    .from("testimonials") 
    .delete() 
    .eq("id", id); 

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 }); 

  return NextResponse.json({ ok: true }); 
}

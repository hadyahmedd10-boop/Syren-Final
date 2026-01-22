import { NextResponse } from "next/server"; 
import { supabase } from "@/lib/supabaseClient"; 
import { testimonialRateLimit, getClientIp } from "@/lib/rateLimit"; 

export async function POST(req: Request) { 
  const ip = getClientIp(req); 
  
  if (testimonialRateLimit) {
    const rl = await testimonialRateLimit.limit(ip); 
    if (!rl.success) { 
      return NextResponse.json( 
        { ok: false, error: "Too many submissions. Please try again later." }, 
        { status: 429 } 
      ); 
    } 
  }

  const body = await req.json().catch(() => null); 
  if (!body) return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 }); 

  const { 
    name, 
    email, 
    rating, 
    destination, 
    experience_slug, 
    message, 
  } = body; 

  if (!name || !message) { 
    return NextResponse.json( 
      { ok: false, error: "Name and message are required." }, 
      { status: 400 } 
    ); 
  } 

  const { error } = await supabase.from("testimonials").insert([ 
    { 
      name, 
      email: email || null, 
      rating: rating ?? null, 
      destination: destination || null, 
      experience_slug: experience_slug || null, 
      message, 
      approved: false, 
    }, 
  ]); 

  if (error) { 
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 }); 
  } 

  return NextResponse.json({ ok: true }); 
}

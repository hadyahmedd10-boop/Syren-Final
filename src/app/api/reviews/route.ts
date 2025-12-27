import { NextResponse } from "next/server"; 
import { supabase } from "@/lib/supabaseClient";
 
export async function POST(req: Request) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase configuration is missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
  
    const { error } = await supabase.from("testimonials").insert([ 
      { 
        name: body.name || "Anonymous", 
        country: body.country || "Unknown", // Added fallback for country
        message: body.message, // Changed from review to message
        rating: body.rating,
        approved: false, 
      }, 
    ]); 
  
    if (error) { 
      return NextResponse.json({ error: error.message }, { status: 500 }); 
    } 
  
    return NextResponse.json({ success: true }); 
  } catch (err) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

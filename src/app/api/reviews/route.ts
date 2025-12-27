import { NextResponse } from "next/server"; 
import { createClient } from "@supabase/supabase-js"; 
 
const getSupabase = () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key);
};

export async function POST(req: Request) {
  try {
    const supabase = getSupabase();

    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase configuration is missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
  
    const { error } = await supabase.from("reviews").insert([ 
      { 
        name: body.name || "Anonymous", 
        email: body.email,
        review: body.review, 
        experience: body.experience, 
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

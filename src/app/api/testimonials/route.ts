import { NextResponse } from "next/server"; 
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient"; 
import { testimonialRateLimit, getClientIp } from "@/lib/rateLimit"; 

const testimonialSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    z.string().email("Invalid email address").optional()
  ),
  rating: z.coerce.number().int().min(1, "Rating must be between 1 and 5.").max(5, "Rating must be between 1 and 5."),
  destination: z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    z.string().optional()
  ),
  experience_slug: z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    z.string().optional()
  ),
  message: z.string().trim().min(20, "Message must be at least 20 characters.").max(1000, "Message must be at most 1000 characters."),
  website: z.preprocess(
    (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
    z.string().optional()
  ),
});

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

  let body: unknown = null;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = testimonialSchema.safeParse(body);
  if (!parsed.success) {
    const flattened = parsed.error.flatten();
    const firstFieldError = Object.values(flattened.fieldErrors).flat()[0];
    return NextResponse.json(
      { ok: false, error: firstFieldError || flattened.formErrors[0] || "Invalid input." },
      { status: 400 }
    );
  }

  const { 
    name, 
    email, 
    rating, 
    destination, 
    experience_slug, 
    message, 
    website,
  } = parsed.data; 

  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseConfigured =
    !!supabaseUrl &&
    !!supabaseAnonKey &&
    supabaseAnonKey !== "xxxx" &&
    !supabaseAnonKey.includes("your-") &&
    supabaseUrl !== "PASTE_HERE";

  if (!supabaseConfigured) {
    return NextResponse.json(
      { ok: false, error: "Supabase is not configured." },
      { status: 500 }
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
    console.error("Testimonials insert failed:", error);
    return NextResponse.json({ ok: false, error: "Unable to save your story at this time. Please try again." }, { status: 500 }); 
  } 

  return NextResponse.json({ ok: true, success: true }); 
}

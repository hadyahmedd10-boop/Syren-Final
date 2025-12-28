import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) { 
  if (!req.nextUrl.pathname.startsWith("/admin")) { 
    return NextResponse.next(); 
  } 

  const res = NextResponse.next(); 

  const supabase = createServerClient( 
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, 
    { 
      cookies: { 
        get: (key) => req.cookies.get(key)?.value, 
        set: (key, value, options) => 
          res.cookies.set({ name: key, value, ...options }), 
        remove: (key, options) => 
          res.cookies.set({ name: key, value: "", ...options }), 
      }, 
    } 
  ); 

  const { data: { user } } = await supabase.auth.getUser();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!user || (adminEmail && user.email !== adminEmail)) { 
    const url = new URL("/login", req.url);
    if (user) {
      url.searchParams.set("error", "unauthorized");
    }
    return NextResponse.redirect(url); 
  } 

  return res; 
} 

export const config = {
  matcher: ["/admin/:path*"],
};

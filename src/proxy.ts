import { NextResponse } from "next/server"; 
import type { NextRequest } from "next/server"; 

const allowlist = (process.env.ADMIN_EMAIL_ALLOWLIST || "") 
  .split(",") 
  .map((s) => s.trim().toLowerCase()) 
  .filter(Boolean); 

export default function proxy(req: NextRequest) { 
  const { pathname } = req.nextUrl; 

  if (!pathname.startsWith("/admin")) return NextResponse.next(); 

  // read email from cookie (set by your login flow) 
  const email = (req.cookies.get("admin_email")?.value || "").toLowerCase(); 

  if (!email || !allowlist.includes(email)) { 
    const url = req.nextUrl.clone(); 
    url.pathname = "/login"; 
    url.searchParams.set("next", pathname); 
    return NextResponse.redirect(url); 
  } 

  return NextResponse.next(); 
} 

export const config = { 
  matcher: ["/admin/:path*", "/api/admin/:path*"], 
}; 

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  let res = NextResponse.next();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            req.cookies.set(name, value)
          );
          res = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // This will refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginRoute = req.nextUrl.pathname === "/login";

  // Check if user is in allowlist if ADMIN_EMAIL_ALLOWLIST is set
  const allowlist = process.env.ADMIN_EMAIL_ALLOWLIST;
  const adminEmails = allowlist ? allowlist.split(",").map(email => email.trim().toLowerCase()) : [];
  
  const isUserInAllowlist = !!(user && (
    adminEmails.length === 0 || 
    adminEmails.includes(user.email?.toLowerCase() || "")
  ));

  if (isAdminRoute && !isUserInAllowlist) {
    const redirectUrl = new URL("/login", req.url);
    if (!user) {
      redirectUrl.searchParams.set("next", req.nextUrl.pathname);
    } else {
      // If logged in but not in allowlist, show error
      redirectUrl.searchParams.set("error", "not_allowed");
    }
    return NextResponse.redirect(redirectUrl);
  }

  // If user is already logged in and in allowlist, redirect to admin if they try to access login
  if (isLoginRoute && isUserInAllowlist) {
    return NextResponse.redirect(new URL("/admin/testimonials", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};

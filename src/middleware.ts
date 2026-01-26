import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

const allowlist = (process.env.ADMIN_EMAIL_ALLOWLIST || "")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

/**
 * Middleware for Syren application.
 * Handles admin protection and logs requests to troubleshoot RSC abort spam.
 */
export default async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const isDev = process.env.NODE_ENV === "development";
  const isRsc = searchParams.has("_rsc");

  // 1. Supabase Session Refresh (Requested Production Audit Fix)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  if (!supabaseUrl || !supabaseAnonKey) {
    if (isDev) {
      console.warn("[Middleware] [WARNING] Supabase environment variables are missing. Auth session refresh skipped.");
    }
  } else {
    try {
      const supabase = createServerClient(
        supabaseUrl,
        supabaseAnonKey,
        {
          cookies: {
            get(name: string) {
              return req.cookies.get(name)?.value;
            },
            set(name: string, value: string, options: CookieOptions) {
              req.cookies.set({
                name,
                value,
                ...options,
              });
              response = NextResponse.next({
                request: {
                  headers: req.headers,
                },
              });
              response.cookies.set({
                name,
                value,
                ...options,
              });
            },
            remove(name: string, options: CookieOptions) {
              req.cookies.set({
                name,
                value: "",
                ...options,
              });
              response = NextResponse.next({
                request: {
                  headers: req.headers,
                },
              });
              response.cookies.set({
                name,
                value: "",
                ...options,
              });
            },
          },
        }
      );
      
      // Refresh session if it exists
      await supabase.auth.getUser();
    } catch (err) {
      if (isDev) {
        console.error("[Middleware] [ERROR] Failed to initialize Supabase client:", err);
      }
    }
  }

  // 2. HARD BYPASS: Immediately return next() for internal Next.js/Vercel/Internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/.well-known") ||
    pathname === "/favicon.ico" ||
    isRsc
  ) {
    if (isDev) {
      console.log(`[Middleware] [BYPASS] ${pathname}${isRsc ? ' [RSC]' : ''}`);
    }
    return response;
  }

  // 3. Admin Protection Logic: Strictly scoped to /admin and /api/admin
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const email = (req.cookies.get("admin_email")?.value || "").toLowerCase();

    if (!email || !allowlist.includes(email)) {
      // For API routes, return 401 instead of redirecting
      if (pathname.startsWith("/api/")) {
        if (isDev) console.log(`[Middleware] [REJECT] Unauthorized API access: ${pathname} -> 401`);
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      
      if (isDev) {
        console.log(`[Middleware] [REDIRECT] Unauthorized access: ${pathname} -> /login`);
      }
      return NextResponse.redirect(url);
    }
    
    if (isDev) {
      console.log(`[Middleware] [HANDLED] Authorized access: ${pathname}`);
    }
  } else if (isDev) {
    // Log other requests in dev to see what's being touched
    console.log(`[Middleware] [NEXT] ${pathname}`);
  }

  return response;
}

/**
 * Matcher for middleware.
 * Optimized to exclude static assets early.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (non-admin API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
};

import { NextResponse } from 'next/server' 
 import type { NextRequest } from 'next/server' 
 
 export function middleware(req: NextRequest) { 
   if (req.nextUrl.pathname.startsWith('/admin')) { 
     const auth = req.headers.get('authorization') 
     if (auth !== `Bearer ${process.env.ADMIN_SECRET}`) { 
       return NextResponse.redirect(new URL('/', req.url)) 
     } 
   } 
 }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/admin/:path*',
  ],
}

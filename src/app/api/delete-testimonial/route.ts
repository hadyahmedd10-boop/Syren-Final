import { NextResponse } from 'next/server' 
import { createClient } from '@supabase/supabase-js' 
 
export async function POST(req: Request) { 
  const id = new URL(req.url).searchParams.get('id') 
  const supabase = createClient( 
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.SUPABASE_SERVICE_ROLE_KEY! 
  ) 
 
  await supabase.from('testimonials').delete().eq('id', id) 
  return NextResponse.redirect(new URL('/admin/testimonials', req.url)) 
}

import { createClient } from '@supabase/supabase-js' 
 
 const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL 
 const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
 
 // Safe initialization for development without keys
 export const supabase = (supabaseUrl && supabaseUrl !== 'xxxx' && supabaseAnonKey) 
   ? createClient(supabaseUrl, supabaseAnonKey) 
   : null as any;
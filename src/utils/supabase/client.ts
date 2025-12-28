import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const isValidUrl = (url: string | undefined) => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (!isValidUrl(supabaseUrl) || !supabaseAnonKey || supabaseAnonKey === 'xxxx' || supabaseAnonKey.includes('your-')) {
    return null
  }

  return createBrowserClient(supabaseUrl!, supabaseAnonKey)
}

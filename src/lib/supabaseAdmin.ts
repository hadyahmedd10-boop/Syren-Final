import { createClient } from "@supabase/supabase-js"; 
 
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const isValidUrl = (url: string | undefined) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const supabaseAdmin = (isValidUrl(supabaseUrl) && supabaseServiceRoleKey && supabaseServiceRoleKey !== 'xxxx') 
  ? createClient(supabaseUrl!, supabaseServiceRoleKey) 
  : null;

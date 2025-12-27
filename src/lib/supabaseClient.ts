import { createClient } from "@supabase/supabase-js";

const getSupabase = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || url === "xxxx") {
    return null;
  }

  try {
    return createClient(url, key);
  } catch (error) {
    console.error("Supabase client initialization failed:", error);
    return null;
  }
};

export const supabase = getSupabase();

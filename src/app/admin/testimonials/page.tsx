import { redirect } from "next/navigation"; 
import { createClient } from "@/utils/supabase/server"; 
import AdminTestimonials from "./AdminTestimonials"; 

export default async function Page() { 
  const supabase = await createClient(); 
  
  if (!supabase) {
    redirect("/login");
  }

  const { 
    data: { session }, 
  } = await supabase.auth.getSession(); 

  if (!session) {
    redirect("/login"); 
  }

  return <AdminTestimonials />; 
}
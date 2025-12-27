"use client"; 
 
 import { useState } from "react"; 
 import { supabase } from "@/lib/supabaseClient"; 
 
 export default function ReviewModal() { 
   const [form, setForm] = useState({ 
     name: "", 
     country: "", 
     rating: 5, 
     message: "", 
   }); 
 
   const submit = async () => { 
     if (!supabase) {
       alert("Supabase is not configured properly.");
       return;
     }

     const { error } = await supabase.from("testimonials").insert([form]); 
     if (error) {
       console.error("Error submitting review:", error);
       alert("Something went wrong. Please try again.");
     } else {
       alert("Thank you for sharing your experience ✨"); 
     }
   }; 
 
   return ( 
     <div className="rounded-2xl border border-border bg-surface p-8 max-w-lg mx-auto"> 
       <h3 className="font-serif text-2xl text-primary mb-4"> 
         How was your experience with Syren? 
       </h3> 
 
       <div className="space-y-4">
         <input placeholder="Your Name" 
           className="syren-input" 
           value={form.name}
           onChange={e => setForm({...form, name: e.target.value})} 
         /> 

         <input placeholder="Your Country" 
           className="syren-input" 
           value={form.country}
           onChange={e => setForm({...form, country: e.target.value})} 
         /> 
 
         <textarea placeholder="Your experience" 
           className="syren-input" 
           value={form.message}
           onChange={e => setForm({...form, message: e.target.value})} 
           rows={4}
         /> 
       </div>
 
       <button onClick={submit} className="syren-btn-primary mt-6 w-full"> 
         Submit Review 
       </button> 
     </div> 
   ); 
 }

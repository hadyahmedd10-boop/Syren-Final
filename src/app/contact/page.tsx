import type { Metadata } from "next";
import SectionHeader from "@/components/layout/SectionHeader";

export const metadata: Metadata = {
  title: "Contact Us | Syren",
  description: "Begin your extraordinary Egyptian journey. Contact our concierge team for private bookings and curated itineraries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() { 
   return ( 
     <main className="min-h-screen bg-background">
       <section className="section"> 
         <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-20"> 
  
         {/* LEFT — INFO */} 
         <div> 
           <SectionHeader 
             title="Contact Syren" 
             label="Begin Your Journey" 
             align="left"
             className="mb-8"
           />
           <p className="text-text-secondary mb-12"> 
             Every journey begins with a conversation. Our concierge team is ready. 
           </p> 
  
           <div className="space-y-6 text-sm"> 
             <p><strong>Email:</strong> hello@syren.travel</p> 
             <p><strong>WhatsApp:</strong> +20 10 0000 0000</p> 
             <p><strong>Location:</strong> Cairo, Egypt</p> 
             <p><strong>Availability:</strong> 24/7 Concierge Support</p> 
           </div> 
         </div> 
  
         {/* RIGHT — FORM */} 
         <form 
           action="https://formsubmit.co/hello@syren.travel" 
           method="POST" 
           className="bg-surface p-10 rounded-2xl border border-border space-y-6" 
         > 
           <input type="hidden" name="_subject" value="New Syren Inquiry" /> 
           <input type="hidden" name="_captcha" value="false" /> 
  
           <input required name="name" placeholder="Full Name" className="input" /> 
           <input required name="email" type="email" placeholder="Email Address" className="input" /> 
           <input name="whatsapp" placeholder="WhatsApp (optional)" className="input" /> 
           <textarea name="message" rows={4} placeholder="Tell us what you’re dreaming of…" className="input" /> 
  
           <button type="submit" className="syren-btn-primary w-full"> 
             Send Inquiry 
           </button> 
         </form> 
  
       </div> 
     </section> 
   </main>
   ) 
 }

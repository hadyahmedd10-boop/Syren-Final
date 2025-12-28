import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Syren",
  description: "Begin your extraordinary Egyptian journey. Contact our concierge team for private bookings and curated itineraries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() { 
   return ( 
     <section className="section bg-background"> 
       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20"> 
  
         {/* LEFT — INFO */} 
         <div> 
           <h1 className="font-serif text-5xl mb-6 text-primary"> 
             Contact Syren 
           </h1> 
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
   ) 
 }

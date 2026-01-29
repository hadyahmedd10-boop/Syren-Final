import type { Metadata } from "next";
import SectionHeader from "@/components/layout/SectionHeader";

import ContactForm from "@/components/forms/ContactForm";

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
       <h1 className="sr-only">Contact Syren</h1>
      <section className="section"> 
        <div className="max-w-7xl mx-auto container-x grid md:grid-cols-2 gap-8 md:gap-16"> 
 
        {/* LEFT — INFO */} 
        <div> 
          <SectionHeader 
            title="Contact Syren" 
            label="Begin Your Journey" 
            align="left"
            className="mb-6 md:mb-8"
          />
          <p className="text-text-secondary mb-8 md:mb-12"> 
            Every journey begins with a conversation. Our concierge team is ready. 
          </p> 
 
          <div className="space-y-4 md:space-y-6 text-sm"> 
            <p><strong>Email:</strong> hello@syren.travel</p> 
            <p><strong>WhatsApp:</strong> +20 10 0000 0000</p> 
            <p><strong>Location:</strong> Cairo, Egypt</p> 
            <p><strong>Availability:</strong> 24/7 Concierge Support</p> 
          </div> 
        </div> 
 
        {/* RIGHT — FORM */} 
        <ContactForm /> 
 
      </div> 
    </section> 
  </main>
   ) 
 }

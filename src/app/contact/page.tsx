import type { Metadata } from "next";
import SectionHeader from "@/components/layout/SectionHeader";
import { MessageCircle } from "lucide-react";
import { HERO_IMAGES } from "@/lib/images";
import HeroShell from "@/components/ui/HeroShell";

import { SOCIAL_LINKS, WHATSAPP_LINK, SOCIAL_EVENTS } from "@/config/social";
import ContactForm from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TrackedLink from "@/components/ui/TrackedLink";

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
       
       <HeroShell
         backgroundImage={HERO_IMAGES.home.src}
         eyebrow="Begin Your Journey"
         title="Contact Syren"
         subtitle="Every journey begins with a conversation. Our concierge team is ready."
         heightClassName="min-h-[40vh] md:min-h-[50vh]"
       />

      <section className="section"> 
        <div className="max-w-7xl mx-auto container-x grid md:grid-cols-2 gap-8 md:gap-16"> 
 
        {/* LEFT — INFO */} 
        <div> 
          <div className="mb-8 mt-4">
            <WhatsAppButton className="w-full sm:w-auto" location="contact_page" />
          </div>
 
          <div className="space-y-4 md:space-y-6 text-sm"> 
            <p><strong>Email:</strong> {SOCIAL_LINKS.email}</p> 
            <p><strong>WhatsApp:</strong> <TrackedLink href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" eventName={SOCIAL_EVENTS.whatsapp} eventProps={{ location: "contact_page_text", url: WHATSAPP_LINK }} className="hover:text-accent-gold transition-colors">+20 101 601 5723</TrackedLink></p> 
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

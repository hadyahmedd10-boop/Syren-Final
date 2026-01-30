"use client";

import Link from "next/link"
import { SOCIAL_LINKS, WHATSAPP_LINK, SOCIAL_EVENTS } from "@/config/social";
import { trackCta } from "@/lib/track";

export default function Footer() { 
  return ( 
    <footer className="bg-black section-tight border-t border-border"> 
      <div className="max-w-7xl mx-auto container-x grid md:grid-cols-4 gap-8 md:gap-10"> 
        
        <div className="md:col-span-1"> 
          <h3 className="font-serif text-2xl mb-4">Syren</h3> 
          <p className="text-sm opacity-70 font-sans"> 
            Curated journeys through Egypt — guided by soul, crafted with care. 
          </p> 
        </div> 

        <div> 
          <h4 className="mb-4 font-semibold font-sans uppercase tracking-widest text-xs">Explore</h4> 
          <ul className="space-y-2 text-sm opacity-70 font-sans"> 
            <li><Link href="/destinations" className="hover:text-accent-gold transition-colors">Destinations</Link></li> 
            <li><Link href="/experiences" className="hover:text-accent-gold transition-colors">Experiences</Link></li> 
            <li><Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li> 
          </ul> 
        </div> 

        <div> 
          <h4 className="mb-4 font-semibold font-sans uppercase tracking-widest text-xs">Connect</h4> 
          <ul className="space-y-2 text-sm opacity-70 font-sans">
            <li>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-gold transition-colors"
                aria-label="Follow Syren on Instagram"
              >
                Instagram
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-gold transition-colors"
                aria-label="Connect with Syren on LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-gold transition-colors"
                aria-label="Contact Syren via WhatsApp"
              >
                WhatsApp
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="hover:text-accent-gold transition-colors"
                aria-label="Email Syren"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div> 
          <h4 className="mb-4 font-semibold font-sans uppercase tracking-widest text-xs">Updates</h4> 
          <p className="text-sm opacity-70 font-sans mb-4"> 
            WhatsApp & Private Concierge available 24/7 
          </p> 
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              const button = form.querySelector('button');
              if (button) button.disabled = true;
              
              try {
                await fetch('/api/notify/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: 'Newsletter Subscriber',
                    email: email,
                    subject: 'Newsletter Signup',
                    message: 'New newsletter signup from footer/CTA.',
                    pathname: window.location.pathname
                  })
                });
                alert('Thank you for joining our updates!');
                form.reset();
              } catch (err) {
                console.error('Newsletter error:', err);
              } finally {
                if (button) button.disabled = false;
              }
            }}
          > 
            <input placeholder="Email" name="email" type="email" className="input mb-2" required /> 
            <button type="submit" className="btn-secondary w-full">Join Updates</button> 
          </form> 
        </div> 
      </div> 

      <div className="text-center mt-16 text-xs opacity-40 font-sans tracking-widest"> 
        © {new Date().getFullYear()} Syren. All rights reserved. 
      </div> 
    </footer> 
  ) 
}

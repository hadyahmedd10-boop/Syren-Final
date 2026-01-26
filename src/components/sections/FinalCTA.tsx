"use client";

import Reveal from "../motion/Reveal";
import Link from "next/link";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/images";

interface FinalCTAProps {
  className?: string;
  as?: React.ElementType;
}

export default function FinalCTA({ className = "", as: Component = "div" }: FinalCTAProps) {
  return (
    <Component
      aria-labelledby="final-cta-title"
      className={`relative bg-background overflow-hidden ${className}`}
    >
      <Image
        src={HERO_IMAGES.home}
        alt="The majestic beauty of Egypt - A Syren journey"
        fill
        className="object-cover object-center opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-border),transparent_60%)] opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-8 text-center relative z-10 py-24">
        <SectionHeader 
          title="Experience Egypt properly."
          label="Next Steps"
          description={
            <>
              Every journey starts with a conversation. We don’t sell packages — we design experiences that fit you.
            </>
          }
          className="mb-12"
        />
        
        <Reveal>
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mb-12">
              <a 
                href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20journey%20with%20Syren"
                target="_blank"
                rel="noopener noreferrer"
                className="syren-btn w-full sm:min-w-[240px]"
              >
                PLAN YOUR JOURNEY
              </a>
              <Link 
                href="/experiences"
                className="syren-btn-secondary w-full sm:min-w-[240px]"
              >
                View Experiences
              </Link>
            </div>

            <div className="w-full max-w-md mx-auto pt-12 border-t border-white/5">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/60 mb-6">Stay inspired</p>
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
                className="flex flex-col sm:flex-row gap-3"
              > 
                <label htmlFor="newsletter-email" className="sr-only">Email address for updates</label>
                <input id="newsletter-email" placeholder="Email" name="email" type="email" className="input flex-grow" required /> 
                <button type="submit" className="btn-secondary whitespace-nowrap">Join Updates</button> 
              </form>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
    </Component>
  );
}

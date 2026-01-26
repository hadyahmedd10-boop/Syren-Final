import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGES } from "@/lib/images";
import { Sparkles, ShieldCheck, Globe, Users } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Spirit of Syren | Luxury Travel Curators in Egypt",
  description: "Syren was built for travelers who don’t want Egypt explained to them — they want to experience it properly. Not rushed. Not staged. Not wrapped in clichés.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: <Sparkles className="text-accent-gold" />,
    title: "We Travel Like Locals, Not Tourists",
    description: "Most trips show you Egypt from the outside. We take you inside it. We design experiences the same way locals move through the country — at the right pace, at the right time, with the right people. Early mornings when sites are quiet. Evenings when cities soften. Moments that don’t feel scheduled, because they aren’t. This isn’t about seeing more. It’s about seeing clearly."
  },
  {
    icon: <ShieldCheck className="text-accent-gold" />,
    title: "Nothing Pre-Built. Nothing Generic.",
    description: "We don’t sell packages. We don’t reuse itineraries. We don’t believe one experience fits everyone. Every journey starts with a conversation — not a form. We listen to how you travel, what you care about, and what you want this trip to mean. From there, we build something that fits you, not a brochure. Some travelers want depth. Some want comfort. Some want adventure. Most want a balance — and that balance looks different for everyone."
  },
  {
    icon: <Globe className="text-accent-gold" />,
    title: "Comfort Without Performance",
    description: "Luxury, to us, isn’t about excess. It’s about ease. Knowing where to go — and when not to. Having the right people around you. Moving smoothly without needing to think about logistics. Everything works quietly in the background so you can stay present in the experience itself. No forced experiences. No unnecessary stops. No pressure to “do it all.”"
  },
  {
    icon: <Users className="text-accent-gold" />,
    title: "Why We Exist",
    description: "Syren exists because Egypt deserves better than mass tourism — and travelers deserve better than rushed, surface-level trips. We work with people who want to engage with the country respectfully, thoughtfully, and honestly. If you’re looking to tick boxes, we’re probably not the right fit. If you want a journey that stays with you long after you leave, we might be."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={HERO_IMAGES.home}
          alt="About Syren: Private journeys designed by local experts"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        
        <Reveal>
          <div className="relative z-10 text-center px-6">
            <span className="text-accent-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">
              About Syren
            </h1>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Syren was built for travelers who don’t want Egypt explained to them — they want to experience it properly."
            description={
              <>
                <p className="mb-8">
                  Not rushed. Not staged. Not wrapped in clichés.
                </p>
                <p>
                  Egypt is layered, intense, beautiful, chaotic, spiritual, and deeply human. 
                  We don’t try to simplify that — we design journeys that respect it.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* Values */}
      <section className="section bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/30 transition-all duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-serif text-xl mb-4">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-3xl mx-auto text-center border border-white/5 rounded-2xl p-16 bg-surface/30 backdrop-blur-sm">
          <SectionHeader 
            title="What We Build" 
            description={
              <>
                <p className="mb-4 text-accent-gold uppercase tracking-widest text-xs font-bold">Not trips. Not schedules. Not content for social media.</p>
                <p className="mb-4">We build experiences that feel real while you’re in them — and meaningful after you’re home.</p>
                <p className="text-white font-serif italic text-xl">That’s Syren. Simple as that.</p>
              </>
            }
            className="mb-12"
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/experiences" className="syren-btn-primary px-10 py-4">
              Explore Experiences
            </Link>
            <Link href="/contact" className="px-10 py-4 border border-white/10 rounded-full text-white text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Speak with a Curator
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA as="section" className="section border-t border-white/5" />
    </main>
  );
}

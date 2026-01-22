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
  description: "Syren is a luxury travel platform dedicated to curating the most extraordinary experiences across Egypt. We believe in travel with soul, depth, and absolute privacy.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: <Sparkles className="text-accent-gold" />,
    title: "Curated Excellence",
    description: "We don't just book trips; we craft stories. Every partner and experience is hand-selected for its soul and standard."
  },
  {
    icon: <ShieldCheck className="text-accent-gold" />,
    title: "Uncompromising Safety",
    description: "Your peace of mind is our priority. We handle every detail with precision so you can stay present in the moment."
  },
  {
    icon: <Globe className="text-accent-gold" />,
    title: "Local Connection",
    description: "Go beyond the surface. We connect you with the heartbeat of Egypt through exclusive access and local expertise."
  },
  {
    icon: <Users className="text-accent-gold" />,
    title: "Personal Legacy",
    description: "We believe travel is a form of art. We design journeys that leave a lasting impact on both the traveler and the destination."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={HERO_IMAGES.home}
          alt="The Spirit of Syren: Curating the most extraordinary luxury travel experiences in Egypt"
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
              The Art of <span className="italic">Egyptian</span> Discovery
            </h1>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title={<>Syren was born from a simple belief: that travel should be as <span className="text-accent-gold italic">extraordinary</span> as the soul seeking it.</>}
            description={
              <>
                <p className="mb-8">
                  In a world of mass tourism, we stand for the rare, the authentic, and the deeply personal. Egypt is a land of infinite depth, and our mission is to peel back the layers, revealing the electric energy and timeless grace that most travelers never see.
                </p>
                <p>
                  Whether it&apos;s a private dinner at the foot of the Sphinx or a soul-stirring retreat in the Siwa Oasis, we ensure every Syren journey is a masterpiece of curation.
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
            title="Ready to begin your story?" 
            description="Let us craft a journey that resonates with your unique vision of discovery."
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

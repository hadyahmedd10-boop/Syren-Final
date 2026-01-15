import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/layout/SectionHeader";
import DestinationIntro from "@/components/sections/destinations/DestinationIntro";
import DestinationExperiences from "@/components/sections/destinations/DestinationExperiences";
import FinalCTA from "@/components/sections/FinalCTA";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Luxury Cairo Experience | Private Egyptian Journeys",
  description: "Discover the soul of Cairo with private VIP access, luxury boutique stays, and curated nightlife. Experience the city like never before.",
  alternates: {
    canonical: "/landing/luxury-cairo",
  },
};

export default function LuxuryCairoLanding() {
  // Filter experiences related to Cairo
  const cairoExperiences = experiences.filter(exp => 
    exp.destinations.includes('cairo') || exp.cities.toLowerCase().includes('cairo')
  );

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      <div className="section px-6 md:px-8 max-w-4xl mx-auto text-center">
        <span className="text-accent-gold font-sans text-xs uppercase tracking-[0.5em] mb-4 block">Exclusive Campaign</span>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">Redefining Cairo Luxury</h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-sans italic">
          &ldquo;Forget what you know about Cairo. We open doors that remain closed to others, 
          revealing a city of secret gardens, midnight jazz, and ancient wonders seen in absolute solitude.&rdquo;
        </p>
      </div>

      <DestinationIntro 
        description="Cairo is a city of layers. From the dusty gold of the pyramids to the electric neon of Zamalek, we curate the perfect balance of ancient majesty and modern sophistication."
        vibeKeywords={["Sophisticated", "Electric", "Timeless", "Private"]}
      />

      <DestinationExperiences 
        experiences={cairoExperiences} 
        title="Curated Cairo Journeys"
        className="bg-surface section-merge-top"
      />

      <section className="section bg-background border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader title="The Syren Difference in Cairo" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-accent-gold font-sans text-sm uppercase tracking-widest mb-4">VIP Access</h3>
              <p className="text-text-secondary text-sm">After-hours entry to monuments and private gallery viewings.</p>
            </div>
            <div>
              <h3 className="text-accent-gold font-sans text-sm uppercase tracking-widest mb-4">Local Insiders</h3>
              <p className="text-text-secondary text-sm">Hosted by the city&apos;s leading artists, historians, and socialites.</p>
            </div>
            <div>
              <h3 className="text-accent-gold font-sans text-sm uppercase tracking-widest mb-4">Seamless Flow</h3>
              <p className="text-text-secondary text-sm">Private security and luxury transfers that bypass the city&apos;s pulse.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

  import type { Metadata } from "next";
  import { experiences } from "@/data/experiences";
import { excursions } from "@/data/excursions";
import { destinations } from "@/data/destinations";
import { HERO_IMAGES } from "@/lib/images";
import Link from "next/link";
  import Reveal from "@/components/motion/Reveal";
  import Image from "next/image";

  // Components
import Hero from "@/components/sections/experiences/ExperiencesHero";
import ExperiencesGrid from "@/components/sections/experiences/ExperiencesGrid";
import ExperienceCard from "@/components/sections/ExperienceCard";
import SectionHeader from "@/components/layout/SectionHeader";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/FinalCTA";
import Testimonials from "@/components/sections/TestimonialsPreview";

export const metadata: Metadata = {
  title: "Ultra-Private Egyptian Experiences | Curated Journeys | Syren",
  description: "Discover our collection of ultra-private, expertly curated Egyptian experiences. From desert expeditions to private yacht charters and exclusive VIP access.",
  alternates: {
    canonical: "/experiences",
  },
  openGraph: {
    title: "Our Experiences | Syren Travel",
    description: "Discover our collection of ultra-private, expertly curated Egyptian experiences.",
    url: "/experiences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Experiences | Syren Travel",
    description: "Discover our collection of ultra-private, expertly curated Egyptian experiences.",
  },
};

export default function ExperiencesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syren.travel";
  
  const destinationMap = Object.fromEntries(destinations.map(d => [d.slug, d.name]));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": experiences.map((exp, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteUrl}/experiences/${exp.slug}`,
      "name": exp.title,
      "description": exp.description,
      "image": exp.heroImage.src
    }))
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        id="experiences-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="section-hero">
        <Hero />
      </section>
      
      <ExperiencesGrid />
      
      <FAQ />

      <section className="section mx-auto max-w-7xl px-6 md:px-8"> 
        <SectionHeader 
          title="Tours & Excursions" 
          description="Premium add-ons curated to elevate your destination experience — private, seamless, and unforgettable."
          className="mb-12 md:mb-16"
        />
      
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> 
          {excursions.map((exc, i) => {
            const destination = destinations.find(d => d.slug === exc.destinationSlug);
            const displayImage = exc.image || destination?.heroImage || HERO_IMAGES.home;
            
            return ( 
              <Reveal key={exc.slug} delay={0.05 * i}> 
                <ExperienceCard 
                  title={exc.title}
                  description={exc.shortDescription}
                  image={displayImage}
                  alt={exc.imageAlt ?? exc.title}
                  duration={exc.duration}
                  buttonText="Discover Excursion"
                  href={`/excursions/${exc.slug}`}
                /> 
              </Reveal> 
            );
          })} 
        </div> 
      </section>

      <Testimonials />
      <CTA as="section" className="section border-t border-border" />
    </main>
  );
}

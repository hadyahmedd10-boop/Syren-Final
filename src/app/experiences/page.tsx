import type { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { HERO_IMAGES } from "@/lib/images";
import HeroShell from "@/components/ui/HeroShell";

import ExperiencesGrid from "@/components/sections/experiences/ExperiencesGrid";
import ExperiencesSectionNav from "@/components/sections/experiences/ExperiencesSectionNav";
import ToursAndExcursions from "@/components/sections/experiences/ToursAndExcursions";
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

      <HeroShell 
        eyebrow="COLLECTIONS" 
        title="Our Experiences" 
        subtitle="Curated journeys through the soul of Egypt. Private. Profound. Personal." 
        backgroundImage={HERO_IMAGES.home.src}
        heightClassName="min-h-[62svh] md:min-h-[68svh]"
      />

      <ExperiencesSectionNav />

      <div id="experiences-scroll-root">
        <section id="explore-our-journeys" className="scroll-mt-[140px]">
          <ExperiencesGrid />
        </section>

        <section id="frequently-asked-questions" className="scroll-mt-[140px]">
          <FAQ />
        </section>

        <ToursAndExcursions />

        <section id="echoes-of-extraordinary-journeys" className="scroll-mt-32">
          <Testimonials />
        </section>
        <section id="experience-egypt-properly" className="scroll-mt-32">
          <CTA as="div" className="section border-t border-border" />
        </section>
      </div>
    </main>
  );
}

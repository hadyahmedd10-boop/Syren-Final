  import type { Metadata } from "next";
  import Script from "next/script";
  import { experiences } from "@/data/experiences";

  // New Components
import ExperiencesHero from "@/components/sections/experiences/ExperiencesHero";
import PopularExperiences from "@/components/sections/PopularExperiences";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Discover our collection of ultra-private, expertly curated Egyptian experiences. From desert expeditions to private yacht charters.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/experiences`,
  },
  openGraph: {
    title: "Our Experiences | Syren Travel",
    description: "Discover our collection of ultra-private, expertly curated Egyptian experiences.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/experiences`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Experiences | Syren Travel",
    description: "Discover our collection of ultra-private, expertly curated Egyptian experiences.",
  },
};

export default function ExperiencesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": experiences.map((exp, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/experiences/${exp.slug}`,
      "name": exp.title,
      "description": exp.description,
      "image": typeof exp.heroImage === 'string' ? exp.heroImage : exp.heroImage.src
    }))
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="experiences-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ExperiencesHero />

      <section className="section">
        <PopularExperiences variant="nightlife" />
      </section>
      
      <section className="section">
        <TestimonialsPreview />
      </section>

      <section className="section">
        <PopularExperiences variant="luxury" />
      </section>
      
      <section className="section">
        <PopularExperiences variant="adventure" />
      </section>

      <FinalCTA as="section" className="section" />
    </main>
  );
}

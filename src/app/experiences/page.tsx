  import type { Metadata } from "next";
  import { experiences } from "@/data/experiences";
import { excursions } from "@/data/excursions";
import { destinations } from "@/data/destinations";
import Link from "next/link";
  import Reveal from "@/components/motion/Reveal";
  import Image from "next/image";

  // Components
import Hero from "@/components/sections/experiences/ExperiencesHero";
import ExperiencesGrid from "@/components/sections/experiences/ExperiencesGrid";
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
      "image": typeof exp.heroImage === 'string' ? exp.heroImage : exp.heroImage.src
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
      
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> 
          {excursions.map((exc, i) => ( 
            <Reveal key={exc.slug} delay={0.05 * i}> 
              <article className="group relative flex h-full flex-col overflow-hidden bg-surface border border-border transition-all duration-500 ease-out hover:border-primary/30 hover:-translate-y-1"> 
                <div className="relative aspect-[16/10] w-full overflow-hidden"> 
                  <Image 
                    src={exc.image} 
                    alt={exc.imageAlt ?? exc.title} 
                    fill 
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" 
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                    placeholder={typeof exc.image === "string" ? undefined : "blur"} 
                    priority={false} 
                  /> 
                  <div className="absolute inset-0 bg-black/25 transition-opacity duration-500 group-hover:bg-black/35" /> 
                  <div className="absolute left-6 top-6 z-10"> 
                    <span className="bg-background/70 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold backdrop-blur-md border border-accent-gold/20"> 
                      {exc.duration} 
                    </span> 
                  </div> 
                </div> 
      
                <div className="flex flex-1 flex-col p-8"> 
                  <h3 className="font-serif text-2xl tracking-tight text-accent-gold"> 
                    {exc.title} 
                  </h3> 
      
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-text-secondary"> 
                    {destinationMap[exc.destinationSlug]} · {exc.tourStyle} · {exc.availability} 
                  </p> 
      
                  <p className="mt-6 font-sans text-sm leading-relaxed text-white/60 flex-1"> 
                    {exc.shortDescription} 
                  </p> 
      
                  <div className="mt-8 pt-6 border-t border-white/10"> 
                    <Link href={`/excursions/${exc.slug}`} className="syren-btn-secondary"> 
                      View Itinerary 
                    </Link> 
                  </div> 
                </div> 
              </article> 
            </Reveal> 
          ))} 
        </div> 
      </section>

      <Testimonials />
      <CTA as="section" className="section border-t border-border" />
    </main>
  );
}

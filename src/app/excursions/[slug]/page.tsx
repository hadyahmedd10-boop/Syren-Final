import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/layout/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import CheckoutButton from "@/components/payments/CheckoutButton";
import { excursions } from "@/data/excursions";
import { MessageSquare } from "lucide-react";
import { destinations } from "@/data/destinations";
import { HERO_IMAGES } from "@/lib/images";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return excursions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const excursion = excursions.find((e) => e.slug === slug);

  if (!excursion) return { title: "Excursion Not Found | Syren" };

  const title = `${excursion.title} | Private Egyptian Excursion | Syren`;
  const description = excursion.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/excursions/${slug}` },
    openGraph: {
      title,
      description,
      url: `/excursions/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ExcursionPage({ params }: Props) {
  const { slug } = await params;
  const excursion = excursions.find((e) => e.slug === slug);

  if (!excursion) notFound();

  const destination = destinations.find((d) => d.slug === excursion.destinationSlug);
  const heroImage = excursion.heroImage || destination?.heroImage || HERO_IMAGES.home;

  // Trivial highlight inference
  const inferStepHighlights = (item: { title: string; description: string }) => {
    const chips: string[] = [];
    const text = `${item.title} ${item.description}`.toLowerCase();
    
    if (text.includes("private guide") || text.includes("expert guide")) chips.push("Private Guide");
    if (text.includes("sunset")) chips.push("Sunset Stop");
    if (text.includes("transfer") || text.includes("pickup") || text.includes("private driver")) chips.push("Transfer");
    if (text.includes("lunch")) chips.push("Lunch Included");
    if (text.includes("snorkeling")) chips.push("Snorkeling");
    if (text.includes("boat") || text.includes("sailing")) chips.push("Boat Trip");
    
    return chips.slice(0, 3);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={`Immerse yourself in the ${excursion.title} excursion, a private journey through Egypt's wonders`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-accent-gold">
                {excursion.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 font-sans text-sm md:text-base uppercase tracking-[0.3em] text-white/85">
                {excursion.duration} · {excursion.tourStyle} · {excursion.availability}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10">
                {excursion.shortDescription}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-6">
                <CheckoutButton 
                  itemType="excursion" 
                  slug={slug} 
                  label="Reserve this Excursion" 
                />
                
                <a
                  href={`https://wa.me/201000000000?text=${encodeURIComponent(`I want to book the ${excursion.title} excursion`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="syren-btn-secondary flex items-center gap-3 w-full sm:w-auto"
                >
                  <MessageSquare size={16} />
                  INQUIRE VIA WHATSAPP
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-surface/30 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader 
            title="Excursion Highlights" 
            label="Key Experiences"
            className="mb-10"
          />

          <div className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {excursion.highlights.map((h) => (
              <div
                key={h}
                className="rounded-2xl border border-border bg-background p-4 hover:border-accent-gold/30 transition-colors duration-300"
              >
                <p className="font-sans text-xs md:text-sm text-text-primary leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <SectionHeader 
            title="The Journey Flow" 
            label="Step by Step"
            className="mb-12 md:mb-20"
          />

          <div className="relative space-y-0">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/20 md:left-1/2 md:-ml-px hidden md:block" />

            {excursion.itinerary.map((step, i) => (
              <Reveal key={`${step.title}-${i}`} delay={0.05 * i}>
                <div className={`relative flex items-center mb-10 md:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-ml-1 w-2.5 h-2.5 rounded-full border border-accent-gold/60 bg-background z-10" />
                  
                  {/* Content */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-10">
                    <div 
                      tabIndex={0}
                      className="p-5 md:p-6 syren-card syren-card-hover border-border/60 bg-surface/50 backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] focus-visible:ring-1 focus-visible:ring-accent-gold/30 focus-visible:outline-none group"
                    >
                      <div className="flex flex-col gap-2 mb-3">
                        {step.time && (
                          <span 
                            tabIndex={0}
                            className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold transition-all duration-300 ease-out hover:text-accent-gold hover:drop-shadow-[0_0_8px_rgba(196,160,82,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-block"
                          >
                            {step.time}
                          </span>
                        )}
                        <h3 className="font-serif text-2xl text-text-primary group-hover:text-accent-gold transition-colors duration-500">
                          {step.title}
                        </h3>
                        
                        {/* Highlights Chips */}
                        {(() => {
                          const chips = inferStepHighlights(step);
                          if (chips.length === 0) return null;
                          return (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {chips.map(chip => (
                                <span 
                                  key={chip} 
                                  tabIndex={0}
                                  className="syren-pill border border-accent-gold/20 bg-accent-gold/5 text-accent-gold/80 hover:bg-accent-gold/10 hover:border-accent-gold/30 hover:text-accent-gold hover:shadow-[0_0_10px_rgba(196,160,82,0.1)]"
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                      <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader title="What’s Included" />

          <div className="mt-12 grid gap-4 md:gap-6 md:grid-cols-2">
            <div>
              <h3 className="label mb-6">Included</h3>
              <ul className="space-y-3">
                {excursion.included.map((x) => (
                  <li key={x} className="text-sm text-text-secondary">
                    • {x}
                  </li>
                ))}
              </ul>
            </div>

            {excursion.notIncluded?.length ? (
              <div>
                <h3 className="label mb-6">Not Included</h3>
                <ul className="space-y-3 opacity-80">
                  {excursion.notIncluded.map((x) => (
                    <li key={x} className="text-sm text-text-secondary">
                      • {x}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <FinalCTA as="section" className="section border-t border-border" />
    </main>
  );
}


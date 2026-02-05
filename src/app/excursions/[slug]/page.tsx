import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/layout/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import { constructMetadata } from "@/lib/seo";
import CheckoutButton from "@/components/payments/CheckoutButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroShell from "@/components/ui/HeroShell";
import ExcursionItinerary from "@/components/excursions/ExcursionItinerary";
import { excursions } from "@/data/excursions";
import { MessageSquare } from "lucide-react";
import { destinations } from "@/data/destinations";
import { HERO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/config/social";

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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <HeroShell
        backgroundImage={typeof heroImage === "string" ? heroImage : heroImage.src}
        eyebrow={`${excursion.duration} · ${excursion.tourStyle} · ${excursion.availability}`}
        title={excursion.title}
        subtitle={excursion.shortDescription}
        heightClassName="min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh]"
      >
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton 
            label="Book This Excursion"
            location="excursion_hero"
            message={`I'm interested in the ${excursion.title} excursion.`}
          />
          <CheckoutButton 
            itemType="excursion"
            slug={excursion.slug}
            label="Book Now"
          />
        </div>
      </HeroShell>

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
      <ExcursionItinerary steps={excursion.itinerarySteps} />

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

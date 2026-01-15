import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/layout/SectionHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import CheckoutButton from "@/components/payments/CheckoutButton";
import { excursions } from "@/data/excursions";
import { MessageSquare } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        {excursion.heroImage && (
          <Image
            src={excursion.heroImage}
            alt={excursion.title}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center brightness-[0.55]"
          />
        )}
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
      <section className="section">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader title="Highlights" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {excursion.highlights.map((h) => (
              <div
                key={h}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <p className="font-sans text-sm text-text-primary">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader title="Itinerary" />

          <div className="mt-12 space-y-10">
            {excursion.itinerary.map((step, i) => (
              <Reveal key={`${step.title}-${i}`} delay={0.05 * i}>
                <div className="rounded-xl border border-border p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    {step.time && (
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-text-secondary">
                        {step.time}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-accent-gold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
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

          <div className="mt-12 grid gap-12 md:grid-cols-2">
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


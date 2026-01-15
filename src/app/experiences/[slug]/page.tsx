import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { experiences } from "@/data/experiences";
import { CheckCircle2, Star, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import ExperienceTracker from "@/components/ExperienceTracker";
import SectionHeader from "@/components/layout/SectionHeader";
import BookingSection from "@/components/checkout/BookingSection";
import CheckoutButton from "@/components/payments/CheckoutButton";
import { excursions } from "@/data/excursions";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ success?: string; canceled?: string }>;
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  const title = `${experience.title} | Luxury Egypt Experience | Syren`;
  const description = experience.description;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syren.travel";
  const ogImage = typeof experience.heroImage === "string" ? experience.heroImage : experience.heroImage.src;

  return {
    title,
    description,
    alternates: {
      canonical: `/experiences/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/experiences/${slug}`,
      siteName: "Syren",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: experience.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ExperienceDetailPage({ params, searchParams }: Props) {
  // Await params and searchParams at the beginning to avoid potential Next.js 15/16 pitfalls
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { slug } = resolvedParams;
  const { success, canceled } = resolvedSearchParams;
  
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    notFound();
  }

  const matchedExcursions = excursions.filter(
    (exc) => 
      experience.destinations.includes(exc.destinationSlug) && 
      typeof exc.priceCents === "number"
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syren.travel";
  const heroImageUrl = typeof experience.heroImage === 'string' ? experience.heroImage : experience.heroImage.src;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": experience.title,
    "image": heroImageUrl,
    "description": experience.description,
    "brand": {
      "@type": "Brand",
      "name": "Syren"
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/experiences/${slug}`,
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": "Syren"
      },
      ...(experience.price && {
        "price": experience.price.amount,
      })
    }
  };

  const whatsappLink = `https://wa.me/201000000000?text=${encodeURIComponent(
    `I want to plan my ${experience.title} journey with Syren`
  )}`;

  return (
    <main className="min-h-screen bg-background">
      <ExperienceTracker experienceTitle={experience.title} experienceSlug={slug} />
      <script
        id={`experience-json-ld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Payment Notifications */}
      {success === "true" && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
          <div className="bg-green-500/10 border border-green-500/20 backdrop-blur-md p-6 rounded-2xl text-center">
            <CheckCircle2 className="mx-auto text-green-500 mb-4" size={32} />
            <h3 className="text-white font-serif text-xl mb-2">Booking Confirmed!</h3>
            <p className="text-white/70 text-sm">Thank you for choosing Syren. Our curators will contact you within 24 hours to finalize your itinerary.</p>
          </div>
        </div>
      )}

      {canceled === "true" && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
          <div className="bg-red-500/10 border border-red-500/20 backdrop-blur-md p-6 rounded-2xl text-center">
            <h3 className="text-white font-serif text-xl mb-2">Booking Canceled</h3>
            <p className="text-white/70 text-sm">Your payment was not processed. Feel free to contact us if you have any questions.</p>
          </div>
        </div>
      )}
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src={experience.heroImage}
          alt={experience.title}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center brightness-[0.55]"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <h1 className="mb-6 max-w-5xl font-serif text-5xl tracking-tight text-primary md:text-7xl lg:text-8xl">
              {experience.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <span className="font-sans text-sm uppercase tracking-[0.3em] text-white/60 font-medium md:text-base">
                {experience.duration}
              </span>
              <div className="hidden h-px w-8 bg-white/30 md:block" />
              <span className="font-sans text-sm uppercase tracking-[0.3em] text-white/90 font-light md:text-base">
                {experience.cities}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="mx-auto max-w-4xl px-6 text-center section bg-background">
        <SectionHeader 
          title="Experience Overview" 
          label="The Soul of the Journey" 
          className="mb-8 md:mb-12"
        />
        <Reveal>
          <p className="mx-auto max-w-3xl font-sans text-lg leading-relaxed tracking-wide text-text-secondary md:text-xl md:leading-loose italic">
            &ldquo;{experience.introduction}&rdquo;
          </p>
        </Reveal>
      </section>

      {/* 3. Key Experience Highlights */}
      {experience.highlights && (
        <section className="bg-surface section border-y border-white/5">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <SectionHeader 
              title="Curated Highlights" 
              label="The Distinction" 
            />
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
              {experience.highlights.map((highlight, idx) => (
                <Reveal key={idx} delay={0.1 * idx}>
                  <div className="p-6 border border-white/5 bg-background/50 hover:border-accent-gold/20 transition-colors duration-500 group h-full">
                    <div className="mb-3 text-accent-gold/40 group-hover:text-accent-gold transition-colors duration-500">
                      <Sparkles size={10} strokeWidth={1} />
                    </div>
                    <p className="font-serif text-lg text-text-primary leading-snug">
                      {highlight}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Itinerary (day by day) */}
      <section className="bg-surface section">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="space-y-8 md:space-y-12">
            {experience.itinerary.map((item, index) => (
              <Reveal key={item.day} delay={0.1 * index}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                  <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-serif text-4xl font-light text-accent-gold">
                        Day {item.day}
                      </span>
                      <div className="h-px flex-1 bg-accent-gold/20" />
                    </div>
                    <h3 className="mb-6 font-serif text-3xl tracking-tight text-text-primary">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base leading-relaxed text-text-secondary md:text-lg">
                      {item.description}
                    </p>
                    {item.meals && (
                      <div className="mt-8 flex items-center gap-2 border-t border-white/5 pt-6">
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent-gold/60">Included Meals:</span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/60">{item.meals}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What’s Included / Not Included */}
      <section className="bg-surface section border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <Reveal>
            <div className="rounded-2xl border border-white/5 bg-background/30 p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
            <SectionHeader 
              title="The Logistics" 
              className="mb-16"
            />
            
            <div className="grid gap-16 md:grid-cols-2">
                <div className="space-y-8">
                  <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold flex items-center gap-3">
                    <div className="h-px w-4 bg-accent-gold/40" />
                    Included
                  </h3>
                  <ul className="space-y-4">
                    {experience.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={16} className="mt-1 text-accent-gold/60 shrink-0" />
                        <span className="font-sans text-sm text-text-secondary leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {experience.notIncluded && (
                  <div className="space-y-8">
                    <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary/40 flex items-center gap-3">
                      <div className="h-px w-4 bg-text-secondary/20" />
                      Not Included
                    </h3>
                    <ul className="space-y-4">
                      {experience.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 opacity-50">
                          <div className="mt-2 h-1 w-1 rounded-full bg-text-secondary shrink-0" />
                          <span className="font-sans text-sm text-text-secondary leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Testimonials (experience-specific) */}
      <section className="section bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader 
            title="Traveler Stories" 
            label="The Testimony" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for now - could be fetched from API filtered by experience */}
            {[1, 2].map((i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="p-10 border border-white/5 bg-surface/30 relative">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <p className="font-serif text-xl text-white italic mb-8 leading-relaxed">
                    &ldquo;The level of personalization was beyond anything we expected. Syren truly opened doors to an Egypt we wouldn&apos;t have found on our own.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-accent-gold/30" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Anonymous Traveler</p>
                      <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/40">Verified Journey</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Soft Conversion Section (inquiry / interest) */}
      <section className="relative overflow-hidden bg-surface section border-y border-white/5">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionHeader 
            title="Ready to Personalize This Experience?" 
            label="Personal Curation" 
          />
          <Reveal>
            <p className="mx-auto mb-12 max-w-2xl font-sans text-lg text-text-secondary md:text-xl leading-relaxed">
              Every journey we create is unique. Message our master curators to adjust this itinerary to your specific pace and interests.
            </p>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-full flex justify-center">
                <CheckoutButton 
                  itemType="experience" 
                  slug={slug} 
                  label="Reserve this Journey" 
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="syren-btn flex items-center gap-3 w-full sm:w-auto"
                >
                  <MessageSquare size={18} />
                  INQUIRE VIA WHATSAPP
                </a>
                <Link 
                  href="/quote"
                  className="syren-btn-secondary flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <ArrowRight size={18} />
                  REQUEST CUSTOM QUOTE
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Booking Section */}
      {experience.price && (
        <section id="book" className="section bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold rounded-full blur-[120px]" />
          </div>
          
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <Reveal>
              <BookingSection
                experienceTitle={experience.title}
                experienceSlug={slug}
                basePrice={experience.price.amount}
                availableAddOns={matchedExcursions}
              />
            </Reveal>
          </div>
        </section>
      )}
    </main>
  );
}

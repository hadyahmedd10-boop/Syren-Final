import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import HeroShell from "@/components/ui/HeroShell";
import Reveal from "@/components/motion/Reveal";
import { CheckCircle2 } from "lucide-react";
import SocialProofStrip from "./SocialProofStrip";
import TrustBadges from "./TrustBadges";
import LandingTracking from "./LandingTracking";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface LandingShellProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string | StaticImageData;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  benefits?: string[];
  whatYouGet?: {
    title: string;
    items: string[];
  };
  children?: React.ReactNode;
}

export default function LandingShell({
  eyebrow,
  title,
  subtitle,
  heroImage,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  benefits = [
    "Expert Curation by Master Guides",
    "Private Door-to-Door Luxury Transport",
    "Priority Access to Egypt's Wonders"
  ],
  whatYouGet = {
    title: "The Syren Difference",
    items: [
      "Bespoke itineraries tailored to your pace",
      "Handpicked 5-star accommodations and dining",
      "24/7 dedicated concierge support",
      "Deeply immersive local storytelling"
    ]
  },
  children
}: LandingShellProps) {
  const isStaticImage = typeof heroImage !== "string";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": subtitle,
    "provider": {
      "@type": "TravelAgency",
      "name": "Syren",
      "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "areaServed": {
      "@type": "Country",
      "name": "Egypt"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Travel Services",
      "itemListElement": benefits.map((benefit, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit
        },
        "position": index + 1
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent-gold selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingTracking pageTitle={title} />
      {/* Hero Section */}
      <HeroShell
        backgroundImage={typeof heroImage === "string" ? heroImage : heroImage.src}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        heightClassName="min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh]"
      >
        <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
          {primaryCtaHref.startsWith("http") ? (
            <WhatsAppButton
              href={primaryCtaHref}
              label={primaryCtaLabel}
              className="w-full sm:w-auto min-w-[200px]"
              data-track-cta="primary"
            />
          ) : (
            <Link
              href={primaryCtaHref}
              className="syren-btn w-full sm:w-auto min-w-[200px]"
              data-track-cta="primary"
              aria-label={primaryCtaLabel}
            >
              {primaryCtaLabel}
            </Link>
          )}
          {secondaryCtaLabel && secondaryCtaHref && (
            secondaryCtaHref.startsWith("http") ? (
              <WhatsAppButton
                href={secondaryCtaHref}
                label={secondaryCtaLabel}
                className="w-full sm:w-auto min-w-[200px]"
                data-track-cta="secondary"
              />
            ) : (
              <Link
                href={secondaryCtaHref}
                className="syren-btn-secondary w-full sm:w-auto min-w-[200px]"
                data-track-cta="secondary"
                aria-label={secondaryCtaLabel}
              >
                {secondaryCtaLabel}
              </Link>
            )
          )}
        </div>
      </HeroShell>

      {/* Social Proof Strip */}
      <SocialProofStrip />

      {/* Benefits Section */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-accent-gold w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white tracking-wide uppercase">
                  {benefit}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust Badges & Urgency */}
      <TrustBadges />

      {/* Main Content Area */}
      {children}

      {/* What You Get Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-accent-gold mb-12 text-center italic">
              {whatYouGet.title}
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatYouGet.items.map((item, index) => (
              <Reveal key={index} delay={0.1 * index} className="flex items-start gap-4">
                <span className="text-accent-gold font-serif text-xl mt-1">/</span>
                <p className="font-sans text-white/80 text-lg leading-relaxed">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section className="py-20 px-6 bg-accent-gold text-black text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Ready to transcend the ordinary?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              {primaryCtaHref.startsWith("http") ? (
                <a
                  href={primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500 w-full sm:w-auto"
                  data-track-cta="primary"
                  aria-label={`${primaryCtaLabel} via WhatsApp`}
                >
                  {primaryCtaLabel}
                </a>
              ) : (
                <Link
                  href={primaryCtaHref}
                  className="bg-black text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500 w-full sm:w-auto"
                  data-track-cta="primary"
                  aria-label={primaryCtaLabel}
                >
                  {primaryCtaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="border border-black px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-500 w-full sm:w-auto"
                  data-track-cta="secondary"
                  aria-label={secondaryCtaLabel}
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import { destinations } from "@/data/destinations";
import { excursions } from "@/data/excursions";
import { HERO_IMAGES } from "@/lib/images";
import ExperienceCard from "@/components/sections/ExperienceCard";
import DestinationHero from "@/components/sections/destinations/DestinationHero";
import SectionHeader from "@/components/layout/SectionHeader";
import DestinationIntro from "@/components/sections/destinations/DestinationIntro";
import DestinationWhySyren from "@/components/sections/destinations/DestinationWhySyren";
import DestinationExperiences from "@/components/sections/destinations/DestinationExperiences";
import FinalCTA from "@/components/sections/FinalCTA";
import Script from "next/script";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  const title = `${destination.name} | Luxury Travel Guide | Syren`;
  const description = `Explore ${destination.name} with Syren. ${destination.description}`;
  const heroImageUrl = destination.heroImage.src;

  return {
    title,
    description,
    alternates: {
      canonical: `/destinations/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/destinations/${slug}`,
      siteName: "Syren",
      type: "article",
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [heroImageUrl],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    notFound();
  }

  const destinationExcursions = excursions.filter(e => e.destinationSlug === destination.slug);

  // Dev-only confirmation log
  if (process.env.NODE_ENV === "development") {
    console.log(`[Dev] Destination: ${destination.name}`);
    console.log(`[Dev]   - Excursions found via filter: ${destinationExcursions.length}`);
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syren.travel";
  const heroImageUrl = destination.heroImage.src;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "image": heroImageUrl,
    "url": `${siteUrl}/destinations/${slug}`,
    "touristType": ["Luxury Traveler", "Adventure Seeker", "Cultural Enthusiast"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": destination.name,
      "addressCountry": "EG"
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id={`destination-${slug}-json-ld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DestinationHero 
        name={destination.name} 
        tagline={destination.tagline} 
        image={destination.heroImage} 
      />
      
      <div className="bg-background py-4">
        <DestinationIntro 
          description={destination.description} 
          vibeKeywords={destination.vibeKeywords} 
        />
      </div>
      
      <div className="bg-surface/30 border-y border-border/40">
        <DestinationWhySyren destinationName={destination.name} />
      </div>
      
      <div className="bg-background">
        <DestinationExperiences 
          destinationName={destination.name} 
          destinationSlug={slug} 
        />
      </div>

      <section className="bg-background border-t border-border py-20 md:py-24"> 
        <div className="mx-auto max-w-7xl px-6 md:px-8"> 
          <SectionHeader title="Recommended Add-Ons" />
    
          {destinationExcursions.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"> 
              {destinationExcursions.map((exc, index) => {
                const displayImage = exc.image || destination.heroImage || HERO_IMAGES.home;
                
                return ( 
                  <Reveal key={exc.slug} delay={0.05 * (index + 1)}> 
                    <ExperienceCard 
                       title={exc.title} 
                       description={exc.shortDescription} 
                       image={displayImage} 
                       alt={exc.imageAlt ?? exc.title} 
                       duration={exc.duration} 
                       cities={destination.name} 
                       buttonText="View Excursion" 
                       href={`/excursions/${exc.slug}`} 
                     /> 
                  </Reveal> 
                );
              })} 
            </div> 
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="font-sans text-lg text-text-secondary">
                No excursions listed yet
              </p>
            </div>
          )}
        </div> 
      </section> 
      
      <FinalCTA as="section" className="section border-t border-border" />
    </main>
  );
}

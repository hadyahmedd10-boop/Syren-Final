import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import DestinationHero from "@/components/sections/destinations/DestinationHero";
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

  const title = `${destination.name} | ${destination.tagline}`;
  const description = destination.description;

  return {
    title: destination.name,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/destinations/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/destinations/${slug}`,
      siteName: "Syren",
      images: [
        {
          url: typeof destination.heroImage === "string" ? destination.heroImage : destination.heroImage.src,
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
      images: [typeof destination.heroImage === "string" ? destination.heroImage : destination.heroImage.src],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "image": typeof destination.heroImage === 'string' ? destination.heroImage : destination.heroImage.src,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/destinations/${slug}`,
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
      
      <DestinationIntro 
        description={destination.description} 
        vibeKeywords={destination.vibeKeywords} 
      />
      
      <DestinationWhySyren destinationName={destination.name} />
      
      <DestinationExperiences 
        destinationName={destination.name} 
        destinationSlug={slug} 
      />
      
      <div className="h-32 bg-gradient-to-b from-background to-surface" />
      
      <FinalCTA />
    </main>
  );
}

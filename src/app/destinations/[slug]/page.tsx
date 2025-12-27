import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import DestinationHero from "@/components/sections/destinations/DestinationHero";
import DestinationIntro from "@/components/sections/destinations/DestinationIntro";
import DestinationWhySyren from "@/components/sections/destinations/DestinationWhySyren";
import DestinationExperiences from "@/components/sections/destinations/DestinationExperiences";
import FinalCTA from "@/components/sections/FinalCTA";

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
      title: "Destination Not Found | Syren",
    };
  }

  const title = `${destination.name} | Syren - ${destination.tagline}`;
  const description = destination.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://syren.com/destinations/${slug}`,
      images: [
        {
          url: typeof destination.heroImage === "string" ? destination.heroImage : destination.heroImage.src,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
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
        experienceSlugs={destination.featuredExperienceSlugs} 
      />
      
      <FinalCTA />
    </main>
  );
}

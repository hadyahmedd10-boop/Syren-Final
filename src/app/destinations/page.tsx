import Destinations from "@/components/sections/Destinations"; 
import type { Metadata } from "next"; 
import HeroShell from "@/components/ui/HeroShell";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = { 
  title: "Explore Egypt's Most Iconic Destinations | Syren", 
  description: "From the Pyramids of Giza to the shores of the Red Sea, discover Egypt through Syren’s expertly curated luxury destinations.", 
  alternates: {
    canonical: "/destinations",
  },
}; 

export default function DestinationsPage() { 
  return (
    <main className="min-h-screen bg-background">
      <HeroShell
        backgroundImage={HERO_IMAGES.home.src}
        eyebrow="The Landscape"
        title="Our Destinations"
        subtitle="From the Pyramids of Giza to the shores of the Red Sea. Discover Egypt through Syren’s expertly curated luxury destinations."
        heightClassName="min-h-[50vh] md:min-h-[60vh]"
      />
      <Destinations />
    </main>
  ); 
}


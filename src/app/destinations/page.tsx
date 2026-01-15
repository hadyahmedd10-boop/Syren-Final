import Destinations from "@/components/sections/Destinations"; 
import type { Metadata } from "next"; 

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
      <h1 className="sr-only">Our Destinations</h1>
      <Destinations />
    </main>
  ); 
}


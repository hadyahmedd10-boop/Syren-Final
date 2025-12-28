import Destinations from "@/components/sections/Destinations"; 
import type { Metadata } from "next"; 

export const metadata: Metadata = { 
  title: "Destinations | Syren", 
  description: "Explore Egypt through Syren’s curated destinations.", 
}; 

export default function DestinationsPage() { 
  return <Destinations />; 
}


import { StaticImageData } from "next/image"; 
 
export type ExcursionItineraryItem = { 
  time?: string; 
  title: string; 
  description: string; 
}; 
 
export type Excursion = { 
  slug: string; 
  destinationSlug: string; // e.g. "hurghada" 
  title: string; 
  duration: string; // e.g. "Full Day" 
  tourStyle: string; // e.g. "Private Guided Tour" 
  availability: string; // e.g. "Daily Departures" 
  shortDescription: string; 
  heroImage?: StaticImageData; 
  image?: StaticImageData; 
  imageAlt?: string; 

  highlights: string[]; 
  included: string[]; 
  notIncluded?: string[]; 
 
  priceCents: number; 
  currency?: "usd" | "eur" | "gbp"; 

  itinerary: ExcursionItineraryItem[]; 
};


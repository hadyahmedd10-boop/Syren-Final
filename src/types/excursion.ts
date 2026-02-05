import { StaticImageData } from "next/image"; 
 
export type ExcursionItineraryStep = {
  id: string;           // stable id (kebab-case)
  title: string;        // e.g. "Departure"
  tag?: string;         // e.g. "Transfer", "Lunch Included"
  description: string;  // 1–2 sentences max
};

export type Excursion = {
  slug: string;
  destinationSlug: string; // e.g. "hurghada"
  city?: string; // e.g. "Cairo" | "Luxor"
  cities?: string[]; // Support for multi-city filtering
  title: string;
  duration: string; // e.g. "Full Day"
  tourStyle: string; // e.g. "Private Guided Tour"
  availability: string; // e.g. "Daily Departures"
  shortDescription: string;
  heroImage?: StaticImageData | string;
  image?: StaticImageData | string;
  imageAlt?: string;

  highlights: string[];
  included: string[];
  notIncluded?: string[];

  priceCents: number;
  currency?: "usd" | "eur" | "gbp";

  category?: string;
  type?: "excursion";
  featured?: boolean;

  itinerarySteps: ExcursionItineraryStep[];
};


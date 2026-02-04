import { StaticImageData } from "next/image";
import { Testimonial } from "./testimonial";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
  image: StaticImageData | string;
}

export interface Experience {
  slug: string;
  title: string;
  destinations: string[];
  subtitle?: string;
  duration: string;
  cities: string;
  description: string;
  introduction: string;
  heroImage: StaticImageData;
  highlights?: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded?: string[];
  testimonials?: Testimonial[];
  price?: {
    amount: number;
    currency: string;
    perPerson: boolean;
  };
  whatsappMessage?: string;
  category?: 'nightlife' | 'luxury' | 'adventure' | 'cultural' | 'cairo-experiences';
  style?: string;
  idealFor?: string;
}

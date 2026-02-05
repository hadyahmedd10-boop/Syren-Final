// Hero Images
import heroHome from "../../public/images/hero/luxury.jpg";
import heroCairo from "../../public/images/hero/cairo.jpg";
import heroLuxorAswan from "../../public/images/hero/luxor-aswan.jpg.jpg";
import heroRedSea from "../../public/images/hero/red-sea.jpg.jpg";
import heroSiwa from "../../public/images/hero/siwa-oasis.jpg.jpg";
import heroAlexandria from "../../public/images/hero/alexandria.jpg.jpg";
import heroHurghada from "../../public/images/hero/hurghada.jpg.jpg";

// Destination Images
// Temporary fallbacks for missing assets
const destLuxorAswan = heroLuxorAswan;
const destCairo = heroCairo;
const destRedSea = heroRedSea;
const destSiwaOasis = heroSiwa;
const destAlexandria = heroAlexandria;
const destHurghada = heroHurghada;

// Experience Images
import expCairo5Day from "../../public/images/experiences/cairo-5-day.jpg";
import exp10DayOdyssey from "../../public/images/experiences/10-day-odyssey.jpg";
import expHoneymoon from "../../public/images/experiences/honeymoon.png";
import expFamily from "../../public/images/experiences/family-adventure.png";
// import expCairoAfterDark from "../../public/images/experiences/party.jpg"; // File missing, using fallback

export const HERO_IMAGES = {
  home: heroHome,
} as const;

export const DESTINATION_IMAGES = {
  cairo: destCairo,
  "luxor-aswan": destLuxorAswan,
  "red-sea": destRedSea,
  "siwa-oasis": destSiwaOasis,
  alexandria: destAlexandria,
  hurghada: destHurghada,
} as const;

export const EXPERIENCE_IMAGES = {
  "cairo-after-dark": heroHome, // Fallback until image is restored
  "nile-signature": heroHome,
  "5-day-cairo-experience": expCairo5Day,
  "10-day-cairo-nile-red-sea-odyssey": exp10DayOdyssey,
  "12-day-egyptian-honeymoon-odyssey": expHoneymoon,
  "family-adventure": expFamily,
  "siwa-desert-retreat": heroHome,
  "alexandria-coastal-elegance": heroHome,
} as const;

export const EXCURSION_IMAGES = {
  "hurghada-luxor-day-trip": "/images/excursions/Luxor Day Trip/hurghada-luxor-day-trip.jpg",
  "hurghada-cairo-day-trip": "/images/excursions/Cairo Day Trip by Car/hurghada-cairo-day-trip.jpg",
  "hurghada-jeep-safari": "/images/excursions/7-Hour Jeep Safari/hurghada-jeep-safari.jpg",
  "mahmya-island-snorkeling": "/images/excursions/Mahmya Island Snorkeling/mahmya-island-snorkeling.jpg",
  "giftun-island-snorkeling": "/images/excursions/Giftun Island Snorkeling/giftun-island-snorkeling.jpg",
  "paradise-island-snorkeling": "/images/excursions/Paradise Island Snorkeling/paradise-island-snorkeling.jpg",
  "hurghada-quad-bike": "/images/excursions/Hurghada Quad Bike Adventure/hurghada-quad-bike.jpg",
  "cairo-in-a-day-from-hurghada": "/images/excursions/Cairo in a Day (Plane)/cairo-in-a-day-from-hurghada.jpg",
  "nile-maxim-dinner-cruise": "/images/excursions/nile-maxim-dinner-cruise/nile-maxim-dinner-cruise.jpg",
  "cairo-beyond-the-pyramids": "/images/excursions/cairo-beyond-the-pyramids/cairo-beyond-the-pyramids.jpg",
  "tanoura-night-old-cairo": "/images/excursions/tanoura-night-old-cairo/tanoura-night-old-cairo.jpg",
  "cairo-private-photo-session": "/images/excursions/cairo-private-photo-session/cairo-private-photo-session.jpg",
} as const;

export const EXCURSION_COVERS = {
  "hurghada-luxor-day-trip": "/images/excursions/Luxor Day Trip/cover.jpg",
  "hurghada-cairo-day-trip": "/images/excursions/Cairo Day Trip by Car/cover.jpg",
  "hurghada-jeep-safari": "/images/excursions/7-Hour Jeep Safari/cover.jpg",
  "mahmya-island-snorkeling": "/images/excursions/Mahmya Island Snorkeling/cover.jpg",
  "giftun-island-snorkeling": "/images/excursions/Giftun Island Snorkeling/cover.jpg",
  "paradise-island-snorkeling": "/images/excursions/Paradise Island Snorkeling/cover.jpg",
  "hurghada-quad-bike": "/images/excursions/Hurghada Quad Bike Adventure/cover.jpg",
  "cairo-in-a-day-from-hurghada": "/images/excursions/Cairo in a Day (Plane)/cover.jpg",
  "nile-maxim-dinner-cruise": "/images/excursions/nile-maxim-dinner-cruise/cover.jpg",
  "cairo-beyond-the-pyramids": "/images/excursions/cairo-beyond-the-pyramids/cover.jpg",
  "tanoura-night-old-cairo": "/images/excursions/tanoura-night-old-cairo/cover.jpg",
  "cairo-private-photo-session": "/images/excursions/cairo-private-photo-session/cover.jpg",
} as const;

export const images = {
  hero: HERO_IMAGES,
  destinations: DESTINATION_IMAGES,
  experiences: EXPERIENCE_IMAGES,
  excursions: EXCURSION_IMAGES,
  excursionCovers: EXCURSION_COVERS,
} as const;

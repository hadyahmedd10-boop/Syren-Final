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
  "hurghada-luxor-day-trip": heroHome,
  "hurghada-cairo-day-trip": heroHome,
  "hurghada-jeep-safari": heroHome,
  "mahmya-island-snorkeling": heroHome,
  "giftun-island-snorkeling": heroHome,
  "paradise-island-snorkeling": heroHome,
  "hurghada-quad-bike": heroHome,
} as const;

export const images = {
  hero: HERO_IMAGES,
  destinations: DESTINATION_IMAGES,
  experiences: EXPERIENCE_IMAGES,
  excursions: EXCURSION_IMAGES,
} as const;

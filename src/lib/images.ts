// Hero Images
import heroHome from "../../public/images/hero/luxury.jpg";
import heroCairo from "../../public/images/hero/cairo.jpg";

// Destination Images
// Temporary fallbacks for missing assets
const destLuxorAswan = heroHome;
const destCairo = heroCairo;
const destRedSea = heroHome;
const destSiwaOasis = heroHome;
const destAlexandria = heroHome;
const destHurghada = heroHome;

// Experience Images
import expCairoAfterDark from "../../public/images/experiences/party.jpg";

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
  "cairo-after-dark": expCairoAfterDark,
  "nile-signature": heroHome,
  "5-day-cairo-experience": heroHome,
  "8-day-pyramids-nile-cruise": heroHome,
  "10-day-cairo-nile-red-sea-odyssey": heroHome,
  "12-day-egyptian-honeymoon-odyssey": heroHome,
  "family-adventure": heroHome,
  "siwa-desert-retreat": heroHome,
  "alexandria-coastal-elegance": heroHome,
  "wellness-retreat": heroHome,
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

import { StaticImageData } from "next/image";
import { DESTINATION_IMAGES } from "@/lib/images";

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: StaticImageData;
  image?: StaticImageData;
  vibeKeywords: string[];
  featuredExperienceSlugs: string[];
  excursionSlugs?: string[];
}

export const destinations: Destination[] = [
  {
    slug: "cairo",
    name: "Cairo",
    tagline: "Timeless. Electric. Alive.",
    description:
      "Cairo is where ancient wonders meet a living, breathing city. Beyond the pyramids lies art, food, music, and neighborhoods full of soul.",
    heroImage: DESTINATION_IMAGES["cairo"],
    image: DESTINATION_IMAGES["cairo"],
    vibeKeywords: ["culture", "history", "nightlife"],
    featuredExperienceSlugs: ["cairo-after-dark", "5-day-cairo-experience"],
  },
  {
    slug: "luxor-aswan",
    name: "Luxor & Aswan",
    tagline: "Sacred lands of gods",
    description: "A journey through Egypt’s most powerful temples and the calm flow of the Nile. Slow, majestic, and deeply spiritual.",
    heroImage: DESTINATION_IMAGES["luxor-aswan"],
    image: DESTINATION_IMAGES["luxor-aswan"],
    vibeKeywords: ["heritage", "nile", "temples"],
    featuredExperienceSlugs: ["nile-signature", "8-day-pyramids-nile-cruise"],
  },
  {
    slug: "red-sea",
    name: "Red Sea",
    tagline: "Pure escape by water",
    description:
      "Crystal-clear waters, hidden lagoons, and barefoot luxury. The Red Sea is Egypt’s playground of calm and color.",
    heroImage: DESTINATION_IMAGES["red-sea"],
    image: DESTINATION_IMAGES["red-sea"],
    vibeKeywords: ["beach", "luxury", "relax"],
    featuredExperienceSlugs: ["10-day-cairo-nile-red-sea-odyssey"],
  },
  {
    slug: "siwa-oasis",
    name: "Siwa Oasis",
    tagline: "The desert's hidden heart.",
    description:
      "A remote paradise where ancient traditions meet crystalline salt lakes and endless palm groves. Siwa is Egypt’s most soul-stirring desert escape.",
    heroImage: DESTINATION_IMAGES["siwa-oasis"],
    image: DESTINATION_IMAGES["siwa-oasis"],
    vibeKeywords: ["desert", "culture", "hidden gems"],
    featuredExperienceSlugs: ["siwa-desert-retreat"],
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    tagline: "The Pearl of the Mediterranean.",
    description:
      "A city of grand libraries, Greco-Roman heritage, and coastal charm. Alexandria blends Mediterranean elegance with a deep, storied history.",
    heroImage: DESTINATION_IMAGES["alexandria"],
    image: DESTINATION_IMAGES["alexandria"],
    vibeKeywords: ["mediterranean", "history", "elegance"],
    featuredExperienceSlugs: ["alexandria-coastal-elegance"],
  },
  {
    slug: "hurghada",
    name: "Hurghada",
    tagline: "Sun, Sea, and Desert Adventures",
    description:
      "A vibrant coastal escape offering world-class diving, luxury resorts, and thrilling desert safaris. The gateway to the Red Sea's most iconic experiences.",
    heroImage: DESTINATION_IMAGES["hurghada"],
    image: DESTINATION_IMAGES["hurghada"],
    vibeKeywords: ["adventure", "diving", "resort"],
    featuredExperienceSlugs: [],
    excursionSlugs: [
      "hurghada-luxor-day-trip",
      "hurghada-cairo-day-trip",
      "hurghada-jeep-safari",
      "mahmya-island-snorkeling",
      "giftun-island-snorkeling",
      "paradise-island-snorkeling",
      "hurghada-quad-bike",
    ],
  },
];

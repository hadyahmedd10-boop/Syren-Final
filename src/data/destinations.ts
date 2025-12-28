import { StaticImageData } from "next/image";
import heroImg from "../../public/Images/hero.jpg";
import luxuryImg from "../../public/Images/luxury.jpg";
import partyImg from "../../public/Images/party.jpg";

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: StaticImageData | string;
  vibeKeywords: string[];
  featuredExperienceSlugs: string[];
}

export const destinations: Destination[] = [
  {
    slug: "cairo",
    name: "Cairo",
    tagline: "Timeless. Electric. Alive.",
    description:
      "Cairo is where ancient wonders meet a living, breathing city. Beyond the pyramids lies art, food, music, and neighborhoods full of soul.",
    heroImage: heroImg,
    vibeKeywords: ["culture", "history", "nightlife"],
    featuredExperienceSlugs: ["cairo-after-dark", "5-day-cairo-experience"],
  },
  {
    slug: "luxor-aswan",
    name: "Luxor & Aswan",
    tagline: "Sacred lands of gods",
    description:
      "A journey through Egypt’s most powerful temples and the calm flow of the Nile. Slow, majestic, and deeply spiritual.",
    heroImage: luxuryImg,
    vibeKeywords: ["heritage", "nile", "temples"],
    featuredExperienceSlugs: ["nile-signature", "8-day-pyramids-nile-cruise"],
  },
  {
    slug: "red-sea",
    name: "Red Sea",
    tagline: "Pure escape by water",
    description:
      "Crystal-clear waters, hidden lagoons, and barefoot luxury. The Red Sea is Egypt’s playground of calm and color.",
    heroImage: partyImg,
    vibeKeywords: ["beach", "luxury", "relax"],
    featuredExperienceSlugs: ["10-day-cairo-nile-red-sea-odyssey"],
  },
  {
    slug: "siwa-oasis",
    name: "Siwa Oasis",
    tagline: "The desert's hidden heart.",
    description:
      "A remote paradise where ancient traditions meet crystalline salt lakes and endless palm groves. Siwa is Egypt’s most soul-stirring desert escape.",
    heroImage: heroImg,
    vibeKeywords: ["desert", "culture", "hidden gems"],
    featuredExperienceSlugs: ["siwa-desert-retreat"],
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    tagline: "The Pearl of the Mediterranean.",
    description:
      "A city of grand libraries, Greco-Roman heritage, and coastal charm. Alexandria blends Mediterranean elegance with a deep, storied history.",
    heroImage: luxuryImg,
    vibeKeywords: ["mediterranean", "history", "elegance"],
    featuredExperienceSlugs: ["alexandria-coastal-elegance"],
  },
];

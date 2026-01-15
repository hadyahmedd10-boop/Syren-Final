import { constructMetadata } from "@/lib/seo";
import LandingCard from "@/components/landing/LandingCard";
import Reveal from "@/components/motion/Reveal";

export const metadata = constructMetadata({
  title: "Marketing Landings | Syren Internal",
  description: "Directory of high-converting marketing landing pages for Syren travel experiences.",
  noIndex: true, // Keep it unlisted and private
});

const landings = [
  {
    title: "Luxury Cairo",
    subtitle: "Redefining Cairo Luxury with private VIP access and curated boutique stays.",
    image: "/images/hero/luxury.jpg",
    slug: "luxury-cairo",
    category: "Campaign: Cairo"
  },
  {
    title: "Cairo VIP",
    subtitle: "Ultimate Cairo Access for the discerning traveler seeking absolute exclusivity.",
    image: "/images/destinations/cairo.jpg",
    slug: "cairo-vip",
    category: "Campaign: Cairo"
  },
  {
    title: "Nile Journey",
    subtitle: "A Sacred Voyage through time on the world's most historic river.",
    image: "/images/destinations/luxor.jpg",
    slug: "nile-journey",
    category: "Campaign: Nile"
  },
  {
    title: "Red Sea Luxury",
    subtitle: "The Azure Sanctuary: Where the desert meets the crystal depths.",
    image: "/images/destinations/red-sea.jpg",
    slug: "red-sea-luxury",
    category: "Campaign: Coastal"
  },
  {
    title: "Exclusive Experiences",
    subtitle: "The Syren Exclusive: Handpicked journeys beyond the ordinary.",
    image: "/images/hero/experience-hero.jpg",
    slug: "exclusive",
    category: "Campaign: Brand"
  },
  {
    title: "Private Nile Cruise",
    subtitle: "Coming Soon: The ultimate private dahabiya experience.",
    image: "/images/destinations/aswan.jpg",
    slug: "#", // Placeholder
    category: "Draft"
  }
];

export default function LandingIndexPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <header className="mb-16 text-center">
          <Reveal>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4 block">
              Internal Directory
            </span>
            <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-white mb-6">
              Marketing Landings
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto font-sans italic text-lg">
              A collection of high-converting, targeted landing pages designed for specific marketing campaigns and audiences.
            </p>
          </Reveal>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {landings.map((landing, index) => (
            <Reveal key={landing.slug} delay={0.1 * index}>
              <LandingCard
                title={landing.title}
                subtitle={landing.subtitle}
                image={landing.image}
                slug={landing.slug}
                category={landing.category}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

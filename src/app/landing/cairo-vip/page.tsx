import { constructMetadata } from "@/lib/seo";
import LandingShell from "@/components/landing/LandingShell";
import { DESTINATION_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/config/social";

export const metadata = constructMetadata({
  title: "Cairo VIP Experience | Private Access & Luxury Journeys",
  description: "Experience Cairo with unprecedented access. Private pyramid entries, after-hours museum tours, and the city's most prestigious addresses.",
  canonical: "/landing/cairo-vip",
});

export default function CairoVIPLanding() {
  const whatsappLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(
    "I'm interested in the Cairo VIP Experience. I'd like to talk to a curator."
  )}`;

  return (
    <LandingShell
      eyebrow="Exclusive Access"
      title="Cairo, Beyond the Veil"
      subtitle="Private pyramid entries. After-hours museum tours. The city's most prestigious addresses, curated for the discerning traveler."
      heroImage={DESTINATION_IMAGES["cairo"]}
      primaryCtaLabel="Design Your Journey"
      primaryCtaHref={whatsappLink}
      secondaryCtaLabel="Explore Journeys"
      secondaryCtaHref="/experiences"
      benefits={[
        "After-Hours Monument Access",
        "Private VIP Security & Transfers",
        "Boutique Heritage Stays"
      ]}
      whatYouGet={{
        title: "The VIP Distinction",
        items: [
          "Solitude at the Great Pyramids outside public hours",
          "Private viewings of the Grand Egyptian Museum's treasures",
          "Dinner hosted by local historians in historic palaces",
          "Seamless logistics with dedicated concierge support"
        ]
      }}
    />
  );
}

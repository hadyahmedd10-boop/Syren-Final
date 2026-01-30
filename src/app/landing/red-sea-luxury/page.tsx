import { constructMetadata } from "@/lib/seo";
import LandingShell from "@/components/landing/LandingShell";
import { DESTINATION_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/config/social";

export const metadata = constructMetadata({
  title: "Red Sea Luxury Sanctuary | Private Yachts & Coastal Solitude",
  description: "Discover the Red Sea redefined. Private yacht charters, hidden reefs, and the ultimate coastal luxury where the desert meets the crystal depths.",
  canonical: "/landing/red-sea-luxury",
});

export default function RedSeaLuxuryLanding() {
  const whatsappLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(
    "I'm interested in the Red Sea Luxury Experience. I'd like to talk to a curator."
  )}`;

  return (
    <LandingShell
      eyebrow="The Azure Sanctuary"
      title="Red Sea, Redefined"
      subtitle="Where the desert meets the crystal depths. Private yacht charters, hidden reefs, and the ultimate coastal solitude for the discerning soul."
      heroImage={DESTINATION_IMAGES["red-sea"]}
      primaryCtaLabel="Design Your Journey"
      primaryCtaHref={whatsappLink}
      secondaryCtaLabel="Discover Coastal Luxury"
      secondaryCtaHref="/experiences"
      benefits={[
        "Private Yacht Charters & Crew",
        "Secret Reef & Island Access",
        "Ultra-Luxury Coastal Retreats"
      ]}
      whatYouGet={{
        title: "The Coastal Distinction",
        items: [
          "Bespoke marine expeditions tailored to your pace",
          "Private diving and snorkeling with marine experts",
          "Secluded beach dining prepared by private chefs",
          "24/7 dedicated shore and sea concierge support"
        ]
      }}
    />
  );
}

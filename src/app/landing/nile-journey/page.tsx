import { constructMetadata } from "@/lib/seo";
import LandingShell from "@/components/landing/LandingShell";

export const metadata = constructMetadata({
  title: "The Eternal Nile Journey | Private River Cruises & Sacred Sites",
  description: "A sacred voyage through Egypt's most powerful temples and the calm flow of the Nile. Private dahabiyas and soul-stirring landscapes.",
  canonical: "/landing/nile-journey",
});

export default function NileJourneyLanding() {
  const whatsappLink = `https://wa.me/201000000000?text=${encodeURIComponent(
    "I'm interested in the Nile Journey Experience. I'd like to talk to a curator."
  )}`;

  return (
    <LandingShell
      eyebrow="The Sacred River"
      title="The Eternal Flow of the Nile"
      subtitle="A journey through Egypt's most powerful temples and the calm flow of the Nile. Slow, majestic, and deeply spiritual."
      heroImage="/images/destinations/luxor.jpg"
      primaryCtaLabel="View River Journeys"
      primaryCtaHref="/experiences"
      secondaryCtaLabel="Talk to a curator"
      secondaryCtaHref={whatsappLink}
      benefits={[
        "Private Luxury Dahabiya Charters",
        "Expert-Led Temple Pilgrimages",
        "Exclusive Island Sanctuary Access"
      ]}
      whatYouGet={{
        title: "The Sacred Difference",
        items: [
          "Bespoke itineraries on the world's most historic river",
          "Private sunrise visits to Luxor and Karnak temples",
          "Gourmet dining on deck under the Saharan stars",
          "Hidden tomb access guided by leading Egyptologists"
        ]
      }}
    />
  );
}

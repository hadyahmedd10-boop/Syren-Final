import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import HeroShell from "@/components/ui/HeroShell";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Request a Quote | Bespoke Egyptian Journeys | Syren",
  description: "Begin your extraordinary Egyptian journey. Request a personalized quote for a private, curated luxury experience tailored to your vision.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroShell
        backgroundImage={HERO_IMAGES.home.src}
        eyebrow="Bespoke Journeys"
        title="Request a Quote"
        subtitle="Tell us your vision. We'll craft the reality."
        heightClassName="min-h-[40vh] md:min-h-[50vh]"
      />
      
      <section className="section">
        <div className="max-w-4xl mx-auto container-x">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}

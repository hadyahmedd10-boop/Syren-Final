import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Bespoke Egyptian Journeys | Syren",
  description: "Begin your extraordinary Egyptian journey. Request a personalized quote for a private, curated luxury experience tailored to your vision.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6">
      <QuoteForm />
    </main>
  );
}

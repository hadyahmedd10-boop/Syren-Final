import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Canceled | Syren",
  description: "Your booking process was not completed. Feel free to return when you're ready.",
  robots: { index: false, follow: false },
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
            <XCircle className="relative w-20 h-20 text-white/20" strokeWidth={1} />
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Booking Canceled
        </h1>
        
        <p className="font-sans text-lg text-white/60 mb-12 leading-relaxed max-w-lg mx-auto">
          We noticed your booking wasn&apos;t completed. If you encountered any issues or have questions about our experiences, our concierge team is here to assist you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/experiences" className="syren-btn-primary group">
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Try Again</span>
          </Link>
          
          <Link href="/contact" className="syren-btn-secondary">
            Contact Concierge
          </Link>
        </div>

        <p className="mt-16 font-sans text-xs uppercase tracking-[0.3em] text-white/30">
          Syren Private Journeys
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirmed | Syren",
  description: "Your journey with Syren has been confirmed. We are preparing an extraordinary experience for you.",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-gold/20 blur-3xl rounded-full" />
            <CheckCircle2 className="relative w-20 h-20 text-accent-gold" strokeWidth={1} />
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
          A Journey Awaits
        </h1>
        
        <p className="font-sans text-lg text-white/60 mb-12 leading-relaxed max-w-lg mx-auto">
          Your booking has been successfully confirmed. Our concierge team is already beginning to curate the finer details of your experience. You will receive a personal confirmation email shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/experiences" className="syren-btn-primary group">
            <span>Back to Experiences</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link href="/" className="syren-btn-secondary">
            Return Home
          </Link>
        </div>

        <p className="mt-16 font-sans text-xs uppercase tracking-[0.3em] text-white/30">
          The Art of Egyptian Luxury
        </p>
      </div>
    </main>
  );
}

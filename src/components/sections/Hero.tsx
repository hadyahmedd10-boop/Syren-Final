"use client";

import Link from "next/link";
import { useEffect } from "react";
import { HERO_IMAGES } from "@/lib/images";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroShell from "@/components/ui/HeroShell";

export default function Hero() {
  useEffect(() => {
    // Force scroll to top on mount (e.g., page reload)
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeroShell
      backgroundImage={HERO_IMAGES.home.src}
      eyebrow="Syren"
      title={
        <>
          Egypt, Like you&apos;ve <br className="hidden md:block" /> never seen before
        </>
      }
      subtitle="Private journeys designed by local experts. Delivered with absolute precision."
    >
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="/quote" className="syren-btn-primary px-8 py-3">
          Begin Your Journey
        </a>

        <a href="/experiences" className="syren-btn-secondary px-8 py-3">
          Explore Experiences
        </a>
      </div>
    </HeroShell>
  );
}

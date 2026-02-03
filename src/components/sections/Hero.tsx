"use client";

import Link from "next/link";
import { useEffect } from "react";
import { StaticImageData } from "next/image";
import { HERO_IMAGES } from "@/lib/images";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroShell from "@/components/ui/HeroShell";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  backgroundImage?: string | StaticImageData;
  showButtons?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  eyebrow = "Syren",
  backgroundImage = HERO_IMAGES.home,
  showButtons = true 
}: HeroProps) {
  useEffect(() => {
    // Force scroll to top on mount (e.g., page reload)
    window.scrollTo(0, 0);
  }, []);

  const bgImageSrc = typeof backgroundImage === "string" 
    ? backgroundImage 
    : backgroundImage.src;

  return (
    <HeroShell
      backgroundImage={bgImageSrc}
      eyebrow={eyebrow}
      title={
        title || (
          <>
            Egypt, Like you&apos;ve <br className="hidden md:block" /> never seen before
          </>
        )
      }
      subtitle={
        subtitle || "Private journeys designed by local experts. Delivered with absolute precision."
      }
    >
      {showButtons && (
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="/quote" className="syren-btn-primary px-8 py-3">
            Begin Your Journey
          </a>

          <a href="/experiences" className="syren-btn-secondary px-8 py-3">
            Explore Experiences
          </a>
        </div>
      )}
    </HeroShell>
  );
}

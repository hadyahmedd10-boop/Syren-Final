"use client";

import React from "react";
import { cn } from "@/lib/utils";

type HeroShellProps = {
  backgroundImage?: string; // optional
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  heightClassName?: string; // allow per-page tuning
};

export default function HeroShell({
  backgroundImage,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  heightClassName = "min-h-[72svh] md:min-h-[78svh]",
}: HeroShellProps) {
  return (
    <section
      id="hero"
      className={cn(
        "relative w-full overflow-hidden",
        // IMPORTANT: This fixes the “dead space” by controlling hero height + padding
        heightClassName,
        "pt-24 md:pt-28", // sits under fixed navbar
        "pb-10 md:pb-14",
        className
      )}
    >
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          />
          {/* Premium overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-x">
        {eyebrow && (
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/60">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 font-serif text-[46px] leading-[0.95] md:text-[76px] md:leading-[0.95] text-accent-gold">
          {title}
        </h1>

        {subtitle && (
          <div className="mt-5 max-w-2xl text-[15px] md:text-[18px] leading-relaxed text-white/75">
            {subtitle}
          </div>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

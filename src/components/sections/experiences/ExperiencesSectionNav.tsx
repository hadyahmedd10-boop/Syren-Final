"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EXPERIENCES_SECTIONS } from "@/lib/experiences-sections";

export default function ExperiencesSectionNav() {
  const [activeId, setActiveId] = useState(EXPERIENCES_SECTIONS[0].id);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ids = useMemo(() => EXPERIENCES_SECTIONS.map((section) => section.id), []);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.35, 0.5, 0.75],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  useEffect(() => {
    const updateProgress = () => {
      const root = document.getElementById("experiences-scroll-root");
      if (!root) {
        setProgress(0);
        return;
      }

      const rect = root.getBoundingClientRect();
      const rootTop = rect.top + window.scrollY;
      const rootHeight = root.offsetHeight;
      const viewport = window.innerHeight;
      const scrollY = window.scrollY;
      const start = rootTop - 140;
      const end = rootTop + rootHeight - viewport;

      if (end <= start) {
        setProgress(0);
        return;
      }

      const nextProgress = Math.min(Math.max(((scrollY - start) / (end - start)) * 100, 0), 100);
      setProgress(nextProgress);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-[64px] md:top-[80px] z-40 border-b border-white/10 bg-black/60 backdrop-blur-md" aria-label="Experiences sections">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-3 px-4 py-3 sm:px-6 lg:px-8 md:py-4">
        <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide md:gap-7">
          {EXPERIENCES_SECTIONS.map((section) => (
            <div key={section.id} className="flex items-center">
              <button
                type="button"
                onClick={() => handleClick(section.id)}
                aria-current={activeId === section.id ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-[12px] uppercase tracking-[0.18em] transition-colors md:text-[13px] ${
                  activeId === section.id
                    ? "bg-[rgba(212,175,55,0.10)] text-accent-gold ring-1 ring-[rgba(212,175,55,0.25)]"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            </div>
          ))}
        </div>
        <div className="relative h-px w-full bg-white/15">
          <div className={`absolute inset-y-0 left-0 h-px bg-accent-gold shadow-[0_0_12px_rgba(212,175,55,0.25)] ${prefersReducedMotion ? "" : "transition-[width] duration-200"}`} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </nav>
  );
}

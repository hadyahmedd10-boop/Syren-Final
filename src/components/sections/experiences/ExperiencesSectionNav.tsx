"use client";

import { useEffect, useMemo, useState } from "react";
import { EXPERIENCES_SECTIONS } from "@/lib/experiences-sections";

export default function ExperiencesSectionNav() {
  const [activeId, setActiveId] = useState(EXPERIENCES_SECTIONS[0].id);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ids = useMemo(() => EXPERIENCES_SECTIONS.map((section) => section.id), []);

  const progressPct = useMemo(() => {
    const index = EXPERIENCES_SECTIONS.findIndex((s) => s.id === activeId);
    if (index === -1) return 0;
    const maxIndex = EXPERIENCES_SECTIONS.length - 1;
    return maxIndex > 0 ? (index / maxIndex) * 100 : 0;
  }, [activeId]);

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

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="sticky top-[76px] z-40 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            syren-sections-nav
            flex items-center gap-2
            overflow-x-auto whitespace-nowrap
            py-2
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* hide scrollbar (webkit) */}
          <style>{`
            .syren-sections-nav::-webkit-scrollbar{display:none}
          `}</style>

          <div className="flex items-center gap-2">
            {EXPERIENCES_SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToSection(s.id)}
                className={`
                  relative rounded-full px-3 py-1.5
                  text-[10px] font-bold uppercase tracking-[0.22em]
                  transition-all
                  ${activeId === s.id
                    ? "text-black bg-accent-gold shadow-[0_0_0_1px_rgba(212,175,55,0.22)]"
                    : "text-white/65 hover:text-white hover:bg-white/5"}
                `}
              >
                <span className="block max-w-[180px] truncate">
                  {s.id === "frequently-asked-questions" ? "FAQs" : s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* thinner baseline */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-gold/25 to-transparent" />

        {/* progress line */}
        <div className="relative h-[1px] w-full bg-white/10">
          <div
            className="absolute left-0 top-0 h-full bg-accent-gold transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

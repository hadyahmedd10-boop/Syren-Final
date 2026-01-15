"use client";

import React, { useState, useEffect } from "react";
import { Excursion } from "@/types/excursion";
import { Check } from "lucide-react";

interface AddOnsProps {
  items: Excursion[];
  onChange: (selectedSlugs: string[], totalCents: number) => void;
}

export default function AddOns({ items, onChange }: AddOnsProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  useEffect(() => {
    const total = items
      .filter((item) => selectedSlugs.includes(item.slug))
      .reduce((sum, item) => sum + item.priceCents, 0);
    onChange(selectedSlugs, total);
  }, [selectedSlugs, items, onChange]);

  const toggleAddOn = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  if (items.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <h3 className="font-serif text-2xl text-primary mb-6">Enhance Your Journey</h3>
      <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-text-secondary mb-8">
        Recommended Add-Ons
      </p>

      <div className="space-y-4">
        {items.map((item) => {
          const isSelected = selectedSlugs.includes(item.slug);
          return (
            <div
              key={item.slug}
              onClick={() => toggleAddOn(item.slug)}
              className={`group flex items-center justify-between p-4 border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-accent-gold/5 border-accent-gold/40"
                  : "bg-surface border-border hover:border-accent-gold/20"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-accent-gold border-accent-gold text-black"
                      : "border-white/20 group-hover:border-accent-gold/40"
                  }`}
                >
                  {isSelected && <Check size={14} strokeWidth={3} />}
                </div>
                <div>
                  <p className="font-serif text-lg text-white group-hover:text-accent-gold transition-colors">
                    {item.title}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-secondary">
                    {item.duration}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-serif text-lg text-accent-gold">
                  +${(item.priceCents / 100).toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedSlugs.length > 0 && (
        <div className="mt-6 flex justify-between items-center px-4 py-3 bg-white/5 border border-white/10">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary">
            Add-Ons Total
          </span>
          <span className="font-serif text-xl text-accent-gold">
            +$
            {(
              items
                .filter((i) => selectedSlugs.includes(i.slug))
                .reduce((sum, i) => sum + i.priceCents, 0) / 100
            ).toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}

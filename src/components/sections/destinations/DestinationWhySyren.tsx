"use client";

import Reveal from "../../motion/Reveal";
import SectionHeader from "../../layout/SectionHeader";
import { Map, Clock, Sparkles } from "lucide-react";

interface DestinationWhySyrenProps {
  destinationName: string;
}

const features = [
  {
    title: "Local Access",
    description: "Navigate beyond the tourist perimeter with guides who call these streets home and connections that open doors to private collections and family-run workshops.",
    icon: Map,
  },
  {
    title: "Pace & Privacy",
    description: "We prioritize timing to avoid the crowds and private transit to ensure your transition between sites is as peaceful as the destinations themselves.",
    icon: Clock,
  },
  {
    title: "Curated Depth",
    description: "No generic checklists. Every route is refined through years of local expertise to focus on the historical nuance and cultural texture that define the region.",
    icon: Sparkles,
  },
];

export default function DestinationWhySyren({ destinationName }: DestinationWhySyrenProps) {
  return (
    <section className="section bg-background border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          title={`Why Experience ${destinationName} with Syren`} 
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-gold/30 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-accent-gold/80" strokeWidth={1.25} />
                </div>
                <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-white/90 mb-6">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

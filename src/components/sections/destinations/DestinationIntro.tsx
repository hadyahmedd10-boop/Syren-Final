"use client";

import Reveal from "../../motion/Reveal";

interface DestinationIntroProps {
  description: string;
  vibeKeywords: string[];
}

export default function DestinationIntro({ description, vibeKeywords }: DestinationIntroProps) {
  // Split description into opening sentence and supporting text
  const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
  const openingSentence = sentences[0];
  const supportingParagraph = sentences.slice(1).join(" ").trim();

  return (
    <section className="py-24 md:py-32 bg-background border-y border-white/5">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <div className="space-y-12">
            {/* Soft Gold Divider */}
            <div className="flex justify-center">
              <div className="h-px w-12 bg-accent-gold/40" />
            </div>

            {/* Serif Opening Sentence */}
            <h2 className="font-serif text-white text-3xl md:text-4xl leading-snug italic">
              {openingSentence}
            </h2>

            {/* Sans-serif Supporting Paragraph */}
            {supportingParagraph && (
              <p className="font-sans text-white/60 text-base md:text-lg leading-relaxed font-light">
                {supportingParagraph}
              </p>
            )}

            {/* Vibe Keywords Footer */}
            <div className="pt-8 flex flex-wrap justify-center gap-x-6 gap-y-4">
              {vibeKeywords.map((keyword) => (
                <span 
                  key={keyword} 
                  className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold/60"
                >
                  {keyword}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center pt-4">
              <div className="h-px w-12 bg-accent-gold/40" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
    <section className="section bg-background border-y border-white/5">
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
            <div className="pt-8 flex flex-wrap justify-center gap-2">
              {vibeKeywords.map((keyword) => (
                <span 
                  key={keyword} 
                  tabIndex={0}
                  className="syren-pill border border-accent-gold/20 bg-accent-gold/5 text-accent-gold/80 hover:bg-accent-gold/10 hover:border-accent-gold/30 hover:text-accent-gold hover:shadow-[0_0_10px_rgba(196,160,82,0.1)]"
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

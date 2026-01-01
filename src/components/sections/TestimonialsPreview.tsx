import { testimonials as staticTestimonials } from "@/data/testimonials";
import { Quote, Star } from 'lucide-react';
import Reveal from "../motion/Reveal";

export default function TestimonialsPreview() {
  // Show only top 3 testimonials
  const featuredTestimonials = staticTestimonials.slice(0, 3);

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-accent-gold font-sans text-[10px] uppercase tracking-[0.5em] mb-4">Trust</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Echoes of Extraordinary Journeys
            </h2>
            <div className="w-24 h-px bg-accent-gold/40 mx-auto" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((t, index) => (
            <Reveal key={t.id} delay={index * 0.1}>
              <div className="group relative p-8 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-sm transition-all duration-700 hover:bg-surface/50 hover:border-accent-gold/20">
                <div className="absolute top-6 right-8 text-accent-gold/10 group-hover:text-accent-gold/20 transition-colors duration-700">
                  <Quote size={32} />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-accent-gold fill-accent-gold"
                    />
                  ))}
                </div>

                <p className="text-text-secondary leading-relaxed mb-8 italic relative z-10 text-sm">
                  &ldquo;{t.message}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-gold/20 to-transparent border border-accent-gold/10 flex items-center justify-center text-accent-gold font-serif text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white font-medium text-xs tracking-wide">{t.name}</h3>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

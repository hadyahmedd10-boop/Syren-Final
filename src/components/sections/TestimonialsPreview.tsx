import { testimonials as staticTestimonials } from "@/data/testimonials";
import { Quote, Star } from 'lucide-react';
import SectionHeader from "../layout/SectionHeader";
import Reveal from "../motion/Reveal";

export default function TestimonialsPreview() {
  // Show only top 3 testimonials
  const featuredTestimonials = staticTestimonials.slice(0, 3);

  return (
    <div className="bg-background py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Echoes of Extraordinary Journeys" 
          label="Trust" 
          className="mb-6 sm:mb-8"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {featuredTestimonials.map((t, index) => (
            <Reveal key={t.id} delay={index * 0.1}>
              <div className="group relative p-8 syren-card syren-card-hover border-white/5 bg-surface/30 backdrop-blur-sm hover:bg-surface/50">
                <div className="absolute top-6 right-8 text-accent-gold/10 group-hover:text-accent-gold/20 transition-colors duration-500">
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

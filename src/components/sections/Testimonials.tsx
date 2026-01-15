import { supabase } from '@/lib/supabaseClient' 
import { testimonials as staticTestimonials } from "@/data/testimonials";
import ShareYourStory from './ShareYourStory'
import SectionHeader from '../layout/SectionHeader'
import { Quote, Star } from 'lucide-react'

export default async function Testimonials() { 
  let testimonials = staticTestimonials;

  if (supabase) {
    try {
      const { data, error } = await supabase 
        .from('testimonials') 
        .select('*') 
        .eq('approved', true) 
        .order('created_at', { ascending: false }) 

      if (!error && data && data.length > 0) {
        testimonials = data;
      }
    } catch {
      // Silently fail in production, fallback to static testimonials
    }
  }

  return ( 
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <SectionHeader 
            title="Echoes of Extraordinary Journeys" 
            label="Voices of Syren" 
            className="mb-0" // Reset margin since we have ShareYourStory below
          />
          
          <ShareYourStory />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {testimonials.map((t, index) => ( 
            <div 
              key={t.id} 
              className={`group relative p-8 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-sm transition-all duration-700 hover:bg-surface/50 hover:border-accent-gold/20 hover:-translate-y-2 ${
                index % 2 === 1 ? 'md:translate-y-6' : ''
              }`}
            > 
              <div className="absolute top-6 right-8 text-accent-gold/10 group-hover:text-accent-gold/20 transition-colors duration-700">
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`${i < (t.rating || 5) ? 'text-accent-gold fill-accent-gold' : 'text-white/10'}`} 
                  />
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed mb-8 italic relative z-10">
                &ldquo;{t.message}&rdquo;
              </p> 

              <div className="flex items-center gap-4 pt-6 border-t border-white/5"> 
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold/20 to-transparent border border-accent-gold/10 flex items-center justify-center text-accent-gold font-serif text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-medium text-sm tracking-wide">{t.name}</h3> 
                  {t.experience_slug && (
                    <span className="text-accent-gold/60 text-[10px] uppercase tracking-widest mt-1">
                      {t.experience_slug.replace(/-/g, ' ')}
                    </span>
                  )}
                </div>
              </div> 
            </div> 
          ))} 
        </div> 
      </div>
    </div>
  ) 
}

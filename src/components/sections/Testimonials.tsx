import { supabase } from '@/lib/supabaseClient' 
import { testimonials as staticTestimonials } from "@/data/testimonials";
import ShareYourStory from './ShareYourStory'

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
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  }

  return ( 
    <section className="bg-black py-20"> 
      <ShareYourStory />

      <h2 className="text-center text-4xl mb-12"> 
        What Travelers Say About Syren 
      </h2> 

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"> 
        {testimonials.map(t => ( 
          <div key={t.id} className="bg-neutral-900 p-6 rounded-xl"> 
            <p className="text-neutral-300 mb-4">"{t.message}"</p> 
            <div className="flex justify-between items-center"> 
              <span className="font-medium">{t.name}</span> 
              <span className="text-gold">⭐ {t.rating}</span> 
            </div> 
          </div> 
        ))} 
      </div> 
    </section> 
  ) 
 }

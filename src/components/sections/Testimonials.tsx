import { supabase } from "@/lib/supabaseClient"; 
import { testimonials as staticTestimonials } from "@/data/testimonials";

export default async function Testimonials() { 
  let testimonials = staticTestimonials;

  if (supabase) {
    try {
      const { data, error } = await supabase 
        .from("testimonials") 
        .select("*") 
        .eq("approved", true) 
        .order("created_at", { ascending: false }); 
      
      if (!error && data && data.length > 0) {
        // Map dynamic data to match Testimonial type if needed, or merge
        // For now, let's use dynamic data if available, otherwise static
        testimonials = data;
      }
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  }
 
  return ( 
    <section className="bg-background py-32" id="testimonials"> 
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-5xl text-primary"> 
          Voices of Our Travelers 
        </h2> 
   
        <div className="mt-20 grid md:grid-cols-3 gap-10"> 
          {testimonials.map((review, index) => ( 
            <div key={review.id || index} className="rounded-2xl bg-surface p-8 border border-border"> 
              <p className="italic text-text-secondary"> 
                “{review.message}” 
              </p> 
              <span className="mt-4 block text-accent-gold font-sans text-sm uppercase tracking-widest"> 
                {review.name} 
              </span> 
              {review.country && (
                <span className="text-text-muted text-xs">
                  {review.country}
                </span>
              )}
            </div> 
          ))} 
        </div> 
      </div>
    </section> 
  ); 
}

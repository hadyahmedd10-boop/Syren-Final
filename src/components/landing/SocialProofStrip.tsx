import { createClient } from "@/utils/supabase/server";
import Reveal from "@/components/motion/Reveal";
import { Quote } from "lucide-react";

interface TestimonialData {
  name: string;
  message: string;
}

export default async function SocialProofStrip() {
  const supabase = await createClient();
  let testimonials: TestimonialData[] = [];

  if (supabase) {
    const { data } = await supabase
      .from("testimonials")
      .select("name, message")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(3);
    
    if (data) testimonials = data;
  }

  // Fallback if no testimonials in DB
  if (testimonials.length === 0) {
    testimonials = [
      { name: "Avery J.", message: "A level of access I didn't think was possible. Standing alone in the shadow of the Sphinx was life-changing." },
      { name: "Marcus G.", message: "Every recommendation felt like a personal gift from a close friend. Truly soul-stirring." },
      { name: "Sophie R.", message: "Everything was handled with such effortless grace. The logistics were invisible." }
    ];
  }

  return (
    <section className="py-12 px-6 border-y border-white/5 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center space-y-3">
                <Quote className="text-accent-gold/20 w-6 h-6" />
                <p className="font-sans text-[13px] md:text-sm text-white/70 italic leading-relaxed line-clamp-2">
                  &ldquo;{t.message}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-px bg-accent-gold/30" />
                  <span className="font-serif text-xs text-accent-gold tracking-widest uppercase">{t.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/motion/Reveal";
import { ShieldCheck, MapPin, Clock } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-16 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Scarcity / Urgency */}
        <Reveal>
          <div className="text-center">
            <p className="font-serif text-lg md:text-xl text-accent-gold italic">
              &ldquo;Limited weekly slots to keep journeys private.&rdquo;
            </p>
          </div>
        </Reveal>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <ShieldCheck className="text-accent-gold w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white">Secure Checkout</h4>
                <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">Powered by Stripe</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="text-accent-gold w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white">Local Team in Egypt</h4>
                <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">Presence in Cairo & Luxor</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Clock className="text-accent-gold w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white">24/7 Concierge</h4>
                <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">Always on your side</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

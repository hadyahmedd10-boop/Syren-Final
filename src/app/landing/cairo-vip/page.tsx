import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cairo VIP Experience | Syren",
  description: "Experience Cairo with unprecedented access. Private pyramid entries and after-hours museum tours.",
  alternates: {
    canonical: "/landing/cairo-vip",
  },
};

export default function CairoVIPLanding() { 
  return ( 
    <main className="min-h-screen bg-[#050505]">
      <section className="min-h-[80vh] text-white flex items-center justify-center section bg-background relative overflow-hidden"> 
        {/* Subtle gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10"> 
          <span className="text-amber-500/60 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Exclusive Access</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight"> 
            Cairo, Beyond <br/>the Veil 
          </h1> 
          <p className="text-xl md:text-2xl opacity-80 mb-12 font-sans tracking-wide max-w-2xl mx-auto"> 
            Private pyramid entries. After-hours museum tours. The city&apos;s most prestigious addresses, curated for you.
          </p> 
  
          <Link href="/contact" className="syren-btn px-12 py-4 text-lg border-amber-500/30 hover:bg-amber-500/10"> 
            Request Private Access 
          </Link> 
        </div> 
      </section> 
    </main>
  ) 
}

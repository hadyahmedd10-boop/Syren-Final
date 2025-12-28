import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Red Sea Escapes | Syren",
  description: "Experience the pure calm of the Red Sea. Private yacht charters, hidden lagoons, and barefoot luxury.",
  alternates: {
    canonical: "/landing/red-sea",
  },
};

export default function RedSeaLanding() { 
  return ( 
    <main className="min-h-screen bg-[#001219]">
      <section className="min-h-[80vh] text-white flex items-center justify-center section bg-background relative overflow-hidden"> 
        {/* Abstract blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10"> 
          <span className="text-blue-400 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Red Sea Collection</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight"> 
            Pure Escape <br/>by Water 
          </h1> 
          <p className="text-xl md:text-2xl opacity-80 mb-12 font-sans tracking-wide max-w-2xl mx-auto"> 
            Crystal-clear waters, hidden lagoons, and barefoot luxury. Egypt&apos;s playground of calm and color.
          </p> 
  
          <Link href="/contact" className="syren-btn px-12 py-4 text-lg border-blue-400/30 hover:bg-blue-400/10"> 
            Design My Escape 
          </Link> 
        </div> 
      </section> 
    </main>
  ) 
}

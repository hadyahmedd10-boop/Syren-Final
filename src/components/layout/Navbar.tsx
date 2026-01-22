"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link" 
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "@/data/destinations";

function Logo({ className = "", onClick }: { className?: string; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link 
      href="/" 
      onClick={onClick}
      className={`font-serif text-xl text-accent-gold tracking-tight ${className}`}
    > 
      SYREN 
    </Link>
  );
}

export default function Navbar() { 
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMapOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
    setIsMapOpen(false);
    setIsMobileMapOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsMobileMapOpen(false);
  };

  return ( 
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border"> 
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 h-16"> 
        <Logo className="h-7 w-auto" onClick={handleLogoClick} /> 
        
        <div className="flex items-center gap-3">
          <Link 
            href="/experiences" 
            className="px-4 py-2 text-[11px] uppercase tracking-wider rounded-full bg-gold text-black font-bold" 
          > 
            Explore experiences 
          </Link> 
        
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu} 
            className="p-2 rounded-lg border border-white/10 text-primary" 
          > 
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button> 
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 h-[calc(100vh-64px)] bg-background border-t border-border z-40 overflow-y-auto"
            >
              <div className="flex flex-col px-6 py-10 gap-6 min-h-full">
                <div className="w-full">
                  <button 
                    onClick={() => setIsMobileMapOpen(!isMobileMapOpen)}
                    aria-expanded={isMobileMapOpen}
                    aria-haspopup="true"
                    className="flex items-center justify-between w-full group"
                  >
                    <span className="font-serif text-2xl text-white tracking-wide group-hover:text-accent-gold transition-colors">The Map</span>
                    <ChevronDown size={20} className={`text-accent-gold/40 transition-transform duration-500 ${isMobileMapOpen ? 'rotate-180 text-accent-gold' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileMapOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 mt-6 pl-4 border-l border-white/10">
                          {destinations.map((dest) => (
                            <Link 
                              key={dest.slug} 
                              href={`/destinations/${dest.slug}`} 
                              className="group flex flex-col gap-0.5"
                            >
                              <span className="font-serif text-lg text-white/90 group-hover:text-accent-gold transition-colors">
                                {dest.name}
                              </span>
                              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-accent-gold/60 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(196,160,82,0.2)]">
                                {dest.tagline}
                              </span>
                            </Link>
                          ))}
                          <Link 
                            href="/destinations" 
                            className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-accent-gold font-bold group"
                          >
                            <span>Explore All Destinations</span>
                            <div className="h-px w-6 bg-accent-gold/30 group-hover:w-10 transition-all duration-300" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/experiences" className="font-serif text-2xl text-white tracking-wide hover:text-accent-gold transition-colors">Experiences</Link>
                <Link href="/about" className="font-serif text-2xl text-white tracking-wide hover:text-accent-gold transition-colors">About</Link>
                <Link href="/quote" className="font-serif text-2xl text-accent-gold tracking-wide hover:text-white transition-colors">Contact</Link>
                
                <div className="mt-auto pt-8">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Inquiries</p>
                      <a href="mailto:concierge@syren.travel" className="text-xs text-white/60 hover:text-accent-gold transition-colors">concierge@syren.travel</a>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Follow</p>
                      <div className="flex gap-4">
                        <a href="#" className="text-xs text-white/60 hover:text-accent-gold transition-colors">Instagram</a>
                        <a href="#" className="text-xs text-white/60 hover:text-accent-gold transition-colors">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex max-w-7xl mx-auto px-6 h-20 items-center justify-between"> 
        
        {/* LOGO */} 
        <Logo className="text-2xl" onClick={handleLogoClick} /> 
 
         {/* LINKS */} 
         <div className="flex gap-10 text-sm tracking-wide"> 
           <div className="relative" ref={dropdownRef}>
             <button 
               onClick={() => setIsMapOpen(!isMapOpen)}
               aria-expanded={isMapOpen}
               aria-haspopup="true"
               className="flex items-center gap-1.5 hover:text-accent-gold transition-colors"
             >
               The Map
               <ChevronDown size={14} className={`transition-transform duration-300 ${isMapOpen ? 'rotate-180' : ''}`} />
             </button>

             <AnimatePresence>
               {isMapOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   className="absolute top-full left-0 mt-4 w-64 bg-background/95 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-xl z-50"
                 >
                   <div className="p-2">
                     <p className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-accent-gold/60 font-bold">Destinations</p>
                     {destinations.map((dest) => (
                       <Link
                         key={dest.slug}
                         href={`/destinations/${dest.slug}`}
                         className="flex flex-col px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                       >
                         <span className="text-sm font-medium group-hover:text-accent-gold transition-colors">{dest.name}</span>
                         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/60 group-hover:text-accent-gold/60 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(196,160,82,0.2)] line-clamp-1">{dest.tagline}</span>
                       </Link>
                     ))}
                     <div className="mt-2 pt-2 border-t border-border/50">
                       <Link
                         href="/destinations"
                         className="flex items-center justify-center py-2 text-[11px] uppercase tracking-widest text-accent-gold hover:underline"
                       >
                         View All Destinations
                       </Link>
                     </div>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
           <Link href="/experiences">Experiences</Link> 
           <Link href="/about">About</Link> 
           <Link href="/quote" className="text-accent-gold"> 
             Contact 
           </Link> 
         </div> 
 
         {/* CTA */} 
         <Link href="/experiences" className="syren-btn-primary"> 
           Explore Experiences 
         </Link> 
       </nav> 
     </header> 
   ) 
 }

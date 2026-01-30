"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link" 
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "@/data/destinations";
import { SOCIAL_LINKS, WHATSAPP_LINK } from "@/config/social";

function Logo({ className = "", onClick, href = "/home#hero" }: { className?: string; onClick?: (e: React.MouseEvent) => void; href?: string }) {
  return (
    <Link 
      href={href} 
      scroll={true}
      onClick={onClick}
      className={`font-serif text-xl text-accent-gold tracking-tight ${className}`}
    > 
      SYREN 
    </Link>
  );
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const itemVariants = {
  closed: { opacity: 0, y: 10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Navbar() { 
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const logoHref = pathname === "/" ? "/home#hero" : `${pathname}#hero`;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    const hero = document.getElementById("hero");
    if (hero) {
      e.preventDefault();
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (pathname === logoHref) {
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
  setIsMenuOpen((open) => {
    const next = !open;
    if (!next) setIsMobileMapOpen(false); // closing menu
    return next;
  });
};


  return ( 
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 h-16"> 
        <Logo className="h-7 w-auto" onClick={handleLogoClick} href={logoHref} /> 
        
        <div className="flex items-center gap-3">
          <Link 
            href="/experiences" 
            className="syren-btn-primary syren-nav-cta text-[9px] px-3 py-2"
          > 
            Explore experiences 
          </Link> 
        
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu} 
            className="p-2.5 min-h-[44px] min-w-[44px] rounded-lg border border-white/10 text-primary" 
          > 
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button> 
        </div>

      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-[10000] bg-background/98 backdrop-blur-xl overflow-y-auto pointer-events-auto flex flex-col"
            >
              {/* Top Section */}
              <div className="flex items-start justify-between px-6 pt-8 pb-4">
                <div className="flex flex-col gap-1">
                  <Logo className="text-3xl" onClick={handleLogoClick} href={logoHref} />
                  <span className="text-xs text-white/60 font-serif italic tracking-wide">Private journeys across Egypt</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-accent-gold transition-colors pt-2"
                >
                  Close
                  <X size={16} />
                </button>
              </div>

              {/* Primary Navigation */}
              <div className="flex-1 flex flex-col justify-center px-8 gap-8">
                
                <motion.div variants={itemVariants}>
                  <Link href="/experiences" className="font-serif text-3xl text-white hover:text-accent-gold transition-colors block">
                    Experiences
                  </Link>
                </motion.div>

                {/* The Map Accordion */}
                <motion.div variants={itemVariants}>
                  <button 
                    onClick={() => setIsMobileMapOpen(!isMobileMapOpen)}
                    aria-expanded={isMobileMapOpen}
                    className="flex items-center gap-3 group w-full text-left"
                  >
                    <span className="font-serif text-3xl text-white group-hover:text-accent-gold transition-colors">The Map</span>
                    <ChevronDown size={20} className={`text-accent-gold/50 transition-transform duration-500 ${isMobileMapOpen ? 'rotate-180 text-accent-gold' : ''}`} />
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
                        <div className="flex flex-col gap-3 mt-4 pl-4 border-l border-white/10 ml-1.5">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1 block">Destinations</span>
                          {destinations.map((dest) => (
                            <Link 
                              key={dest.slug} 
                              href={`/destinations/${dest.slug}`} 
                              className="group block"
                            >
                              <span className="block font-serif text-lg text-white/70 group-hover:text-accent-gold transition-colors">
                                {dest.name}
                              </span>
                            </Link>
                          ))}
                          <Link 
                            href="/destinations" 
                            className="mt-2 text-[10px] uppercase tracking-[0.2em] text-accent-gold/70 hover:text-accent-gold transition-colors"
                          >
                            View All Destinations
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link href="/about" className="font-serif text-3xl text-white hover:text-accent-gold transition-colors block">
                    About
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link href="/quote" className="font-serif text-3xl text-white hover:text-accent-gold transition-colors block">
                    Contact
                  </Link>
                </motion.div>
              </div>
              
              {/* Footer (Quiet Trust Layer) */}
              <motion.div 
                variants={itemVariants}
                className="px-8 pb-16 pt-8"
              >
                <div className="flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-serif text-lg text-white hover:text-accent-gold transition-colors">{SOCIAL_LINKS.email}</a>
                  <div className="flex gap-6">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-white hover:text-accent-gold transition-colors">Instagram</a>
                    <a href="#" className="text-[10px] uppercase tracking-widest text-white hover:text-accent-gold transition-colors">LinkedIn</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Desktop Navbar */}
      <nav className="hidden md:flex max-w-7xl mx-auto container-x h-20 items-center justify-between"> 
        
        {/* LOGO */} 
        <Logo className="text-2xl" onClick={handleLogoClick} href={logoHref} /> 
 
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
        <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCta(SOCIAL_EVENTS.whatsapp, { location: "navbar_desktop", url: WHATSAPP_LINK })}
            className="syren-btn-primary"
            aria-label="Design Your Journey via WhatsApp"
          > 
            Design Your Journey 
          </a> 
      </nav> 
    </header> 
  ) 
}

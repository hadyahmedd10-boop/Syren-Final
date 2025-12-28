"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapDropdownOpen, setIsMapDropdownOpen] = useState(false);
  const [isMobileMapOpen, setIsMobileMapOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMapDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Initialize hash
    handleHashChange();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    // Intersection Observer for highlighting sections
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["destinations", "vision"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-sm focus:font-sans focus:font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface border-b border-border py-2 md:py-3 shadow-xl"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <nav 
          className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand */}
          <Link 
            href="/" 
            className={`font-serif text-xl md:text-3xl tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-sm transition-colors duration-500 ${
              scrolled ? "text-text-primary" : "text-white/90"
            }`}
          >
            SYREN
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/experiences"
                className={`font-sans text-sm transition-all duration-300 tracking-wide focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-sm px-2 py-1 relative group ${
                  pathname === "/experiences"
                    ? "text-accent-gold"
                    : scrolled
                    ? "text-text-primary hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                Experiences
                <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-accent-gold transition-transform duration-300 origin-left ${
                  pathname === "/experiences" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            </li>

            <li className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsMapDropdownOpen(true)}
                onClick={() => setIsMapDropdownOpen(!isMapDropdownOpen)}
                className={`font-sans text-sm transition-all duration-300 tracking-wide focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-sm px-2 py-1 relative group flex items-center gap-1 ${
                  pathname.startsWith("/destinations") || (pathname === "/" && activeSection === "destinations") || isMapDropdownOpen
                    ? "text-accent-gold"
                    : scrolled
                    ? "text-text-primary hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                The Map
                <ChevronDown size={14} className={`transition-transform duration-300 ${isMapDropdownOpen ? "rotate-180" : ""}`} />
                <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-accent-gold transition-transform duration-300 origin-left ${
                  pathname.startsWith("/destinations") || (pathname === "/" && activeSection === "destinations") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setIsMapDropdownOpen(false)}
                className={`absolute top-full left-0 mt-2 w-56 bg-surface border border-border rounded-lg shadow-2xl py-2 transition-all duration-300 origin-top-left ${
                  isMapDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    onClick={() => setIsMapDropdownOpen(false)}
                    className="block px-4 py-3 text-sm text-text-primary hover:bg-white/5 hover:text-accent-gold transition-colors"
                  >
                    {dest.name}
                  </Link>
                ))}
                <div className="border-t border-border mt-1 pt-1">
                  <Link
                    href="/#destinations"
                    onClick={() => setIsMapDropdownOpen(false)}
                    className="block px-4 py-3 text-xs uppercase tracking-widest text-accent-gold/60 hover:text-accent-gold transition-colors"
                  >
                    View All Destinations
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/#vision"
                className={`font-sans text-sm transition-all duration-300 tracking-wide focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-sm px-2 py-1 relative group ${
                  (pathname === "/" && (activeSection === "vision" || activeHash === "#vision"))
                    ? "text-accent-gold"
                    : scrolled
                    ? "text-text-primary hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                The Vision
                <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-accent-gold transition-transform duration-300 origin-left ${
                  (pathname === "/" && (activeSection === "vision" || activeHash === "#vision")) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          {pathname !== "/" && (
            <a 
              href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex syren-btn"
            >
              PLAN YOUR JOURNEY
            </a>
          )}
        </div>

        {/* Mobile CTA & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {pathname !== "/" && (
            <a
              href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
              target="_blank"
              rel="noopener noreferrer"
              className="syren-btn text-[9px] px-3 py-0 whitespace-nowrap min-h-[32px] flex items-center justify-center border-white/20 tracking-wide"
            >
              PLAN YOUR JOURNEY
            </a>
          )}
          
          <button
            ref={toggleRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={`${
              scrolled ? "text-text-primary" : "text-white/90"
            } p-1 z-50 relative focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-2 rounded-sm min-w-[32px] min-h-[32px] flex items-center justify-center`}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-surface z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden overflow-y-auto`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col items-center justify-start min-h-full py-24 px-6 space-y-12">
          <ul className="flex flex-col items-center space-y-6 w-full">
            <li>
              <Link
                href="/experiences"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-3xl text-white tracking-wide hover:text-accent-gold transition-colors block text-center py-2"
              >
                Experiences
              </Link>
            </li>

            <li className="w-full flex flex-col items-center">
              <button
                onClick={() => setIsMobileMapOpen(!isMobileMapOpen)}
                className="font-serif text-3xl text-white tracking-wide hover:text-accent-gold transition-colors flex items-center gap-3 py-2"
              >
                The Map
                <ChevronDown size={24} className={`transition-transform duration-300 ${isMobileMapOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                isMobileMapOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
              }`}>
                {destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-sans text-lg text-white/60 hover:text-accent-gold transition-colors"
                  >
                    {dest.name}
                  </Link>
                ))}
                <Link
                  href="/#destinations"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-sm uppercase tracking-widest text-accent-gold/40 hover:text-accent-gold transition-colors pt-2"
                >
                  View All
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/#vision"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-3xl text-white tracking-wide hover:text-accent-gold transition-colors block text-center py-2"
              >
                The Vision
              </Link>
            </li>
          </ul>

          <a
            href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="syren-btn"
          >
            PLAN YOUR JOURNEY
          </a>

          {/* Mobile Social Links */}
          <div className="flex items-center gap-8 pt-8 border-t border-white/10 w-full justify-center">
            <a
              href="https://instagram.com/syren.egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-gold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              aria-label="Syren on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a
              href="https://tiktok.com/@syren.egypt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Syren on TikTok"
              className="text-white/90 hover:text-gold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
            <a
              href="https://facebook.com/syren.egypt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Syren on Facebook"
              className="text-white/90 hover:text-gold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

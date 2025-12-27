"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }

      if (e.key === "Tab" && isMenuOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      main?.setAttribute("aria-hidden", "true");
      footer?.setAttribute("aria-hidden", "true");
    } else {
      document.body.style.overflow = "unset";
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("aria-hidden");
    }
    return () => {
      document.body.style.overflow = "unset";
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("aria-hidden");
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Experiences", href: "/experiences" },
    { name: "The Map", href: "/#destinations" },
    { name: "The Vision", href: "/#vision" },
  ];

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
            ? "bg-surface border-b border-border py-3 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
      <nav 
        className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand */}
        <Link 
          href="/" 
          className={`font-serif text-2xl md:text-3xl tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-sm transition-colors duration-500 ${
            scrolled ? "text-text-primary" : "text-white/90"
          }`}
        >
          SYREN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                pathname === link.href || 
                (link.href.startsWith('/#') && pathname === '/') ||
                (link.href === '/#destinations' && pathname.startsWith('/destinations'));
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-sans text-sm transition-all duration-300 tracking-wide focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-sm px-2 py-1 relative group ${
                      isActive 
                        ? "text-accent-gold" 
                        : scrolled 
                          ? "text-text-primary hover:text-gold" 
                          : "text-white/90 hover:text-gold"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-accent-gold transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                </li>
              );
            })}
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
        <div className="flex items-center gap-4 md:hidden">
          {pathname !== "/" && (
            <Link
              href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
              target="_blank"
              rel="noopener noreferrer"
              className="syren-btn text-[10px] px-4 py-2"
            >
              PLAN YOUR JOURNEY
            </Link>
          )}
          
          <button
            ref={toggleRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={`${
              scrolled ? "text-text-primary" : "text-white/90"
            } p-2.5 z-50 relative focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-2 rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center`}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-surface z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-12">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl text-white tracking-wide hover:text-accent-gold transition-colors focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-8 rounded-sm p-4 min-w-[120px] text-center"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="syren-btn"
          >
            PLAN YOUR JOURNEY
          </Link>

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

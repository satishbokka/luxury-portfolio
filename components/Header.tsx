"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-noir/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 md:px-10" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col items-start leading-tight group focus:outline-none"
              aria-label={`${siteConfig.name} — Home`}
            >
              <span className="font-serif text-lg md:text-xl tracking-[0.25em] text-[#C9A96E] uppercase font-medium group-hover:text-white transition-colors duration-300">
                AR
              </span>
              <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.22em] text-ivory/60 font-sans uppercase -mt-0.5">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-[0.6875rem] font-[family-name:var(--font-inter)] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-champagne active"
                      : "text-ivory/70 hover:text-ivory"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="default">
                Book a Shoot
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex flex-col items-end gap-1.5">
                <span
                  className={`block h-[1px] bg-ivory transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "w-6 rotate-45 translate-y-[4px]"
                      : "w-6"
                  }`}
                />
                <span
                  className={`block h-[1px] bg-ivory transition-all duration-300 ${
                    isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Quote } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-charcoal/30" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-label block mb-8">Our Promise</span>
            <Quote size={32} className="text-champagne/30 mx-auto mb-8" />

            <div className="relative min-h-[180px] flex items-center justify-center">
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl text-ivory/90 leading-relaxed italic">
                  &ldquo;Every photograph should feel like a return — not just to a place and time, but to a feeling. That&apos;s the standard we hold ourselves to.&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-ivory text-sm font-medium tracking-wide">
                    {siteConfig.photographer}
                  </p>
                  <p className="text-silver text-xs tracking-[0.15em] uppercase mt-1">
                    Founder, {siteConfig.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-champagne/20" />
              <span className="text-[0.625rem] tracking-[0.2em] uppercase text-champagne/40">
                Crafted with intention
              </span>
              <div className="h-[1px] w-12 bg-champagne/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

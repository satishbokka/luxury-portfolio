"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-24 md:py-32 bg-charcoal/30" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-label block mb-8">Kind Words</span>
            <Quote size={32} className="text-champagne/30 mx-auto mb-8" />

            <div className="relative min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl text-ivory/90 leading-relaxed italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="text-ivory text-sm font-medium tracking-wide">
                      {testimonials[current].name}
                    </p>
                    <p className="text-silver text-xs tracking-[0.15em] uppercase mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-silver hover:border-champagne hover:text-champagne transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-body-sm text-silver/60">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-silver hover:border-champagne hover:text-champagne transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

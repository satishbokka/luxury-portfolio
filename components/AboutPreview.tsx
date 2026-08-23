"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-charcoal/50" aria-labelledby="about-preview-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=85"
                alt="Photographer at work in natural setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-champagne/20 -z-10 hidden lg:block" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <span className="text-label block mb-4">About</span>
              <h2 className="text-display-md text-ivory" id="about-preview-heading">
                The Eye Behind
                <br />
                the Lens
              </h2>
              <p className="text-body-lg mt-6">
                With over eight years of experience across weddings, portraits,
                and editorial work, I&apos;ve learned that the most powerful photographs
                are the ones that feel true.
              </p>
              <p className="text-body mt-4">
                My approach is rooted in observation and patience — waiting for the
                moment when light, emotion, and composition align to create
                something extraordinary. Every session is a collaboration, every
                image a shared story.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-white/10">
                {[
                  { value: "150+", label: "Weddings" },
                  { value: "500+", label: "Sessions" },
                  { value: "8+", label: "Years" },
                  { value: "12+", label: "Cities" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family-name:var(--font-playfair)] text-3xl text-champagne">
                      {stat.value}
                    </p>
                    <p className="text-body-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button href="/about" variant="secondary">
                  Read Our Story
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

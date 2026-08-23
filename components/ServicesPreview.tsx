"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-noir" aria-labelledby="services-preview-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            label="What We Offer"
            title="Crafted Experiences"
            description="Every photography session is tailored to your vision. We don't just take photos — we create visual narratives."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {previewServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.15}>
              <Link
                href="/services"
                className="group block"
                data-cursor="Open"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-ivory group-hover:text-champagne transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-body-sm mt-2 line-clamp-2">
                  {service.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 text-champagne text-[0.6875rem] tracking-[0.15em] uppercase mt-4 group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-champagne text-[0.6875rem] font-[family-name:var(--font-inter)] font-medium tracking-[0.2em] uppercase hover:gap-3 transition-all duration-300"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

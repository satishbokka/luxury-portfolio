"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { portfolioImages } from "@/data/portfolio";

export function FeaturedGallery() {
  const featured = portfolioImages.filter((img) => img.featured).slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-noir" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollReveal>
          <SectionHeading
            label="Selected Work"
            title="Stories We've Told"
            description="A curated selection of our most meaningful projects — each one a unique narrative captured with intention."
          />
        </ScrollReveal>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Large Feature - Row 1 */}
          {featured[0] && (
            <ScrollReveal className="md:col-span-7 relative group" delay={0.1}>
              <Link
                href="/portfolio"
                className="block relative aspect-[4/3] overflow-hidden"
                data-cursor="View"
              >
                <Image
                  src={featured[0].src}
                  alt={featured[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-label text-champagne/80 text-[0.6rem]">
                    {featured[0].category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-ivory mt-1">
                    {featured[0].title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Tall Right - Row 1 */}
          {featured[1] && (
            <ScrollReveal className="md:col-span-5 relative group" delay={0.2}>
              <Link
                href="/portfolio"
                className="block relative aspect-[3/4] overflow-hidden"
                data-cursor="View"
              >
                <Image
                  src={featured[1].src}
                  alt={featured[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-label text-champagne/80 text-[0.6rem]">
                    {featured[1].category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-ivory mt-1">
                    {featured[1].title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Row 2 - Three equal */}
          {featured.slice(2, 5).map((img, index) => (
            <ScrollReveal
              key={img.id}
              className="md:col-span-4 relative group"
              delay={0.1 + index * 0.1}
            >
              <Link
                href="/portfolio"
                className="block relative aspect-[4/5] overflow-hidden"
                data-cursor="View"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-label text-champagne/80 text-[0.6rem]">
                    {img.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-ivory mt-1">
                    {img.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* Row 3 - Wide panoramic */}
          {featured[5] && (
            <ScrollReveal className="md:col-span-12 relative group" delay={0.1}>
              <Link
                href="/portfolio"
                className="block relative aspect-[21/9] overflow-hidden"
                data-cursor="View"
              >
                <Image
                  src={featured[5].src}
                  alt={featured[5].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-label text-champagne/80 text-[0.6rem]">
                    {featured[5].category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-ivory mt-1">
                    {featured[5].title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal className="text-center mt-16">
          <Button href="/portfolio" variant="primary" size="lg">
            Explore the Full Portfolio
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

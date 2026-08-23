"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Lightbox } from "@/components/Lightbox";
import {
  portfolioImages,
  categories,
  type PortfolioCategory,
} from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <SectionHeading
              label="Portfolio"
              title="Our Work"
              description="A collection of moments — each one a testament to the beauty of authentic storytelling."
            />
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-[0.6875rem] font-[family-name:var(--font-inter)] tracking-[0.15em] uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "text-champagne border-b-[1px] border-champagne"
                      : "text-silver hover:text-ivory"
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 md:pb-32 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                    layout: { duration: 0.4 },
                  }}
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative block w-full overflow-hidden cursor-pointer text-left"
                    data-cursor="View"
                    aria-label={`View ${image.title}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-champagne/80">
                        {image.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-playfair)] text-base text-ivory mt-1">
                        {image.title}
                      </h3>
                      <p className="text-[0.7rem] text-ivory/50 mt-0.5">
                        {image.location}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

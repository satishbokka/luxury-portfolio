"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function HomeCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden" aria-label="Call to action">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-noir/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 text-center">
        <ScrollReveal>
          <span className="text-label block mb-6">Let&apos;s Create Together</span>
          <h2 className="text-display-lg text-ivory max-w-2xl mx-auto">
            Ready to Tell Your Story?
          </h2>
          <p className="text-body-lg mt-6 max-w-lg mx-auto">
            Every great photograph begins with a conversation. Let&apos;s discuss
            your vision and create something timeless.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Book a Shoot
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              View Portfolio
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

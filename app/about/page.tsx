import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.photographer} — the vision, philosophy, and passion behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=85"
                  alt={`${siteConfig.photographer} — photographer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Story */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="text-label block mb-4">The Photographer</span>
                <h1 className="text-display-lg text-ivory">
                  {siteConfig.photographer}
                </h1>
                <div className="mt-8 space-y-5">
                  <p className="text-body-lg">
                    Photography found me before I found it. Growing up surrounded
                    by art and travel, I developed an intuition for light, composition,
                    and the quiet moments that reveal who we truly are.
                  </p>
                  <p className="text-body">
                    After studying visual arts in Paris and assisting established
                    photographers across Europe, I launched {siteConfig.name} with
                    a singular vision: to create photographs that feel as real and
                    alive as the moments they capture.
                  </p>
                  <p className="text-body">
                    Today, I work with couples, brands, and individuals worldwide —
                    always with the same commitment to authenticity, beauty, and
                    emotional truth that guided me from the beginning.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-charcoal/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-label block mb-6">Philosophy</span>
              <h2 className="text-display-md text-ivory">
                Photography Should Feel Like Memory
              </h2>
              <div className="mt-8 space-y-5">
                <p className="text-body-lg">
                  I believe the best photographs are the ones that transport you
                  back — not just to a place and time, but to a feeling. The warmth
                  of the light, the catch of breath before a kiss, the weight of
                  a meaningful glance.
                </p>
                <p className="text-body">
                  My approach is rooted in patience and observation. I don&apos;t chase
                  moments — I wait for them. I create the conditions for authenticity
                  to emerge, and when it does, I&apos;m ready.
                </p>
                <p className="text-body">
                  Every technical decision — from the lens I choose to the way I
                  process the light — serves one purpose: to honour the truth of
                  what happened in front of the camera.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-24 md:py-32 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <SectionHeading
              label="Experience"
              title="Years of Craft"
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto">
            {[
              { value: "150+", label: "Weddings Photographed" },
              { value: "500+", label: "Sessions Completed" },
              { value: "8+", label: "Years of Experience" },
              { value: "12+", label: "Cities Worldwide" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-champagne">
                    {stat.value}
                  </p>
                  <p className="text-body-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="py-24 md:py-32 bg-charcoal/30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-ivory/90 leading-relaxed italic">
                &ldquo;I don&apos;t photograph subjects. I photograph the space
                between people — the energy, the tension, the tenderness. That&apos;s
                where the real story lives.&rdquo;
              </blockquote>
              <p className="text-label mt-8">— {siteConfig.photographer}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-display-md text-ivory">
              Let&apos;s Work Together
            </h2>
            <p className="text-body-lg mt-4 max-w-lg mx-auto">
              I&apos;d love to hear your story and discuss how we can create
              something meaningful together.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

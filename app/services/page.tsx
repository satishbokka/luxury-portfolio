import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Check } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Photography services by ${siteConfig.name} — weddings, portraits, events, fashion, and custom sessions.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <SectionHeading
              label="Services"
              title="What We Offer"
              description="Every service is a bespoke experience — tailored to your story, your vision, and your unique needs."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 md:pb-32 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <ScrollReveal key={service.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-label block mb-3">
                      {service.subtitle}
                    </span>
                    <h2 className="text-display-md text-ivory">
                      {service.title}
                    </h2>
                    <p className="text-body-lg mt-6">{service.description}</p>

                    {/* Includes */}
                    <div className="mt-8">
                      <h3 className="text-label mb-4">What&apos;s Included</h3>
                      <ul className="space-y-3">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-body"
                          >
                            <Check
                              size={14}
                              className="text-champagne flex-shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Button href="/contact" variant="primary">
                        Enquire for Details
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-charcoal/30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <ScrollReveal>
            <span className="text-label block mb-4">Custom Requests</span>
            <h2 className="text-display-md text-ivory max-w-xl mx-auto">
              Don&apos;t See What You&apos;re Looking For?
            </h2>
            <p className="text-body-lg mt-4 max-w-lg mx-auto">
              We love bringing unique visions to life. Get in touch and let&apos;s
              design a session that&apos;s perfectly tailored to you.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

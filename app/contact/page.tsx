"use client";

import { useState, FormEvent } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    date: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: In production, connect to an email/form service
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyles =
    "w-full bg-transparent border border-white/10 px-5 py-3.5 text-ivory text-[0.875rem] font-[family-name:var(--font-inter)] placeholder:text-silver/40 focus:border-champagne/50 focus:outline-none transition-colors duration-300";

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <ScrollReveal>
            <SectionHeading
              label="Contact"
              title="Let's Create Something Timeless"
              description="Every great photograph begins with a conversation. We'd love to hear about your vision."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 md:pb-32 bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl text-ivory mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-body">
                    Whether you have a specific project in mind or simply want to
                    explore possibilities, we&apos;re here to listen. Reach out
                    through any of the channels below.
                  </p>
                </div>

                <div className="space-y-5 pt-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-silver hover:text-champagne transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-champagne/30 transition-colors">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block">
                        WhatsApp
                      </span>
                      <span className="text-sm text-ivory/80">
                        Chat with us
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-4 text-silver hover:text-champagne transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-champagne/30 transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block">
                        Phone
                      </span>
                      <span className="text-sm text-ivory/80">
                        {siteConfig.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 text-silver hover:text-champagne transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-champagne/30 transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block">
                        Email
                      </span>
                      <span className="text-sm text-ivory/80">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-silver hover:text-champagne transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-champagne/30 transition-colors">
                      <InstagramIcon size={16} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block">
                        Instagram
                      </span>
                      <span className="text-sm text-ivory/80">
                        {siteConfig.instagram}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-silver">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block">
                        Based In
                      </span>
                      <span className="text-sm text-ivory/80">
                        {siteConfig.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[0.6875rem] font-[family-name:var(--font-inter)] font-medium tracking-[0.15em] uppercase hover:bg-[#25D366]/20 transition-all duration-300"
                  >
                    <MessageCircle size={14} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3" delay={0.2}>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 border border-white/10 px-8">
                  <CheckCircle size={48} className="text-champagne mb-6" />
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-ivory">
                    Thank You
                  </h3>
                  <p className="text-body mt-4 max-w-sm">
                    Your enquiry has been received. We&apos;ll be in touch within
                    24-48 hours to discuss your vision.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        type: "",
                        date: "",
                        message: "",
                      });
                    }}
                    className="text-champagne text-[0.6875rem] tracking-[0.15em] uppercase mt-8 hover:text-ivory transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className={inputStyles}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className={inputStyles}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className={inputStyles}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-type"
                        className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block mb-2"
                      >
                        Photography Type
                      </label>
                      <select
                        id="contact-type"
                        name="type"
                        value={formState.type}
                        onChange={handleChange}
                        className={`${inputStyles} appearance-none`}
                      >
                        <option value="" className="bg-noir">
                          Select a type
                        </option>
                        <option value="wedding" className="bg-noir">
                          Wedding
                        </option>
                        <option value="prewedding" className="bg-noir">
                          Pre-Wedding
                        </option>
                        <option value="portrait" className="bg-noir">
                          Portrait
                        </option>
                        <option value="event" className="bg-noir">
                          Event
                        </option>
                        <option value="fashion" className="bg-noir">
                          Fashion
                        </option>
                        <option value="custom" className="bg-noir">
                          Custom Session
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-date"
                      className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-[0.6rem] tracking-[0.15em] uppercase text-silver/60 block mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputStyles} resize-none`}
                      placeholder="Tell us about your vision..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-champagne text-champagne text-[0.6875rem] font-[family-name:var(--font-inter)] font-medium tracking-[0.2em] uppercase hover:bg-champagne hover:text-noir transition-all duration-400 w-full sm:w-auto"
                    >
                      <Send size={14} />
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

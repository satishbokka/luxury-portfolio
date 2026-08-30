"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import { Button } from "@/components/ui/Button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/* ================================================================
   MOBILE HERO — Luxury Editorial Reveal
   A black canvas with the photograph displayed as an editorial card,
   and typography in its own clean space below.
   ================================================================ */

function MobileHero() {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, show everything immediately
  const d = shouldReduceMotion ? 0 : 1; // animation duration multiplier

  return (
    <section
      className="relative flex flex-col min-h-[100svh] w-full bg-black md:hidden overflow-hidden"
      aria-label="Hero"
    >
      {/* ─── Subtle decorative gold line ─── */}
      <motion.div
        className="mx-auto mt-[88px] mb-[clamp(14px,3vw,22px)] w-[1px] h-[clamp(20px,5vw,32px)] bg-[#C9A96E]/40"
        initial={shouldReduceMotion ? false : { scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.1 * d, duration: 0.5 * d, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* ─── EDITORIAL PHOTOGRAPH ─── */}
      <div className="relative mx-auto w-[clamp(300px,86vw,400px)]">
        {/* Image frame with clip-path reveal */}
        <motion.div
          className="relative w-full aspect-[3/4] overflow-hidden"
          initial={
            shouldReduceMotion
              ? false
              : { clipPath: "inset(0 0 100% 0)", opacity: 0 }
          }
          animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          transition={{
            delay: 0.15 * d,
            duration: 0.9 * d,
            ease: [0.77, 0, 0.175, 1],
          }}
        >
          {/* Image with subtle scale animation */}
          <motion.div
            className="absolute inset-0"
            initial={shouldReduceMotion ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.15 * d,
              duration: 1.4 * d,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Image
              src="/images/hero/hero.png"
              alt="Indian bride in elegant gold jewelry and traditional bridal styling"
              fill
              priority
              sizes="86vw"
              className="object-cover object-[60%_25%] brightness-[1.1] contrast-[1.02] saturate-[1.03]"
            />
          </motion.div>

          {/* Very subtle bottom gradient — just enough to separate from text */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
            }}
          />
        </motion.div>

        {/* Thin champagne border accent — left side only for editorial feel */}
        <motion.div
          className="absolute left-0 top-[8%] bottom-[8%] w-[1px] bg-[#C9A96E]/25 -translate-x-[10px]"
          initial={shouldReduceMotion ? false : { scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            delay: 0.6 * d,
            duration: 0.6 * d,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      {/* ─── EDITORIAL CONTENT ─── */}
      <div className="flex-1 flex flex-col justify-center px-6 pt-[clamp(24px,5vw,36px)] pb-[clamp(32px,6vw,48px)]">
        {/* Label */}
        <motion.span
          className="block text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#C9A96E] mb-[clamp(14px,3vw,20px)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55 * d,
            duration: 0.5 * d,
            ease: "easeOut",
          }}
        >
          CAPTURING REAL MOMENTS
        </motion.span>

        {/* Heading */}
        <motion.h1
          className={`${playfair.className} text-[clamp(2.8rem,11vw,3.8rem)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-[#F5F0EB] mb-[clamp(12px,2.5vw,18px)]`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7 * d,
            duration: 0.6 * d,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          TIMELESS
          <br />
          MEMORIES
        </motion.h1>

        {/* Script tagline */}
        <motion.p
          className={`${greatVibes.className} text-[clamp(1.6rem,6.5vw,2.2rem)] leading-snug text-[#C9A96E] mb-[clamp(24px,5vw,34px)]`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9 * d,
            duration: 0.5 * d,
            ease: "easeOut",
          }}
        >
          You live. We capture.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.05 * d,
            duration: 0.5 * d,
            ease: "easeOut",
          }}
        >
          <Button
            href="/portfolio"
            className="
              border
              border-[#C9A96E]
              bg-transparent
              px-7
              py-[13px]
              text-[0.6rem]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#F5F0EB]
              transition-all
              duration-300
              hover:bg-[#C9A96E]
              hover:text-black
              w-fit
            "
          >
            VIEW PORTFOLIO
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   DESKTOP HERO — Unchanged cinematic split layout
   Image right, typography left, editorial gradients
   ================================================================ */

function DesktopHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrolled = window.scrollY;
      const img = heroRef.current.querySelector(
        ".hero-image"
      ) as HTMLElement | null;

      if (img && scrolled < window.innerHeight) {
        img.style.transform = `scale(1.015) translateY(${scrolled * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative hidden md:flex h-screen min-h-[700px] max-h-[1080px] w-full overflow-hidden bg-black items-center"
      aria-label="Hero"
    >
      {/* =========================================================
          HERO PHOTOGRAPH — DESKTOP ONLY
          Right anchored full height
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.div
          className="
            hero-image
            absolute
            inset-0
            h-full
            w-full
            md:left-auto
            md:right-0
            md:top-0
            md:w-[67%]
            lg:w-[63%]
            xl:w-[60%]
            will-change-transform
          "
          initial={{ opacity: 0, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src="/images/hero/hero.png"
            alt="Bridal portrait"
            fill
            priority
            sizes="60vw"
            className="
              object-cover
              md:object-[72%_45%]
              lg:object-[74%_45%]
              brightness-[1.05]
              contrast-[1.03]
              saturate-[1.02]
            "
          />
        </motion.div>

        {/* =======================================================
            CINEMATIC IMAGE BLEND — DESKTOP ONLY
            Black on left → transparent toward bride
            ======================================================= */}

        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 16%, rgba(0,0,0,0.88) 27%, rgba(0,0,0,0.55) 39%, rgba(0,0,0,0.18) 52%, rgba(0,0,0,0) 67%)",
          }}
        />

        {/* Very subtle right-side vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.12), transparent 25%)",
          }}
        />

        {/* Top cinematic fade */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), transparent)",
          }}
        />

        {/* Bottom cinematic fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTENT — DESKTOP EDITORIAL OVERLAY
          ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          w-full
          max-w-[1400px]
          items-center
          px-6
          sm:px-10
          lg:px-16
        "
      >
        <div
          className="
            w-full
            max-w-[580px]
            pl-0
            md:pl-4
          "
        >
          {/* LABEL */}
          <motion.span
            className="
              mb-5
              block
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#C9A96E]
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
          >
            CAPTURING REAL MOMENTS
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h1
            className={`
              ${playfair.className}
              md:text-6xl
              md:leading-[1.04]
              lg:text-[4.55rem]
              xl:text-[4.9rem]
              font-normal
              uppercase
              tracking-[-0.02em]
              text-white
            `}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            TIMELESS
            <br />
            MEMORIES
          </motion.h1>

          {/* SCRIPT TAGLINE */}
          <motion.p
            className={`
              ${greatVibes.className}
              md:mt-4
              md:mb-10
              md:text-4xl
              lg:text-[2.65rem]
              leading-snug
              text-[#C9A96E]
            `}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
          >
            You live. We capture.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.6,
            }}
          >
            <Button
              href="/portfolio"
              className="
                border
                border-[#C9A96E]
                bg-transparent
                px-9
                py-3.5
                text-[0.72rem]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#F5F0EB]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#C9A96E]
                hover:text-black
                hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]
              "
            >
              VIEW PORTFOLIO
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   HERO — Renders mobile or desktop variant based on screen size
   ================================================================ */

export function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
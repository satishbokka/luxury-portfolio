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

/* New cinematic palace / pavilion wedding image */
const HERO_IMAGE = "/images/hero/palace-wedding.jpg";

/* ================================================================
   MOBILE HERO — Premium Editorial Composition
   Header → Full-width photograph (55svh) with bottom-to-black fade
   → Clean dark section with typography and CTA
   No text over busy part of image. Image and text each have room.
   ================================================================ */

function MobileHero() {
  const shouldReduceMotion = useReducedMotion();
  const d = shouldReduceMotion ? 0 : 1;

  return (
    <section
      className="relative flex flex-col w-full bg-black md:hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
    >
      {/* ─── CINEMATIC PHOTOGRAPH ─────────────────────────────── */}
      <motion.div
        className="relative w-full overflow-hidden flex-shrink-0"
        style={{ height: "clamp(340px, 55svh, 530px)" }}
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 * d, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={shouldReduceMotion ? false : { scale: 1.04 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.8 * d, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Indian bride in crimson lehenga and groom in sherwani standing together beneath an ornate marble pavilion at golden hour sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 28%" }}
          />
        </motion.div>

        {/* Cinematic bottom-to-black fade — smooth editorial dissolve into text area */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
          style={{
            height: "60%",
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.88) 25%, rgba(0,0,0,0.45) 60%, transparent 100%)",
          }}
        />

        {/* Subtle top fade for header integration */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none z-10"
          style={{
            height: "80px",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
          }}
        />
      </motion.div>

      {/* ─── TYPOGRAPHY SECTION ──────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col bg-black flex-1"
        style={{
          paddingLeft: "clamp(24px, 7vw, 44px)",
          paddingRight: "clamp(24px, 7vw, 44px)",
          paddingTop: "clamp(26px, 5vw, 38px)",
          paddingBottom: "clamp(40px, 8svh, 64px)",
        }}
      >
        {/* Gold rule accent */}
        <motion.div
          className="bg-[#C9A96E] mb-5"
          style={{ width: "32px", height: "1px" }}
          initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            delay: 0.35 * d,
            duration: 0.5 * d,
            ease: "easeOut",
          }}
          aria-hidden
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore — motion div style, transformOrigin via style prop
          // Using inline style below to avoid TS issue with custom motion props
        />

        {/* Label */}
        <motion.span
          className="block font-medium uppercase text-[#C9A96E]"
          style={{
            fontSize: "clamp(0.58rem, 2.4vw, 0.68rem)",
            letterSpacing: "0.3em",
            marginBottom: "clamp(14px, 3vw, 20px)",
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48 * d, duration: 0.5 * d, ease: "easeOut" }}
        >
          CAPTURING REAL MOMENTS
        </motion.span>

        {/* Heading */}
        <motion.h1
          className={`${playfair.className} font-normal uppercase text-[#F5F0EB]`}
          style={{
            fontSize: "clamp(2.9rem, 12.5vw, 3.9rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(14px, 3vw, 20px)",
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.62 * d,
            duration: 0.65 * d,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          TIMELESS
          <br />
          MEMORIES
        </motion.h1>

        {/* Script tagline */}
        <motion.p
          className={`${greatVibes.className} text-[#C9A96E]`}
          style={{
            fontSize: "clamp(1.75rem, 7.5vw, 2.3rem)",
            lineHeight: 1.3,
            marginBottom: "clamp(28px, 5.5vw, 40px)",
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82 * d, duration: 0.5 * d, ease: "easeOut" }}
        >
          You live. We capture.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 * d, duration: 0.5 * d, ease: "easeOut" }}
        >
          <Button
            href="/portfolio"
            className="
              border
              border-[#C9A96E]
              bg-transparent
              text-[#F5F0EB]
              font-medium
              uppercase
              tracking-[0.22em]
              transition-all
              duration-300
              hover:bg-[#C9A96E]
              hover:text-black
              w-fit
            "
            style={{
              fontSize: "0.63rem",
              paddingInline: "clamp(22px, 5vw, 30px)",
              paddingBlock: "13px",
              minHeight: "48px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            VIEW PORTFOLIO
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   DESKTOP HERO — Cinematic split: deep-black left + photograph right
   Image right-anchored at ~60% width. Subtle parallax (desktop only).
   ================================================================ */

function DesktopHero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      if (scrolled >= window.innerHeight) return;

      const img = heroRef.current.querySelector(
        ".hero-parallax-img"
      ) as HTMLElement | null;

      // Very subtle 0.04 factor keeps the couple firmly in frame
      if (img) {
        img.style.transform = `translateY(${scrolled * 0.04}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

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
            hero-parallax-img
            absolute
            inset-0
            h-full
            w-full
            md:left-auto
            md:right-0
            md:top-[-4%]
            md:bottom-[-4%]
            md:w-[62%]
            lg:w-[60%]
            xl:w-[58%]
            will-change-transform
          "
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Indian bride in crimson lehenga and groom in sherwani holding hands beneath an ornate marble pavilion at golden-hour sunset"
            fill
            priority
            sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 60vw, 62vw"
            className="object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
        </motion.div>

        {/* Cinematic gradient — solid black left → transparent → palace image
            Extended to 42% to protect text without obscuring the pavilion couple */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 15%, rgba(0,0,0,0.88) 25%, rgba(0,0,0,0.58) 36%, rgba(0,0,0,0.20) 48%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0) 68%)",
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
            max-w-[520px]
            xl:max-w-[560px]
            pl-0
            md:pl-4
          "
        >
          {/* Gold accent rule */}
          <motion.div
            className="mb-6 h-[1px] w-8 bg-[#C9A96E]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

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
              delay: 0.28,
              duration: 0.6,
            }}
          >
            CAPTURING REAL MOMENTS
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h1
            className={`
              ${playfair.className}
              font-normal
              uppercase
              tracking-[-0.02em]
              text-white
            `}
            style={{
              fontSize: "clamp(3.4rem, 5vw, 5rem)",
              lineHeight: 1.02,
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.42,
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
              mt-5
              mb-10
              leading-snug
              text-[#C9A96E]
            `}
            style={{ fontSize: "clamp(2rem, 2.8vw, 2.7rem)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.62,
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
              delay: 0.80,
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
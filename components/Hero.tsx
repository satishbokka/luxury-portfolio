"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

export function Hero() {
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
      className="relative flex h-screen min-h-[700px] max-h-[1080px] w-full items-center overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* =========================================================
          HERO IMAGE
          Right anchored — NOT full screen
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="
            hero-image
            absolute
            right-0
            top-0
            h-full
            w-full
            md:w-[67%]
            lg:w-[63%]
            xl:w-[60%]
            will-change-transform
          "
          initial={{ opacity: 0, scale: 1.025 }}
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
            sizes="(max-width: 768px) 100vw, 60vw"
            className="
              object-cover
              object-[70%_45%]
              md:object-[72%_45%]
              lg:object-[74%_45%]
              brightness-[1.08]
              contrast-[1.03]
              saturate-[1.02]
            "
          />
        </motion.div>

        {/* =======================================================
            CINEMATIC IMAGE BLEND
            Black on left → transparent toward bride
            ======================================================= */}

        <div
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 16%, rgba(0,0,0,0.88) 27%, rgba(0,0,0,0.55) 39%, rgba(0,0,0,0.18) 52%, rgba(0,0,0,0) 67%)",
          }}
        />

        {/* Very subtle right-side vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
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

        {/* =======================================================
            MOBILE
            ======================================================= */}

        <div
          className="pointer-events-none absolute inset-0 z-10 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,0.98) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTENT
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
            mt-8
            max-w-[580px]
            pl-0
            sm:pl-2
            md:mt-0
            md:pl-4
          "
        >
          {/* =====================================================
              LABEL
              ===================================================== */}

          <motion.span
            className="
              mb-4
              block
              text-[0.6875rem]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#C9A96E]
              sm:text-xs
              md:mb-5
            "
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            CAPTURING REAL MOMENTS
          </motion.span>

          {/* =====================================================
              MAIN HEADING
              ===================================================== */}

          <motion.h1
            className={`
              ${playfair.className}
              text-4xl
              font-normal
              uppercase
              leading-[1.04]
              tracking-[-0.02em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[4.55rem]
              xl:text-[4.9rem]
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            TIMELESS
            <br />
            MEMORIES
          </motion.h1>

          {/* =====================================================
              SCRIPT TAGLINE
              ===================================================== */}

          <motion.p
            className={`
              ${greatVibes.className}
              mt-3
              mb-8
              block
              text-2xl
              leading-snug
              text-[#C9A96E]
              sm:text-3xl
              md:mt-4
              md:mb-10
              md:text-4xl
              lg:text-[2.65rem]
            `}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >
            You live. We capture.
          </motion.p>

          {/* =====================================================
              CTA
              ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
          >
            <Button
              href="/portfolio"
              className="
                border
                border-[#C9A96E]
                bg-transparent
                px-7
                py-3
                text-[0.6875rem]
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
                md:px-9
                md:py-3.5
                md:text-[0.72rem]
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
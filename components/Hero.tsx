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
      className="relative flex h-[100svh] min-h-[720px] w-full overflow-hidden bg-black md:h-screen md:min-h-[700px] md:max-h-[1080px] md:items-center"
      aria-label="Hero"
    >
      {/* =========================================================
          HERO PHOTOGRAPH — SINGLE CONTINUOUS CANVAS
          Mobile: Full viewport (100svh) with art-directed 58% 32% crop
          Desktop: Right anchored full height (md:w-[67%] lg:w-[63%] xl:w-[60%])
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
            sizes="(max-width: 768px) 100vw, 60vw"
            className="
              object-cover
              object-[58%_32%]
              md:object-[72%_45%]
              lg:object-[74%_45%]
              brightness-[1.05]
              contrast-[1.03]
              saturate-[1.02]
            "
          />
        </motion.div>

        {/* =======================================================
            CINEMATIC GRADIENT — MOBILE ONLY
            Light, controlled vertical & horizontal gradients protecting text
            while keeping the bride naturally illuminated.
            ======================================================= */}

        {/* Mobile vertical cinematic gradient */}
        <div
          className="pointer-events-none absolute inset-0 z-10 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.60) 72%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Mobile horizontal text readability gradient */}
        <div
          className="pointer-events-none absolute inset-0 z-10 md:hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
          }}
        />

        {/* =======================================================
            CINEMATIC IMAGE BLEND — DESKTOP ONLY
            Black on left → transparent toward bride
            ======================================================= */}

        <div
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 16%, rgba(0,0,0,0.88) 27%, rgba(0,0,0,0.55) 39%, rgba(0,0,0,0.18) 52%, rgba(0,0,0,0) 67%)",
          }}
        />

        {/* Very subtle right-side vignette (Desktop) */}
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.12), transparent 25%)",
          }}
        />

        {/* Top cinematic fade (Desktop) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden md:block h-28"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), transparent)",
          }}
        />

        {/* Bottom cinematic fade (Desktop) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden md:block h-28"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTENT — EDITORIAL OVERLAY
          Mobile: Lower-left overlay (bottom ~38% of screen)
          Desktop: Vertically centered editorial column
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
          items-end
          md:items-center
          px-6
          sm:px-10
          lg:px-16
          pb-[55px]
          sm:pb-[72px]
          md:pb-0
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
          {/* =====================================================
              LABEL
              ===================================================== */}

          <motion.span
            className="
              mb-[18px]
              block
              text-[0.625rem]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#C9A96E]
              sm:text-xs
              md:mb-5
              md:tracking-[0.3em]
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

          {/* =====================================================
              MAIN HEADING
              ===================================================== */}

          <motion.h1
            className={`
              ${playfair.className}
              mb-[10px]
              text-[clamp(3rem,12vw,3.7rem)]
              font-normal
              uppercase
              leading-[0.98]
              tracking-[-0.02em]
              text-white
              sm:text-5xl
              sm:leading-[1.02]
              md:mb-0
              md:text-6xl
              md:leading-[1.04]
              lg:text-[4.55rem]
              xl:text-[4.9rem]
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

          {/* =====================================================
              SCRIPT TAGLINE
              ===================================================== */}

          <motion.p
            className={`
              ${greatVibes.className}
              mb-[28px]
              sm:mb-[32px]
              block
              text-[clamp(1.85rem,7.5vw,2.35rem)]
              leading-snug
              text-[#C9A96E]
              sm:text-3xl
              md:mt-4
              md:mb-10
              md:text-4xl
              lg:text-[2.65rem]
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

          {/* =====================================================
              CTA
              ===================================================== */}

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
                px-7
                py-[13px]
                text-[0.625rem]
                font-medium
                uppercase
                tracking-[0.22em]
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
                md:tracking-[0.25em]
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
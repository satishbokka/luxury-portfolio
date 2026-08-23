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
      className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-end pb-7 pt-20 px-6 sm:pb-10 sm:px-8 md:h-screen md:min-h-[700px] md:max-h-[1080px] md:flex-row md:items-center md:py-0 md:px-10 lg:px-16 overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* =========================================================
          HERO IMAGE
          Mobile: Positioned in upper viewport (h-[60svh]) to prevent 2x zoom on landscape photo
          Desktop: Right anchored full height (md:h-full md:w-[67%] lg:w-[63%] xl:w-[60%])
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="
            hero-image
            absolute
            right-0
            top-0
            h-[60svh]
            min-h-[380px]
            w-full
            md:h-full
            md:w-[67%]
            lg:w-[63%]
            xl:w-[60%]
            will-change-transform
          "
          initial={{ opacity: 0, scale: 1.02 }}
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
              object-[50%_20%]
              sm:object-[50%_25%]
              md:object-[72%_45%]
              lg:object-[74%_45%]
              brightness-[1.06]
              contrast-[1.03]
              saturate-[1.02]
            "
          />

          {/* Mobile bottom fade directly inside image container to blend into black page bg */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-44 z-10 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.92) 85%, black 100%)",
            }}
          />

          {/* Mobile top fade for header integration */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 z-10 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* =======================================================
            CINEMATIC IMAGE BLEND — DESKTOP
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
          HERO CONTENT
          Mobile: Positioned in lower dark area below bride portrait
          Desktop: Vertically centered editorial column
          ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-[1400px]
          items-center
          px-0
        "
      >
        <div
          className="
            w-full
            max-w-[580px]
            pl-0
            sm:pl-2
            md:pl-4
          "
        >
          {/* =====================================================
              LABEL
              ===================================================== */}

          <motion.span
            className="
              mb-2
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
              text-[clamp(2.65rem,11vw,3.5rem)]
              font-normal
              uppercase
              leading-[1.0]
              tracking-[-0.02em]
              text-white
              sm:text-5xl
              sm:leading-[1.02]
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
              mt-1.5
              mb-5
              sm:mt-2.5
              sm:mb-7
              block
              text-[clamp(1.75rem,7vw,2.25rem)]
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
                px-6
                py-3
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
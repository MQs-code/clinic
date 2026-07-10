"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxText({ children, direction = "left" }) {
  const { scrollYProgress } = useScroll();

  // We use scroll position to subtly shift the track,
  // but the constant movement is handled by CSS.
  const xShift = useTransform(
    scrollYProgress,
    [0, 1],
    [0, direction === "left" ? -200 : 200],
  );

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-2 select-none">
      <motion.div
        style={{ x: xShift }}
        className={`flex whitespace-nowrap gap-10 font-black uppercase will-change-transform ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {/* Render multiple times to ensure seamless loop */}
        {[...Array(6)].map((_, i) => (
          <span key={i} className="block">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function KineticIntroduction() {
  return (
    <main className="bg-black border-t border-white/20 relative w-full overflow-hidden">
      <section className="relative min-h-[10vh] flex flex-col justify-center items-center ">
        {/* Static Glow - No blur animation to save GPU memory */}
        <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="flex flex-col gap-1 md:gap-2 w-full z-10">
          <ParallaxText direction="left">
            <span className="italic text-[14vw] md:text-[7vw] font-outfit text-white/40 tracking-tighter leading-[0.85]">
              AESTHTIC HUB
            </span>
            <span className="font-outline-2 ml-4 text-[14vw] md:text-[7vw] tracking-tighter leading-[0.85]">
              {"   "}SARGODHA
            </span>
          </ParallaxText>

          <ParallaxText direction="right">
            <span className="text-neutral-300 text-[14vw] md:text-[7vw] tracking-tighter leading-[0.85]">
              SKIN • LASER • AESTHETICS • ANTI-AGING
            </span>
          </ParallaxText>
        </div>
      </section>

      <style jsx global>{`
        .font-outline-2 {
          -webkit-text-stroke: 2px #FFAA00;
          color: transparent;
        }

        /* High-performance CSS marquee */
        .animate-marquee-left {
          animation: marquee-l 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-r 30s linear infinite;
        }

        @keyframes marquee-l {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-r {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        /* Disable animations if user has "Reduce Motion" enabled */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

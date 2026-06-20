"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=90",
    label: "Weddings",
    line1: "Crafting Moments",
    line2: "That Last a Lifetime",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=90",
    label: "Corporate Events",
    line1: "Where Vision",
    line2: "Meets Precision",
  },
  {
    src: "/images/stagedecorImg 3.jpg",
    label: "Stage & Decor",
    line1: "Every Detail",
    line2: "Tells Your Story",
  },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ["0%", "22%"]);
  const textY = useTransform(scrollY, [0, 700], ["0%", "14%"]);
  const fadeOut = useTransform(scrollY, [0, 350], [1, 0]);

  const advance = (next: number) => {
    setFading(true);
    setTimeout(() => {
      setCur(next);
      setFading(false);
    }, 650);
  };

  useEffect(() => {
    timer.current = setInterval(() => advance((cur + 1) % SLIDES.length), 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cur]);

  const s = SLIDES[cur];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen min-h-[620px] max-h-[980px] overflow-hidden bg-ink"
    >
      {/* BG image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src={s.src}
            alt={s.label}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 overlay-hero" />

      {/* Content — centered like reference image */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity: fadeOut }}
      >
        {/* Eyebrow */}
        <motion.p
          key={`ey-${cur}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/90 text-[0.65rem] tracking-[0.28em] uppercase font-body font-semibold mb-6"
        >
          {s.label}
        </motion.p>

        {/* Main headline — script style like reference */}
        <motion.h1
          key={`h1-${cur}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="text-white leading-[1.05] mb-2"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(3.2rem,8vw,7rem)",
            textShadow: "0 2px 32px rgba(0,0,0,0.55)",
          }}
        >
          {s.line1}
        </motion.h1>

        <motion.h1
          key={`h2-${cur}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="text-white leading-[1.05] mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(3.2rem,8vw,7rem)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
            textShadow: "0 2px 24px rgba(0,0,0,0.3)",
          }}
        >
          {s.line2}
        </motion.h1>

        {/* Sub */}
        <motion.p
          key={`sub-${cur}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/90 font-body text-base tracking-wide mb-10 max-w-md"
        >
          Where your dream events unfold
        </motion.p>

        {/* CTA — like reference: single centered light button */}
        <motion.div
          key={`cta-${cur}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-hero"
          >
            Plan Your Event
          </button>
          <button
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline-white-hero"
          >
            View Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Slide dots */}
      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex gap-2"
        style={{ opacity: fadeOut }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => advance(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${i === cur ? "w-7 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"}`}
          />
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-1.5"
        style={{ opacity: fadeOut }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-body text-white/40 text-[9px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown size={13} className="text-white/40" />
      </motion.div>

      <style>{`
        .btn-outline-white-hero {
          display:inline-flex; align-items:center; justify-content:center;
          border:1.5px solid rgba(255,255,255,0.5); color:rgba(255,255,255,0.85);
          background:transparent;
          font-family:var(--font-cormorant); font-style:italic; font-weight:600; font-size:1.05rem;
          letter-spacing:0.06em; padding:13px 42px;
          transition:all 0.3s ease; cursor:pointer;
        }
        .btn-outline-white-hero:hover { background:rgba(255,255,255,0.12); color:#fff; }
      `}</style>
    </section>
  );
}

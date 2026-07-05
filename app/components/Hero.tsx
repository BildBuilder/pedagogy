"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink from "./TransitionLink";

gsap.registerPlugin(ScrollTrigger);

/* ── Word clip reveal ──────────────────────────────────────────────────────── */
function WordReveal({
  words,
  delay = 0,
  gold = false,
}: {
  words: string[];
  delay?: number;
  gold?: boolean;
}) {
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.1em] mb-[-0.1em] mr-[0.22em] last:mr-0"
        >
          <motion.span
            className={`inline-block ${gold ? "text-[#C9A84C]" : "text-[#FCF7ED]"}`}
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ── Marquee ticker ─────────────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Bildungsberatung","·","Pädagogik","·","Coaching","·","Workshops","·",
  "Konzeptarbeit","·","Medienbildung","·","Nachhaltigkeit","·","Kreatives","·",
];

function Marquee() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-t border-[#FCF7ED]/10 py-3">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`shrink-0 px-5 text-[10px] tracking-[0.22em] uppercase font-medium ${
              item === "·" ? "text-[#C9A84C]/60" : "text-[#FCF7ED]/35"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw SVG ornament on load
      if (pathRef.current) {
        const len = pathRef.current.getTotalLength();
        gsap.fromTo(
          pathRef.current,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 2.4, delay: 1.5, ease: "power3.inOut" }
        );
      }
      // Scroll progress bar
      gsap.to(scrollBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden bg-[#021e1d]">
      {/* Video */}
      <motion.div className="absolute inset-0" style={{ y: yVideo }}>
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.22]"
          src="/hero_section.mp4"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(4,71,69,0.9) 0%, rgba(4,71,69,0.72) 50%, rgba(2,30,29,0.88) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(2,20,19,0.6) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(4,71,69,0.97))" }} />
      <div className="grain" />

      {/* Global scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
        <div ref={scrollBarRef} className="h-full bg-[#C9A84C]/70 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>

      {/* Content */}
      <motion.div style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 flex-1 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-screen-xl mx-auto w-full pt-28 pb-12"
      >
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#C9A84C]/75 text-xs font-semibold tracking-[0.24em] uppercase mb-8 flex items-center gap-3"
          >
            <span className="inline-block w-5 h-px bg-[#C9A84C]/50" />
            Bildungsberatung &amp; Pädagogik
          </motion.p>

          <h1 className="leading-[1.04] mb-9 tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300, fontSize: "clamp(2.8rem, 5.5vw, 6rem)" }}
          >
            <div className="block"><WordReveal words={["Dein", "Partner"]} delay={0.3} /></div>
            <div className="block"><WordReveal words={["für", "Bildung", "&", "Pädagogik"]} delay={0.55} gold /></div>
          </h1>

          <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px w-20 bg-[#C9A84C]/50 origin-left mb-10"
          />

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <TransitionLink href="#kontakt" className="group relative px-8 py-[1rem] rounded-full overflow-hidden">
              <motion.span className="absolute inset-0 bg-[#C9A84C] rounded-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.28 }} />
              <span className="relative z-10 text-[#044745] font-semibold text-sm tracking-wide whitespace-nowrap">Kontaktiere mich</span>
            </TransitionLink>
            <TransitionLink href="#leistungen"
              className="glass px-8 py-[1rem] text-[#FCF7ED]/80 text-sm font-medium rounded-full hover:bg-[#FCF7ED]/15 hover:text-[#FCF7ED] transition-all duration-300 whitespace-nowrap"
            >
              Leistungen entdecken
            </TransitionLink>
          </motion.div>
        </div>
      </motion.div>

      {/* SVG ornament */}
      <div className="absolute bottom-20 right-10 md:right-20 w-44 h-44 pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={pathRef}
            d="M100 10 C140 10, 190 60, 190 100 C190 140, 140 190, 100 190 C60 190, 10 140, 10 100 C10 60, 60 10, 100 10 Z"
            stroke="#C9A84C" strokeWidth="0.8" fill="none"
          />
          <path d="M100 35 C128 35, 165 72, 165 100 C165 128, 128 165, 100 165 C72 165, 35 128, 35 100 C35 72, 72 35, 100 35 Z"
            stroke="#C9A84C" strokeWidth="0.4" fill="none" opacity="0.5"
          />
          <circle cx="100" cy="100" r="3.5" fill="#C9A84C" opacity="0.6" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-[#FCF7ED]/40 to-transparent"
        />
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#FCF7ED]/30">Scroll</span>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10"><Marquee /></div>
    </section>
  );
}

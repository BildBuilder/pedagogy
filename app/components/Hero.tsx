"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TransitionLink from "./TransitionLink";

/* ── Word clip reveal ──────────────────────────────────────────────────────── */
function WordReveal({
  words,
  delay = 0,
  className = "",
}: {
  words: string[];
  delay?: number;
  className?: string;
}) {
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.12em] mb-[-0.12em] mr-[0.2em] last:mr-0"
        >
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-[#FBF7EE]">

      {/* Masked photo panel */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[58%] md:block"
        style={{ clipPath: "url(#hero-wave)" }}
      >
        <motion.div className="absolute -inset-y-[8%] -left-150 right-0" style={{ y: yImage }}>
          <motion.img
            src="/hero-image.png"
            alt="Schreibtisch mit pädagogischer Fachliteratur"
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>

      {/* Handwritten note */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-[4.5%] top-[15%] z-20 hidden text-right lg:block"
        style={{ fontFamily: "var(--font-script), cursive", transform: "rotate(-3deg)" }}
      >
        <span className="block text-[2.3rem] leading-[1.3] text-[#0B3B36]/85">Lernen</span>
        <span className="block pr-2 text-[2.3rem] leading-[1.3] text-[#0B3B36]/85">Lehren</span>
        <span className="block pr-1 text-[2.3rem] leading-[1.3] text-[#0B3B36]/85">Wachsen</span>
        <svg className="ml-auto mt-1 block" width="120" height="14" viewBox="0 0 120 14" fill="none" aria-hidden>
          <motion.path
            d="M2 9C22 3 64 1 118 6"
            stroke="#C9A84C"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 2.2, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 pb-10 pt-28 sm:px-10 lg:px-[4.5rem] lg:pt-32"
      >
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-[600px]">
            <h1
              className="mb-7 tracking-[-0.01em] text-[clamp(2.9rem,6.3vw,6rem)] lg:text-[clamp(2.3rem,4.2vw,3.4rem)] xl:text-[clamp(2.6rem,5vw,4.6rem)] 2xl:text-[6rem]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 300,
                lineHeight: 1.02,
              }}
            >
              <span className="block">
                <WordReveal words={["Dein", "Partner"]} delay={0.35} className="text-[#0B4A42]" />
              </span>
              <span className="block">
                <WordReveal words={["für", "Bildung", "&"]} delay={0.5} className="text-[#C9A84C]" />
              </span>
              <span className="block">
                <WordReveal words={["Pädagogik"]} delay={0.68} className="text-[#0B4A42]" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-9 max-w-[440px] text-[1.02rem] leading-[1.75] text-[#044745]/70"
            >
              Ich begleite Lernprozesse mit Erfahrung, Struktur und kreativen Methoden – für
              nachhaltige Entwicklung in Bildung, Coaching und Workshops.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <TransitionLink
                href="#kontakt"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0B4A42] px-8 py-[1.05rem] text-sm font-medium text-[#FCF7ED] transition-colors duration-300 hover:bg-[#0f5c52]"
              >
                Kontaktiere mich
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" aria-hidden>
                  <path
                    d="M1 5h14M11.5 1 15.8 5l-4.3 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-[3px]"
                  />
                </svg>
              </TransitionLink>

              <TransitionLink
                href="#ansatz"
                className="inline-flex items-center rounded-full border border-[#0B4A42]/25 px-8 py-[1.05rem] text-sm font-medium text-[#0B4A42] transition-all duration-300 hover:border-[#0B4A42]/60 hover:bg-[#0B4A42]/[0.04]"
              >
                Mein Ansatz
              </TransitionLink>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

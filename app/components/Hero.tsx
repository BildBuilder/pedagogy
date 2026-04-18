"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Word-by-word clip reveal ─────────────────────────────────────────────── */
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
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className={`inline-block ${gold ? "text-[#C9A84C]" : "text-[#FCF7ED]"}`}
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.85, delay: delay + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen md:h-screen flex flex-col overflow-hidden bg-[#021e1d]"
    >
      {/* ── Background video ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: yVideo }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.18]"
          src="/hero_section.mp4"
        />
      </motion.div>

      {/* ── Overlay gradients ── */}
      {/* Main teal wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(4,71,69,0.88) 0%, rgba(4,71,69,0.72) 50%, rgba(2,30,29,0.82) 100%)",
        }}
      />
      {/* Bottom fade to match next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(4,71,69,0.95))",
        }}
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,20,19,0.55) 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 flex-1 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-screen-xl mx-auto w-full pt-24 pb-12"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#C9A84C]/75 text-xs font-semibold tracking-[0.22em] uppercase mb-7"
          >
            Bildungsberatung &amp; P&auml;dagogik
          </motion.p>

          {/* Headline — 2 lines */}
          <h1
            className="leading-[1.06] mb-8 tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 5.2vw, 5.8rem)",
            }}
          >
            {/* Line 1 */}
            <div className="block">
              <WordReveal words={["Dein", "Partner"]} delay={0.28} />
            </div>
            {/* Line 2 — gold */}
            <div className="block">
              <WordReveal words={["f\u00fcr", "Bildung", "&", "P\u00e4dagogik"]} delay={0.52} gold />
            </div>
          </h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px w-16 bg-[#C9A84C]/55 origin-left mb-10"
          />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a href="#kontakt" className="group relative px-8 py-[1rem] rounded-full overflow-hidden">
              <motion.span
                className="absolute inset-0 bg-[#C9A84C] rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.28 }}
              />
              <span className="relative z-10 text-[#044745] font-semibold text-sm tracking-wide whitespace-nowrap">
                Kontaktiere mich
              </span>
            </a>
            <a
              href="#leistungen"
              className="px-8 py-[1rem] border border-[#FCF7ED]/22 text-[#FCF7ED]/75 text-sm font-medium rounded-full hover:bg-[#FCF7ED]/10 hover:border-[#FCF7ED]/40 hover:text-[#FCF7ED] transition-all duration-300 whitespace-nowrap"
            >
              Leistungen entdecken
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
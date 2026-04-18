"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScroll = () => {
    const el = document.querySelector("#leistungen");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#044745] px-5 pt-24 pb-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-20 float-slow"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -right-24 w-64 h-64 rounded-full opacity-15 float-medium"
          style={{
            background: "radial-gradient(circle, #FCF7ED 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute bottom-16 left-1/4 w-48 h-48 rounded-full opacity-10 float-slow"
          style={{
            background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
            animationDelay: "3.5s",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(252,247,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(252,247,237,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
          <span className="px-4 py-1.5 rounded-full border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
            Pädagogik &amp; Bildung
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#FCF7ED] leading-tight tracking-tight mb-6"
        >
          Dein Content für{" "}
          <span className="relative inline-block">
            <span className="text-[#C9A84C]">Bildung,</span>
          </span>
          <br />
          Pädagogik &amp;{" "}
          <span className="relative">
            <span className="text-[#C9A84C]">Kreatives</span>
            {/* underline decoration */}
            <motion.svg
              viewBox="0 0 200 12"
              className="absolute -bottom-2 left-0 w-full h-3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.path
                d="M 0 8 Q 50 2 100 8 Q 150 14 200 8"
                stroke="#C9A84C"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-[#FCF7ED]/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Fundierte Didaktik und Pädagogik, die Lernprozesse nachhaltig gestaltet –
          leicht verständlich und wirkungsvoll.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#kontakt");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#C9A84C] text-[#044745] font-semibold rounded-full hover:bg-[#e0bc60] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#C9A84C]/20"
          >
            Kontaktiere mich
          </button>
          <button
            onClick={handleScroll}
            className="w-full sm:w-auto px-8 py-4 border border-[#FCF7ED]/30 text-[#FCF7ED] font-medium rounded-full hover:bg-[#FCF7ED]/10 transition-all duration-300"
          >
            Leistungen entdecken
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#FCF7ED]/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#FCF7ED]/40 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}

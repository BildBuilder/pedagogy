"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" ref={ref} className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#FCF7ED] overflow-hidden">
      {/* Subtle animated blob */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.07, 0.13, 0.07] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #044745 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.09, 0.04] }}
        transition={{ repeat: Infinity, duration: 13, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-6 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[11px] font-medium tracking-[0.22em] uppercase">
                Kontakt
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#044745] leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
              }}
            >
              Bereit, den nächsten
              Schritt zu gehen?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#044745]/65 text-base sm:text-lg leading-relaxed mb-10"
            >
              Schreib mir – ich freue mich auf deine Nachricht!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="mailto:didaktiker@gmx.de"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#044745] text-[#FCF7ED] text-sm font-medium rounded-full hover:bg-[#0a6b68] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-4 h-4">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" strokeLinecap="round" />
                </svg>
                E-Mail schreiben
              </a>

            </motion.div>
          </div>

          {/* Right: address */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 pt-12 border-t border-[#044745]/10 md:border-0 md:pt-20"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#044745]/40 mb-6"
            >
              Standort
            </motion.p>
            <address className="not-italic text-[#044745]/65 leading-8 text-sm sm:text-base">
              {[
                { text: "Helene Kleinfeld \u00b7 Didaktiker", bold: true },
                { text: "Lindenstrasse 2, Offene Werkstatt" },
                { text: "03238 Massen" },
              ].map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.55 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={line.bold ? "font-medium text-[#044745] mb-1" : ""}
                >
                  {line.text}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.79, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-5"
              >
                <a
                  href="mailto:didaktiker@gmx.de"
                  className="text-[#044745] hover:text-[#C9A84C] transition-colors underline underline-offset-2"
                >
                  didaktiker@gmx.de
                </a>
              </motion.p>
            </address>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

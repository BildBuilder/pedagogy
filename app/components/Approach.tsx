"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    key: "Strukturiertem Kompetenzaufbau",
    desc: "klar definierte Lernschritte für nachhaltigen Erfolg.",
  },
  {
    key: "Praxisnaher Anwendung",
    desc: "Lernen wird direkt in den Alltag integriert.",
  },
  {
    key: "Effizienten Methoden",
    desc: "minimaler Aufwand, maximaler Impact.",
  },
  {
    key: "Transformation durch Storytelling",
    desc: "Wissen wird emotional verankert.",
  },
];

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ansatz" ref={ref} className="py-24 md:py-36 px-5 sm:px-8 bg-[#FCF7ED] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[11px] font-medium tracking-[0.22em] uppercase">
            Mein Ansatz
          </span>
        </motion.div>

        {/* Main H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#044745] leading-tight mb-8 max-w-3xl"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
          }}
        >
          Individuelle Lösungen für
          <br />
          Bildung, Medien &amp; Performance
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#044745]/65 text-base sm:text-lg leading-relaxed max-w-2xl mb-16"
        >
          Fundierte Didaktik, Pädagogik und Medienwissenschaft machen den Unterschied.
          Ich helfe dir, Lernprozesse so zu gestalten, dass sie nachhaltig wirken, leicht
          verständlich sind und echte Transformation ermöglichen.
        </motion.p>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-[#044745]/10 mb-16 origin-left"
        />

        {/* Two-column editorial grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">

          {/* Left: sub-section heading + description */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3
              className="text-[#044745] leading-snug mb-5"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
              }}
            >
              Mein Ansatz: Der Weg der Meisterschaft
            </h3>
            <p className="text-[#044745]/65 text-sm sm:text-base leading-relaxed">
              Mein didaktisches Coaching basiert auf bewährten Prinzipien der
              Erwachsenenbildung, kombiniert mit innovativen Lernformaten.
              Der Fokus liegt auf:
            </p>
          </motion.div>

          {/* Right: pillars */}
          <div className="divide-y divide-[#044745]/8">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, x: 28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.44 + i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-start gap-4 py-4 first:pt-0 last:pb-0 group"
              >
                <motion.span
                  className="text-[#C9A84C] text-sm font-medium flex-shrink-0 mt-0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.54 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                >
                  &#10004;
                </motion.span>
                <p className="text-[#044745] text-sm sm:text-base leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                  <strong className="font-semibold">{p.key}</strong>
                   {" – "}
                  <span className="text-[#044745]/65">{p.desc}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 rounded-xl bg-[#044745]"
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              color: "#FCF7ED",
              lineHeight: 1.3,
            }}
          >
            Mein Education Consulting bringt dich voran!
          </p>
          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 px-6 py-2.5 border border-[#FCF7ED]/25 text-[#FCF7ED] text-sm rounded-full hover:bg-[#FCF7ED]/10 hover:border-[#FCF7ED]/50 transition-all duration-300 whitespace-nowrap"
          >
            Kontaktiere mich
          </button>
        </motion.div>

      </div>
    </section>
  );
}

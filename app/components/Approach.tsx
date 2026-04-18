"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: "◈",
    title: "Strukturierter Kompetenzaufbau",
    desc: "Klar definierte Lernschritte für nachhaltigen, messbaren Erfolg.",
  },
  {
    icon: "◇",
    title: "Praxisnahe Anwendung",
    desc: "Lernen wird direkt in den Alltag integriert – sofort anwendbar.",
  },
  {
    icon: "◉",
    title: "Effiziente Methoden",
    desc: "Minimaler Aufwand, maximaler Impact – Zeit ist wertvoll.",
  },
  {
    icon: "◎",
    title: "Transformation durch Storytelling",
    desc: "Wissen wird emotional verankert und langfristig behalten.",
  },
];

import type { Variants } from "framer-motion";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay } as never,
  },
});

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ansatz" ref={ref} className="py-20 md:py-32 px-5 bg-[#FCF7ED] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
            Mein Ansatz
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: text block */}
          <div>
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#044745] leading-tight mb-6"
            >
              Der Weg der{" "}
              <span className="relative">
                Meisterschaft
                <svg viewBox="0 0 160 10" className="absolute -bottom-1.5 left-0 w-full h-2.5">
                  <path
                    d="M 0 6 Q 40 1 80 6 Q 120 11 160 6"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#044745]/75 text-lg leading-relaxed mb-8"
            >
              Mein didaktisches Coaching basiert auf bewährten Prinzipien der
              Erwachsenenbildung, kombiniert mit innovativen Lernformaten. Ich helfe dir,
              Lernprozesse so zu gestalten, dass sie nachhaltig wirken, leicht
              verständlich sind und echte Transformation ermöglichen.
            </motion.p>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-[#044745] font-semibold text-lg mb-2">
                Individuelle Lösungen für
              </p>
              <div className="flex flex-wrap gap-2">
                {["Bildung", "Medien", "Performance", "Coaching"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#044745]/8 text-[#044745] text-sm font-medium border border-[#044745]/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp(0.15 + i * 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group p-5 rounded-2xl border border-[#044745]/12 hover:border-[#044745]/30 bg-white hover:bg-[#044745] transition-all duration-400 cursor-default"
              >
                <span className="text-2xl text-[#C9A84C] mb-3 block group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </span>
                <h3 className="font-semibold text-[#044745] group-hover:text-[#FCF7ED] text-sm mb-1.5 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-[#044745]/60 group-hover:text-[#FCF7ED]/70 text-xs leading-relaxed transition-colors duration-300">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

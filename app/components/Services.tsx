"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Vertrauensvoller Partner",
    short: "Ich bin an deiner Seite",
    desc: "Ich coache dich und stehe dir als vertrauensvoller Partner zur Seite, der dich mit Rat und Tat unterstützt – beruflich und persönlich.",
    tags: ["Coaching", "Begleitung"],
    color: "from-[#044745] to-[#0a6b68]",
  },
  {
    number: "02",
    title: "Einzelcoaching",
    short: "Entfalte dein Potenzial",
    desc: "Du fühlst dich manchmal unsicher oder blockiert? Im Coaching arbeiten wir daran, deine Stärken zu erkennen, Ängste abzubauen und klare Strategien für deinen Alltag zu entwickeln.",
    tags: ["1-zu-1", "Persönlichkeit", "Strategie"],
    color: "from-[#1a5c5a] to-[#044745]",
  },
  {
    number: "03",
    title: "Kreative Workshops",
    short: "Inspirierende Impulse",
    desc: "Meine Workshops sind praxisnah, motivierend und genau auf deine Bedürfnisse zugeschnitten. Themen: Nachhaltigkeit, offene Arbeit, Medien, Partizipation und mehr.",
    tags: ["Gruppen", "Praxis", "Innovation"],
    color: "from-[#2d6b43] to-[#1a5c5a]",
  },
  {
    number: "04",
    title: "Konzeptarbeit",
    short: "Von der Idee zur Umsetzung",
    desc: "Ein gutes Konzept ist der Anfang von allem! Ich helfe dir, klare und umsetzbare Ideen zu entwickeln – z. B. Gewaltschutzkonzepte oder pädagogische Leitlinien.",
    tags: ["Planung", "Struktur", "Kita"],
    color: "from-[#5a3d1a] to-[#7a5a2a]",
  },
  {
    number: "05",
    title: "Raumgestaltung",
    short: "Leidenschaft fürs Ausstatten",
    desc: "Du planst einen neuen Raum oder eine Kita? Mit ästhetischem und pädagogischem Feingefühl gestalte ich Räume, in denen Kinder sich wohlfühlen und optimal lernen können.",
    tags: ["Kita", "Design", "Pädagogik"],
    color: "from-[#3d1a5a] to-[#5a3d7a]",
  },
  {
    number: "06",
    title: "Berufliche Weiterentwicklung",
    short: "Wachse als Führungskraft",
    desc: "Ob du am Anfang deiner Leitungstätigkeit stehst oder bereits Erfahrung hast – ich begleite dich auf deinem Weg zur erfolgreichen Führungskraft im pädagogischen Bereich.",
    tags: ["Leitung", "Entwicklung", "Führung"],
    color: "from-[#1a2a5a] to-[#2a3d7a]",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: "easeOut" }}
      onClick={() => setExpanded((e) => !e)}
      className="service-card group relative bg-white rounded-2xl border border-[#044745]/10 p-6 cursor-pointer overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl font-bold text-[#044745]/15 group-hover:text-[#FCF7ED]/20 transition-colors duration-300 font-mono">
            {service.number}
          </span>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            className="w-7 h-7 rounded-full border border-[#044745]/20 group-hover:border-[#FCF7ED]/30 flex items-center justify-center text-[#044745] group-hover:text-[#FCF7ED] transition-colors duration-300 text-lg font-light"
          >
            +
          </motion.span>
        </div>

        <h3 className="font-bold text-[#044745] group-hover:text-[#FCF7ED] text-lg mb-1 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-[#C9A84C] text-sm font-medium mb-3">{service.short}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-[#044745]/70 group-hover:text-[#FCF7ED]/80 text-sm leading-relaxed mb-4 transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-[#044745]/8 group-hover:bg-[#FCF7ED]/15 text-[#044745] group-hover:text-[#FCF7ED] text-xs transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="py-20 md:py-32 px-5 bg-[#f5ede0] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
              Leistungen
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#044745] leading-tight mb-4 max-w-2xl"
          >
            Was ich für dich tun kann
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#044745]/65 text-lg max-w-xl"
          >
            Klick auf eine Karte, um mehr zu erfahren.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

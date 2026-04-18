"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Service = {
  number: string;
  title: string;
  paragraphs: string[];
  bulletTitle?: string;
  bullets?: string[];
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Vertrauensvoller Partner",
    paragraphs: [
      "Ich coache dich und stehe dir als vertrauensvoller Partner zur Seite, der dich mit Rat und Tat unterstützt.",
    ],
  },
  {
    number: "02",
    title: "Einzelcoaching für Pädagogen",
    paragraphs: [
      "Du fühlst dich manchmal unsicher, überfordert oder blockiert? Fragen wie \u201EWie finde ich meinen Platz im Team?\u201C oder \u201EWie gehe ich mit Verantwortung um?\u201C halten dich zurück?",
      "Im Coaching arbeiten wir daran, deine Stärken zu erkennen, Ängste abzubauen und klare Strategien für deinen Alltag zu entwickeln. Gemeinsam finden wir Wege, wie du selbstbewusst, ausgeglichen und mit neuer Energie handeln kannst – beruflich und persönlich.",
      "Starte jetzt und entfalte dein volles Potenzial!",
    ],
  },
  {
    number: "03",
    title: "Ideengeber und richtig tolle Workshops",
    paragraphs: [
      "Du suchst neue Ideen und frische Impulse für deinen Arbeitsalltag? Als Ideengeber unterstütze ich dich dabei, innovative Konzepte zu entwickeln und neue Ansätze auszuprobieren. Meine Workshops sind praxisnah, motivierend und genau auf deine Bedürfnisse zugeschnitten.",
      "Gemeinsam schaffen wir eine Atmosphäre, in der du und dein Team wachsen, lernen und mit Freude neue Wege gehen können. Lass uns zusammen kreative Lösungen finden, die wirklich etwas bewegen!",
    ],
    bulletTitle: "Schwerpunkte meiner Workshops umfassen:",
    bullets: [
      "Alles rund um die Pädagogik zum Thema Nachhaltigkeit",
      "Projekte für Ateliers",
      "Offene Arbeit",
      "Raum- und Nutzungsstrukturen",
      "Optimierung der Arbeitsabläufe",
      "Partizipation im Alltag",
      "Gefühle und Herausforderungen",
      "Konflikte unter Kindern im Alltag",
      "Medien",
    ],
  },
  {
    number: "04",
    title: "Konzeptarbeit",
    paragraphs: [
      "Ein gutes Konzept ist der Anfang von allem! Ich helfe dir, klare und umsetzbare Ideen für dein Business und deine Ideen zu entwickeln. Gemeinsam planen wir den Prozess – für ein Ergebnis, das wirkt.",
    ],
  },
  {
    number: "05",
    title: "Leidenschaft fürs Ausstatten",
    paragraphs: [
      "Du planst einen neuen Raum oder eine gesamte Kita auszustatten? Ich begleite dich von Anfang an im Beratungsprozess und treffe Absprachen mit dem Architekten. Mit einem ästhetischen und pädagogischen Feingefühl gestalte ich Räume, in denen Kinder sich wohlfühlen und optimal lernen können. Deine Wünsche als Träger oder Kita-Leitung stehen dabei im Mittelpunkt.",
      "So etwas kann sehr zeitaufwendig sein und man braucht viel pädagogisches Geschick, um die Fallstricke zu umgehen und nicht später das Nachsehen zu haben. Im gemeinsamen Beratungsprozess kann ich dich bereits jetzt schon darauf hinweisen und dir tolle Endergebnisse versprechen, die nicht aussehen wie aus dem Katalog, sondern genau das sind, was du dir wünschst oder brauchst.",
    ],
  },
  {
    number: "06",
    title: "Berufliche Weiterentwicklung im pädagogischen Bereich",
    paragraphs: [
      "Erlebe maßgeschneidertes Coaching, das dich in deiner beruflichen Weiterentwicklung unterstützt. Ob du gerade am Anfang deiner Leitungstätigkeit stehst oder bereits Erfahrungen gesammelt hast – ich begleite dich auf deinem Weg zu einer erfolgreichen Führungskraft.",
      "Leitungsaufgaben bringen zahlreiche Herausforderungen mit sich. Gemeinsam finden wir Wege, wie du schwierige Situationen souverän meistern und dein Team erfolgreich führen kannst.",
      "Eine der wichtigsten Fragen, die du dir stellen solltest, ist: Kann ich leiten und möchte ich leiten? In meinen Coachings gehen wir dieser Frage auf den Grund und entwickeln gemeinsam dein persönliches Führungspotential.",
    ],
  },
];

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-b border-[#044745]/10"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-6 text-left group hover:pl-2 transition-all duration-300"
      >
        <div className="flex items-center gap-5 sm:gap-8 flex-1 min-w-0">
          <span className="text-[#C9A84C] text-xs font-mono tracking-[0.15em] flex-shrink-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 + 0.3 }}
            >
              {service.number}
            </motion.span>
          </span>
          <span
            className="text-[#044745] group-hover:text-[#0a6b68] transition-colors duration-300 leading-snug"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)",
            }}
          >
            {service.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.28 }}
          className="ml-5 flex-shrink-0 w-7 h-7 rounded-full border border-[#044745]/18 flex items-center justify-center text-[#044745]/50 text-base leading-none group-hover:border-[#044745]/35 transition-colors duration-300"
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-0 sm:pl-[4.5rem] space-y-4 pr-10">
              {service.paragraphs.map((p, i) => (
                <p key={i} className="text-[#044745]/65 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}
              {service.bulletTitle && (
                <p className="text-[#044745] text-sm sm:text-base font-medium">
                  {service.bulletTitle}
                </p>
              )}
              {service.bullets && (
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[#044745]/65 text-sm sm:text-base">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0 text-xs">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="relative py-24 md:py-36 px-5 sm:px-8 bg-[#f5ede0] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-6 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[11px] font-medium tracking-[0.22em] uppercase">
              Leistungen
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[#044745] leading-tight max-w-md"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
            }}
          >
            Was ich für dich tun kann
          </motion.h2>
        </div>

        {/* Accordion list */}
        <div className="border-t border-[#044745]/10">
          {SERVICES.map((s, i) => (
            <ServiceItem key={s.number} service={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

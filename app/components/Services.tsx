"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  number: string;
  title: string;
  paragraphs: string[];
  bulletTitle?: string;
  bullets?: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Vertrauensvoller Partner",
    paragraphs: ["Ich coache dich und stehe dir als vertrauensvoller Partner zur Seite, der dich mit Rat und Tat unterstützt."],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Einzelcoaching für Pädagogen",
    paragraphs: [
      "Du fühlst dich manchmal unsicher, überfordert oder blockiert? Fragen wie \u201EWie finde ich meinen Platz im Team?\u201C halten dich zurück?",
      "Im Coaching arbeiten wir daran, deine Stärken zu erkennen, Ängste abzubauen und klare Strategien zu entwickeln.",
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Ideengeber und richtig tolle Workshops",
    paragraphs: ["Du suchst neue Ideen und frische Impulse? Als Ideengeber unterstütze ich dich bei innovativen Konzepten. Meine Workshops sind praxisnah und genau auf deine Bedürfnisse zugeschnitten."],
    bulletTitle: "Schwerpunkte meiner Workshops:",
    bullets: ["Pädagogik zum Thema Nachhaltigkeit","Projekte für Ateliers","Offene Arbeit","Raum- und Nutzungsstrukturen","Partizipation im Alltag","Medien"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Konzeptarbeit",
    paragraphs: ["Ein gutes Konzept ist der Anfang von allem! Ich helfe dir, klare und umsetzbare Ideen für dein Business zu entwickeln."],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Leidenschaft fürs Ausstatten",
    paragraphs: ["Du planst einen neuen Raum oder eine gesamte Kita auszustatten? Ich begleite dich von Anfang an und gestalte Räume, in denen Kinder sich wohlfühlen."],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Berufliche Weiterentwicklung",
    paragraphs: ["Erlebe maßgeschneidertes Coaching für deine berufliche Weiterentwicklung. Ob am Anfang deiner Leitungstätigkeit oder mit Erfahrung – ich begleite dich zum Erfolg."],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop",
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
        className="w-full flex items-center gap-5 py-6 text-left group hover:pl-2 transition-all duration-300"
      >
        {/* Thumbnail */}
        <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 hidden sm:block">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="56px"
          />
          <div className="absolute inset-0 bg-[#044745]/30 group-hover:bg-[#044745]/10 transition-colors duration-300" />
        </div>

        <div className="flex items-center gap-5 flex-1 min-w-0">
          <span className="text-[#C9A84C] text-xs font-mono tracking-[0.15em] flex-shrink-0">
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 + 0.3 }}>
              {service.number}
            </motion.span>
          </span>
          <span className="text-[#044745] group-hover:text-[#0a6b68] transition-colors duration-300 leading-snug"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500, fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)" }}>
            {service.title}
          </span>
        </div>

        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.28 }}
          className="ml-5 flex-shrink-0 w-7 h-7 rounded-full border border-[#044745]/18 flex items-center justify-center text-[#044745]/50 text-base leading-none group-hover:border-[#044745]/35 group-hover:text-[#044745]/80 transition-colors duration-300"
        >+</motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-[1fr_200px] gap-8 pb-8 pl-0 sm:pl-[4.5rem]">
              <div className="space-y-3">
                {service.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#044745]/70 text-sm sm:text-base leading-relaxed">{p}</p>
                ))}
                {service.bulletTitle && (
                  <>
                    <p className="text-[#044745]/80 font-medium text-sm mt-4">{service.bulletTitle}</p>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                      {service.bullets?.map((b, i) => (
                        <li key={i} className="text-[#044745]/60 text-xs flex items-start gap-2">
                          <span className="text-[#C9A84C] mt-1 flex-shrink-0">–</span>{b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              {/* Expanded image */}
              <div className="relative aspect-[16/9] sm:aspect-[3/4] rounded-xl overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 200px" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky section header
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=68",
        end: "bottom bottom",
        pin: headerRef.current,
        pinSpacing: false,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="leistungen" ref={sectionRef} className="bg-[#FCF7ED] overflow-hidden relative">
      {/* Sticky header */}
      <div ref={headerRef} className="relative z-10 bg-[#FCF7ED]/90 backdrop-blur-sm border-b border-[#044745]/5 px-5 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }} className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[11px] font-medium tracking-[0.22em] uppercase">Leistungen</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="text-[#044745] leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Was ich für dich tue
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-[#044745]/50 text-sm max-w-xs leading-relaxed hidden md:block">
            Sechs Leistungsbereiche für nachhaltige Bildung, Beratung und Entwicklung.
          </motion.p>
        </div>
      </div>

      {/* Service list */}
      <div className="px-5 sm:px-8 py-10 bg-[#FCF7ED]">
        <div className="max-w-6xl mx-auto">
          {SERVICES.map((s, i) => (
            <ServiceItem key={s.number} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  { key: "Strukturiertem Kompetenzaufbau", desc: "klar definierte Lernschritte für nachhaltigen Erfolg." },
  { key: "Praxisnaher Anwendung", desc: "Lernen wird direkt in den Alltag integriert." },
  { key: "Effizienten Methoden", desc: "minimaler Aufwand, maximaler Impact." },
  { key: "Transformation durch Storytelling", desc: "Wissen wird emotional verankert." },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image clip-path reveal on scroll
      if (imgRef.current && imgInnerRef.current) {
        gsap.fromTo(
          imgRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: { trigger: imgRef.current, start: "top 75%", once: true },
          }
        );
        // Subtle inner parallax
        gsap.to(imgInnerRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      }

      // Stagger pillars
      gsap.from(".approach-pillar", {
        opacity: 0,
        x: 36,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".approach-pillars", start: "top 78%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ansatz"
      ref={sectionRef}
      className="py-24 md:py-36 px-5 sm:px-8 bg-[#FCF7ED] overflow-hidden relative"
    >
      {/* Animated orb background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] opacity-[0.08] orb-1 pointer-events-none"
        style={{ background: "radial-gradient(circle, #044745, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-6 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[11px] font-medium tracking-[0.22em] uppercase">Mein Ansatz</span>
        </motion.div>

        {/* Main H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#044745] leading-tight mb-8 max-w-3xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300, fontSize: "clamp(2rem, 5.5vw, 3.75rem)" }}
        >
          Individuelle Lösungen für
          <br />
          <em>Bildung, Medien &amp; Performance</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#044745]/65 text-base sm:text-lg leading-relaxed max-w-2xl mb-16"
        >
          Fundierte Didaktik, Pädagogik und Medienwissenschaft machen den Unterschied.
          Ich helfe dir, Lernprozesse so zu gestalten, dass sie nachhaltig wirken.
        </motion.p>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-[#044745]/10 mb-16 origin-left"
        />

        {/* Two-column: text left, image right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#044745] leading-snug mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500, fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
            >
              Der Weg der Meisterschaft
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#044745]/65 text-sm sm:text-base leading-relaxed mb-8"
            >
              Mein didaktisches Coaching basiert auf bewährten Prinzipien der
              Erwachsenenbildung, kombiniert mit innovativen Lernformaten. Der Fokus liegt auf:
            </motion.p>

            {/* Pillars */}
            <div className="approach-pillars divide-y divide-[#044745]/8">
              {PILLARS.map((p, i) => (
                <div key={p.key} className="approach-pillar flex items-start gap-4 py-4 first:pt-0 last:pb-0 group">
                  <span className="text-[#C9A84C] text-xs font-mono tracking-[0.1em] flex-shrink-0 mt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[#044745] font-medium text-sm mb-1 group-hover:text-[#0a6b68] transition-colors duration-200">{p.key}</p>
                    <p className="text-[#044745]/55 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image with clip-path reveal */}
          <div ref={imgRef} className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <div ref={imgInnerRef} className="absolute inset-[-15%]">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=85&auto=format&fit=crop"
                alt="Pädagogin bei der Arbeit – Lernen und Lehren"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            {/* Glass caption */}
            <div className="absolute bottom-4 left-4 right-4 glass-teal rounded-xl p-4">
              <p className="text-[#FCF7ED]/90 text-xs font-medium tracking-wide mb-1">Fundierte Methodik</p>
              <p className="text-[#FCF7ED]/55 text-[11px] leading-relaxed">
                Pädagogik trifft auf Praxis – für nachhaltigen Lernerfolg.
              </p>
            </div>
          </div>
        </div>

        {/* SVG path ornament */}
        <div className="flex items-center justify-center py-4">
          <svg width="320" height="32" viewBox="0 0 320 32" fill="none" className="opacity-20">
            <path
              d="M0 16 Q80 0 160 16 Q240 32 320 16"
              stroke="#C9A84C"
              strokeWidth="1"
              fill="none"
              className="svg-draw visible"
              style={{ strokeDasharray: 400, strokeDashoffset: 0 }}
            />
            <circle cx="160" cy="16" r="3" fill="#C9A84C" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

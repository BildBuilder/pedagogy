"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("didaktiker@gmx.de").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="kontakt"
      ref={ref}
      className="relative py-24 md:py-36 px-5 bg-[#FCF7ED] overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-8 float-slow"
          style={{ background: "radial-gradient(circle, #044745 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-10 -left-16 w-52 h-52 rounded-full opacity-6 float-medium"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]">
            Kontakt
          </span>
          <div className="w-8 h-px bg-[#C9A84C]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#044745] leading-tight mb-5"
        >
          Bereit, den nächsten{" "}
          <span className="text-shimmer">Schritt zu gehen?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-[#044745]/70 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Mein Education Consulting bringt dich voran. Schreib mir einfach – ich freue
          mich auf deine Nachricht!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:didaktiker@gmx.de"
            className="w-full sm:w-auto px-8 py-4 bg-[#044745] text-[#FCF7ED] font-semibold rounded-full hover:bg-[#0a6b68] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#044745]/20 flex items-center justify-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-4 h-4"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            E-Mail schreiben
          </a>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-8 py-4 border border-[#044745]/25 text-[#044745] font-medium rounded-full hover:bg-[#044745]/5 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-4 h-4 group-hover:scale-110 transition-transform"
            >
              {copied ? (
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <>
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </>
              )}
            </svg>
            {copied ? "Kopiert!" : "didaktiker@gmx.de"}
          </button>
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-16 p-6 md:p-8 rounded-2xl bg-[#044745]/5 border border-[#044745]/10 text-left max-w-2xl mx-auto"
        >
          <p className="font-semibold text-[#044745] mb-4 text-sm tracking-wide uppercase">
            Standort
          </p>
          <address className="not-italic text-[#044745]/75 text-sm leading-7 space-y-0.5">
            <p>Helene Kleinfeld · Didaktiker</p>
            <p>Lindenstrasse 2, Offene Werkstatt</p>
            <p>03238 Massen</p>
            <p className="mt-3">
              <a
                href="mailto:didaktiker@gmx.de"
                className="text-[#044745] font-medium hover:text-[#C9A84C] transition-colors underline underline-offset-2"
              >
                didaktiker@gmx.de
              </a>
            </p>
          </address>
        </motion.div>
      </div>
    </section>
  );
}

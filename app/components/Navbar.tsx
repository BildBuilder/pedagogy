"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_SECTIONS = [
  { label: "Ansatz", id: "ansatz" },
  { label: "Leistungen", id: "leistungen" },
  { label: "Kontakt", id: "kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FCF7ED]/96 backdrop-blur-sm border-b border-[#044745]/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-full bg-[#044745] text-[#FCF7ED] text-xs font-bold flex items-center justify-center tracking-tight group-hover:bg-[#C9A84C] group-hover:text-[#044745] transition-all duration-300">
              dd
            </span>
            <span className="hidden sm:block text-[#044745] text-sm font-medium tracking-wide">
              didaktiker.info
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-[#044745]/60 text-sm hover:text-[#044745] transition-colors duration-200 tracking-wide"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("kontakt")}
              className="px-5 py-2 border border-[#044745]/30 text-[#044745] text-sm rounded-full hover:bg-[#044745] hover:text-[#FCF7ED] hover:border-[#044745] transition-all duration-300"
            >
              Kontaktiere mich
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 flex flex-col gap-1.5"
            aria-label="Menü öffnen"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-[#044745] rounded-full"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#044745] rounded-full"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-[#044745] rounded-full"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#FCF7ED] border-b border-[#044745]/8 md:hidden"
          >
            <div className="flex flex-col px-5 py-6 gap-0">
              {NAV_SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  onClick={() => scrollTo(s.id)}
                  className="text-left text-[#044745] text-base font-medium py-4 border-b border-[#044745]/8 last:border-b-0"
                >
                  {s.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                onClick={() => scrollTo("kontakt")}
                className="mt-5 py-3 bg-[#044745] text-[#FCF7ED] text-sm font-medium rounded-full"
              >
                Kontaktiere mich
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
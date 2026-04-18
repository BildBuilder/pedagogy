"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Ansatz", href: "#ansatz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FCF7ED]/95 backdrop-blur-md shadow-sm border-b border-[#044745]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#044745] flex items-center justify-center text-[#FCF7ED] font-bold text-sm tracking-tight group-hover:scale-105 transition-transform duration-300">
              dd
            </div>
            <span className="font-semibold text-[#044745] text-base hidden sm:block">
              didaktiker.info
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#044745] text-sm font-medium hover:text-[#C9A84C] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C9A84C] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#kontakt")}
              className="px-5 py-2 bg-[#044745] text-[#FCF7ED] text-sm font-medium rounded-full hover:bg-[#0a6b68] transition-colors duration-300"
            >
              Kontaktiere mich
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#044745]/10 transition-colors"
            aria-label="Menü öffnen"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#044745] rounded-full origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-[#044745] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#044745] rounded-full origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#FCF7ED] border-b border-[#044745]/10 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-6 gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#044745] text-lg font-medium hover:text-[#C9A84C] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => handleNavClick("#kontakt")}
                className="mt-2 w-full py-3 bg-[#044745] text-[#FCF7ED] font-medium rounded-full hover:bg-[#0a6b68] transition-colors"
              >
                Kontaktiere mich
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

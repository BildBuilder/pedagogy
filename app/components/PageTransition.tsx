"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: "clip-path" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

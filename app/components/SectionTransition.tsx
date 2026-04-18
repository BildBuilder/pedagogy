"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Awwwards-style 3D section entry transition.
 *
 * As a section scrolls into the viewport the wrapper:
 *   • unfolds from a slight rotateX tilt (perspective fold)
 *   • rises from below (y offset)
 *   • scales up from 96 → 100 %
 *   • fades in
 *
 * Springs smooth out any jank from fast scroll.
 */
export default function SectionTransition({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Track when the section top crosses 85 % → 55 % of the viewport height.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.92", "0 0.42"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const rawY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Springs add physical weight — avoids "floaty" feel on fast scroll.
  const rotateX = useSpring(rawRotateX, { stiffness: 88, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 88, damping: 20, mass: 0.8 });
  const scale = useSpring(rawScale, { stiffness: 88, damping: 20, mass: 0.8 });

  return (
    /* perspectiveOrigin slightly above the section top so the fold looks
       like it opens toward the viewer rather than rotating around its center. */
    <div
      ref={ref}
      className={className}
      style={{ perspective: "1400px", perspectiveOrigin: "50% -8%", overflow: "hidden" }}
    >
      <motion.div
        style={{
          rotateX,
          y,
          scale,
          opacity,
          transformOrigin: "50% 0%",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

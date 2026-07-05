"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="relative h-[70vh] min-h-[460px] overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.38]">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=85&auto=format&fit=crop"
          alt="Bildung und Lernatmosphäre"
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority={false}
        />
      </motion.div>

      {/* Deep teal gradient — left heavy for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,71,69,0.35) 0%, rgba(4,71,69,0.55) 60%, rgba(2,18,17,0.82) 100%)",
        }}
      />
      {/* Extra dark push in bottom-left corner for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 85%, rgba(2,18,17,0.72) 0%, transparent 100%)",
        }}
      />
      {/* Bottom fade to cream */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(252,247,237,0.4) 40%, rgba(252,247,237,0.85) 70%, #FCF7ED 100%)" }}
      />
      <div className="grain" />

      {/* Editorial quote — left-aligned, no card */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-20 lg:px-28"
      >
        <div className="max-w-2xl">
          {/* Gold opening mark */}
          <span
            className="block text-[#C9A84C] mb-4 leading-none select-none"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              lineHeight: 0.8,
              opacity: 0.55,
            }}
          >
            &ldquo;
          </span>

          <blockquote
            className="text-[#FCF7ED] leading-snug mb-8"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(1.7rem, 3.8vw, 3.2rem)",
            }}
          >
            Lernen ver&auml;ndert Menschen &ndash; gute Didaktik ver&auml;ndert die Welt.
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#C9A84C]/60" />
            <p className="text-[#FCF7ED]/45 text-[10px] tracking-[0.28em] uppercase font-medium">
              Helene Kleinfeld &middot; Didaktiker
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

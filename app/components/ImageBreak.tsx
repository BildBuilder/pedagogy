"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * Full-bleed editorial image break.
 * Sits between Approach and Services.
 * Parallax scroll on the image creates depth; quote overlaid with teal wash.
 *
 * Unsplash photo: Kimberly Farmer — warm classroom learning atmosphere
 * https://unsplash.com/photos/lUaaKCUANVI
 */
export default function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: image shifts upward as the section scrolls past.
  const imgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <div ref={ref} className="relative h-[56vh] min-h-[340px] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 scale-[1.38]"
      >
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&q=82&auto=format&fit=crop"
          alt="Kinder beim Lernen – pädagogische Atmosphäre"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </motion.div>

      {/* Teal colour wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(4,71,69,0.78) 0%, rgba(4,71,69,0.62) 60%, rgba(4,71,69,0.82) 100%)",
        }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: "180px",
        }}
      />

      {/* Quote */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Opening quote mark */}
          <div
            className="text-[#C9A84C]/40 leading-none mb-2 select-none"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(4rem, 10vw, 7rem)",
              lineHeight: 0.7,
            }}
            aria-hidden
          >
            &ldquo;
          </div>

          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(1.4rem, 3.8vw, 2.6rem)",
              color: "#FCF7ED",
              lineHeight: 1.42,
              maxWidth: "780px",
            }}
          >
            Erziehung ist nicht das F&uuml;llen eines Eimers,
            <br className="hidden sm:block" /> sondern das Enz&uuml;nden eines Feuers.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-10 bg-[#C9A84C]/50" />
            <span
              className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              William Butler Yeats
            </span>
            <div className="h-px w-10 bg-[#C9A84C]/50" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

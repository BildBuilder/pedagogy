"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const proxy = { val: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete();
        },
      });

      // Logo entrance
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      // Count 0 → 100 with progress bar
      tl.to(
        proxy,
        {
          val: 100,
          duration: 2.0,
          ease: "power2.inOut",
          onUpdate() {
            const v = Math.floor(proxy.val);
            if (counterRef.current) {
              counterRef.current.textContent = String(v).padStart(3, "0");
            }
            if (progressRef.current) {
              gsap.set(progressRef.current, { scaleX: proxy.val / 100 });
            }
          },
        },
        "<0.2"
      );

      // Hold at 100
      tl.to({}, { duration: 0.3 });

      // Slide the whole screen up to reveal page
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.0,
        ease: "power4.inOut",
      });
    }, containerRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#021e1d] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #FCF7ED 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Gold ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
      />

      {/* Brand */}
      <div ref={logoRef} className="relative z-10 flex flex-col items-center gap-5">
        <img src="/dd_logosvg.svg" alt="didaktiker" width={56} height={56} className="opacity-90" />
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-[#FCF7ED] text-sm font-medium tracking-[0.28em] uppercase">
            didaktiker
          </p>
          <p className="text-[#FCF7ED]/30 text-[9px] tracking-[0.32em] uppercase">
            Bildung · Pädagogik · Kreatives
          </p>
        </div>
      </div>

      {/* Large background counter */}
      <span
        ref={counterRef}
        className="absolute bottom-10 right-8 text-[#FCF7ED]/[0.07] font-mono leading-none tabular-nums select-none"
        style={{ fontSize: "clamp(5rem, 16vw, 13rem)" }}
      >
        000
      </span>

      {/* Progress bar */}
      <div className="absolute bottom-7 left-8 right-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-[#FCF7ED]/10 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-[#C9A84C]/70 origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <span className="text-[#FCF7ED]/20 text-[9px] font-mono tracking-widest shrink-0">
          LADEN
        </span>
      </div>
    </div>
  );
}

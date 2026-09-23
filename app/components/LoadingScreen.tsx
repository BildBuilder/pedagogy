"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const strokes = gsap.utils.toArray<SVGPathElement>(".draw");

      strokes.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const loop = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
      loop
        .to(strokes, {
          strokeDashoffset: 0,
          duration: 0.75,
          ease: "power2.out",
          stagger: 0.12,
        })
        .to(strokes, {
          opacity: 0,
          duration: 0.35,
          ease: "power1.in",
          stagger: 0.05,
        })
        .set(strokes, { opacity: 1, strokeDashoffset: (i, t: SVGPathElement) => t.getTotalLength() });

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.7,
        delay: 2.4,
        ease: "power2.out",
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete();
        },
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-7 bg-[var(--cream)]"
    >
      {/* Open book — drawn line by line */}
      <svg width="132" height="92" viewBox="0 0 120 84" fill="none" aria-hidden>
        <g stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path className="draw" d="M60 22V72" />
          <path className="draw" d="M60 22C50 13 30 10 12 13v50c18-3 38 0 48 9" />
          <path className="draw" d="M60 22c10-9 30-12 48-9v50c-18-3-38 0-48 9" />
        </g>
        <g stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round">
          <path className="draw" d="M23 27c8 0 18 1 25 4" />
          <path className="draw" d="M23 38c8 0 18 1 25 4" />
          <path className="draw" d="M72 31c7-3 17-4 25-4" />
          <path className="draw" d="M72 42c7-3 17-4 25-4" />
        </g>
      </svg>

      <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--teal)]/45">didaktiker</p>
    </div>
  );
}

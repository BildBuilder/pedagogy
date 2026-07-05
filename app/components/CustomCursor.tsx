"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Center on cursor position
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -200, y: -200 });

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "none" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.45, ease: "power3.out" });
    };

    const onEnter = () => {
      gsap.to(ring, { scale: 1.9, borderColor: "rgba(201,168,76,0.6)", duration: 0.28 });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onLeave = () => {
      gsap.to(ring, { scale: 1, borderColor: "rgba(201,168,76,0.3)", duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.22 });
    };

    const onHide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const onShow = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onHide);
    document.addEventListener("mouseenter", onShow);

    const attachListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachListeners();

    // Re-attach on DOM changes (e.g. drawers opening)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onHide);
      document.removeEventListener("mouseenter", onShow);
      observer.disconnect();
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-[#C9A84C] rounded-full pointer-events-none z-[9997] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997]"
        style={{
          border: "1px solid rgba(201,168,76,0.3)",
          willChange: "transform",
        }}
      />
    </>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const proxy = { val: 0 };
    const anim = gsap.to(proxy, {
      val: target,
      duration: 1.8,
      ease: "power2.out",
      paused: true,
      onUpdate() { el.textContent = String(Math.floor(proxy.val)) + suffix; },
      onComplete() { el.textContent = String(target) + suffix; },
    });

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => anim.play(),
    });

    return () => { anim.kill(); };
  }, [target, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 200, suffix: "+", label: "Beratungen & Workshops" },
  { value: 6, suffix: "", label: "Leistungsbereiche" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 bg-[#044745] px-5 overflow-hidden">
      {/* Animated orb background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[80px] opacity-[0.12] orb-1"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }} />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-[0.09] orb-2"
          style={{ background: "radial-gradient(circle, #FCF7ED, transparent 70%)" }} />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-5xl font-bold text-[#C9A84C]">
                <Counter target={s.value} suffix={s.suffix} />
              </span>
              <span className="text-[#FCF7ED]/70 text-sm font-medium tracking-wide">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

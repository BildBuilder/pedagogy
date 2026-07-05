"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

interface PageTransitionContextValue {
  navigate: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  navigate: () => {},
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

// Two wipe layers: teal first, then gold — both full-viewport clean curtains
const LAYERS = ["#044745", "#C9A84C"];

const DURATION = 0.55;
const STAGGER = 0.08;
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const layerControls = [useAnimation(), useAnimation(), useAnimation()];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [layersVisible, setLayersVisible] = useState(true);

  // On initial load: cover then slide out
  useEffect(() => {
    layerControls.forEach((ctrl) => ctrl.set({ y: "0%" }));

    const slideOut = async () => {
      await Promise.all(
        [...layerControls].reverse().map((ctrl, i) =>
          ctrl.start({
            y: "-100%",
            transition: { duration: DURATION, ease: EASE, delay: i * STAGGER },
          })
        )
      );
      layerControls.forEach((ctrl) => ctrl.set({ y: "100%" }));
      setLayersVisible(false);
    };

    if (document.readyState === "complete") {
      slideOut();
    } else {
      window.addEventListener("load", slideOut, { once: true });
      return () => window.removeEventListener("load", slideOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After new page mounts, slide layers away
  useEffect(() => {
    if (!isTransitioning) return;

    const slideOut = async () => {
      await Promise.all(
        [...layerControls].reverse().map((ctrl, i) =>
          ctrl.start({
            y: "-100%",
            transition: { duration: DURATION, ease: EASE, delay: i * STAGGER },
          })
        )
      );
      setIsTransitioning(false);
      layerControls.forEach((ctrl) => ctrl.set({ y: "100%" }));
      setLayersVisible(false);
    };

    slideOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navigate = useCallback(
    async (href: string) => {
      if (href === pathname) return;
      setIsTransitioning(true);
      setLayersVisible(true);

      // Slide layers up to cover screen
      await Promise.all(
        layerControls.map((ctrl, i) =>
          ctrl.start({
            y: "0%",
            transition: { duration: DURATION, ease: EASE, delay: i * STAGGER },
          })
        )
      );

      window.scrollTo({ top: 0, behavior: "instant" });
      router.push(href);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, router]
  );

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}

      {LAYERS.map((color, i) => (
        <motion.div
          key={color}
          initial={{ y: "0%" }}
          animate={layerControls[i]}
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundColor: color,
            zIndex: 9990 + i,
            visibility: layersVisible ? "visible" : "hidden",
          }}
        />
      ))}
    </PageTransitionContext.Provider>
  );
}

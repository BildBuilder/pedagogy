"use client";

import { useState } from "react";
import LenisProvider from "./LenisProvider";
import LoadingScreen from "./LoadingScreen";
import PageTransitionProvider from "./PageTransitionProvider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LenisProvider>
      <PageTransitionProvider>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
        {children}
      </PageTransitionProvider>
    </LenisProvider>
  );
}

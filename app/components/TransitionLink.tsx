"use client";

import { type ComponentProps } from "react";
import { usePageTransition } from "./PageTransitionProvider";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

export default function TransitionLink({ href, onClick, children, ...props }: Props) {
  const { navigate } = usePageTransition();

  return (
    <a
      href={href}
      onClick={(e) => {
        if (
          e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ||
          href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")
        ) {
          onClick?.(e);
          return;
        }
        e.preventDefault();
        onClick?.(e);
        navigate(href);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

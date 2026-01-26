"use client";

import { useEffect, type ReactNode } from "react";

export default function HomeScrollManager({ children }: { children: ReactNode }) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return <>{children}</>;
}

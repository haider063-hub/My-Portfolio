"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LOTTIE_SOURCES = [
  "/lottie/hero-accent.json",
  "https://assets2.lottiefiles.com/packages/lf20_UJNc2t.json",
] as const;

export default function MicroLottie() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    const load = async () => {
      for (const url of LOTTIE_SOURCES) {
        try {
          const res = await fetch(url, { cache: "force-cache" });
          if (!res.ok) continue;
          const json: unknown = await res.json();
          if (
            cancelled ||
            !json ||
            typeof json !== "object" ||
            !("v" in json || "layers" in json)
          ) {
            continue;
          }
          setData(json as Record<string, unknown>);
          return;
        } catch {
          /* try next source */
        }
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [mounted]);

  if (!mounted || !data) {
    return (
      <div
        className="h-9 w-9 shrink-0 animate-pulse rounded-full border border-white/15 bg-white/5 md:h-16 md:w-16"
        aria-hidden
      />
    );
  }

  return (
    <div className="h-9 w-9 shrink-0 opacity-90 md:h-16 md:w-16" aria-hidden>
      <Lottie animationData={data} loop className="h-full w-full" />
    </div>
  );
}

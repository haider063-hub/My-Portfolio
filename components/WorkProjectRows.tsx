"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ProjectItem } from "@/lib/site-content";
import IconArrowRight from "./IconArrowRight";

/** Display size (px). Request ~2× in `sizes` for sharp retina + object-contain letterboxing. */
const PREVIEW = 312;
const PARALLAX = 18;
const PREVIEW_SIZES = `${Math.min(960, Math.round(PREVIEW * 2.5))}px`;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

type Fx = { vx: number; vy: number; ix: number; iy: number };

type Dual = { srcA: string; srcB: string; showA: boolean };

export default function WorkProjectRows({ items }: { items: ProjectItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [fx, setFx] = useState<Fx>({ vx: 0, vy: 0, ix: 0, iy: 0 });
  const [dual, setDual] = useState<Dual>({ srcA: "", srcB: "", showA: true });
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevActiveRef = useRef<number | null>(null);
  const flipTokenRef = useRef(0);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  useLayoutEffect(() => {
    if (active === null) {
      flipTokenRef.current += 1;
      prevActiveRef.current = null;
      setDual({ srcA: "", srcB: "", showA: true });
      return;
    }

    const url = items[active].image;
    const prev = prevActiveRef.current;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prev === null) {
      setDual({ srcA: url, srcB: url, showA: true });
      prevActiveRef.current = active;
      return;
    }

    if (prev === active) {
      return;
    }

    prevActiveRef.current = active;

    if (reduce) {
      setDual({ srcA: url, srcB: url, showA: true });
      return;
    }

    flipTokenRef.current += 1;
    const token = flipTokenRef.current;

    setDual((d) => (d.showA ? { ...d, srcB: url } : { ...d, srcA: url }));

    requestAnimationFrame(() => {
      if (flipTokenRef.current !== token) return;
      requestAnimationFrame(() => {
        if (flipTokenRef.current !== token) return;
        setDual((d) => ({ ...d, showA: !d.showA }));
      });
    });
  }, [active, items]);

  const clearHide = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const scheduleHide = () => {
    clearHide();
    hideTimer.current = setTimeout(() => {
      setActive(null);
      hideTimer.current = null;
    }, 100);
  };

  const updatePreview = useCallback((e: React.MouseEvent, row: HTMLElement, i: number) => {
    const r = row.getBoundingClientRect();
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rawLeft = e.clientX - r.left - PREVIEW / 2;
    const rawTop = e.clientY - r.top - PREVIEW / 2;
    const maxL = Math.max(0, r.width - PREVIEW);
    const maxT = Math.max(0, r.height - PREVIEW);
    const left = clamp(rawLeft, 0, maxL);
    const top = clamp(rawTop, 0, maxT);

    const vx = r.left + left;
    const vy = r.top + top;
    const relX = (e.clientX - vx) / PREVIEW - 0.5;
    const relY = (e.clientY - vy) / PREVIEW - 0.5;
    const ix = reduce ? 0 : clamp(-relX * PARALLAX * 2, -PARALLAX, PARALLAX);
    const iy = reduce ? 0 : clamp(-relY * PARALLAX * 2, -PARALLAX, PARALLAX);

    setActive(i);
    setFx({ vx, vy, ix, iy });
  }, []);

  const previewProject = active !== null ? items[active] : null;
  const fallbackSrc = previewProject?.image ?? "";

  return (
    <div className="relative w-full max-w-none">
      <ul className="list-none p-0 m-0">
        {items.map((project, i) => (
          <li
            key={project.title}
            className="work-simple-row group/row border-t border-white/[0.08] py-5 first:pt-3 last:pb-0 md:py-6 md:first:pt-4"
            onMouseEnter={(e) => updatePreview(e, e.currentTarget, i)}
            onMouseMove={(e) => updatePreview(e, e.currentTarget, i)}
            onMouseLeave={scheduleHide}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group/rl relative z-[1] flex flex-col gap-3 rounded-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 sm:flex-row sm:items-center sm:gap-10 lg:gap-16"
            >
              <div className="max-w-md shrink-0 sm:w-[38%]">
                <span className="inline-flex items-center gap-2.5">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] transition-colors group-hover/rl:text-[var(--accent)] md:text-2xl">
                    {project.title}
                  </h3>
                  <IconArrowRight className="h-4 w-4 shrink-0 rotate-45 text-[var(--muted)] transition group-hover/rl:text-[var(--accent)]" />
                </span>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)] md:text-sm">
                  {project.tag}
                </p>
              </div>
              <p className="lab-prose flex-1 text-base leading-relaxed text-[var(--foreground)]/80 md:text-lg">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>

      {previewProject && (
        <div
          className="work-preview-pop pointer-events-none fixed z-[80] overflow-hidden"
          style={{ left: fx.vx, top: fx.vy, width: PREVIEW, height: PREVIEW }}
          aria-hidden
        >
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translate3d(${fx.ix}px, ${fx.iy}px, 0)` }}
          >
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                dual.showA ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={dual.srcA || fallbackSrc}
                alt=""
                fill
                className="object-contain object-center"
                sizes={PREVIEW_SIZES}
                quality={92}
                priority={active !== null && active < 2}
              />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                dual.showA ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={dual.srcB || fallbackSrc}
                alt=""
                fill
                className="object-contain object-center"
                sizes={PREVIEW_SIZES}
                quality={92}
                priority={active !== null && active < 2}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

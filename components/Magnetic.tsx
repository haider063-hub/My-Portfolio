"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = { children: ReactNode; strength?: number; className?: string };

export default function Magnetic({
  children,
  strength = 0.22,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transition = "none";
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  }

  function onLeave() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "translate3d(0,0,0)";
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

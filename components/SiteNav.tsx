"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Magnetic from "./Magnetic";
import IconArrowRight from "./IconArrowRight";

export type NavItem = { href: string; label: string };

const CAL_DEFAULT =
  "https://cal.com/muhammad-haider-hamayoun/15min?overlayCalendar=true";

type SiteNavProps = {
  items: NavItem[];
  calUrl?: string;
  /** Sits over the hero: absolute, no bar padding, transparent row */
  heroOverlay?: boolean;
};

export default function SiteNav({ items, calUrl = CAL_DEFAULT, heroOverlay = false }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open, close]);

  return (
    <>
      <nav
        className={
          heroOverlay
            ? "relative z-[60] w-full shrink-0 pt-5 md:pointer-events-none md:absolute md:left-0 md:right-0 md:top-[clamp(1.25rem,3.5vw,2.25rem)] md:pt-0"
            : "relative z-[60] w-full shrink-0 pt-5 md:pt-6"
        }
        aria-label="Primary"
      >
        <div className={`lab-nav-shell ${heroOverlay ? "lab-nav-shell--hero-overlay" : ""}`}>
          <div
            className={
              heroOverlay
                ? "pointer-events-auto flex w-full items-center justify-between gap-4 border-0 bg-transparent py-0 shadow-none backdrop-blur-none [backdrop-filter:none] [-webkit-backdrop-filter:none]"
                : "lab-glass lab-nav-glass flex w-full items-center justify-between gap-4 rounded-full px-4 py-2.5 shadow-[0_18px_48px_rgba(0,0,0,0.35)] md:px-6 md:py-3"
            }
          >
            <a
              href="#"
              className="anime-brand font-display text-2xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              MW
            </a>

            <button
              type="button"
              className="shrink-0 font-display text-xl font-semibold tracking-tight text-[var(--foreground)]/90 hover:text-[var(--foreground)] md:text-2xl"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="inline-flex items-center gap-2">
                <span>{open ? "Close" : "Menu"}</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={close}
      />

      <aside
        id={panelId}
        className={`lab-drawer-glass fixed inset-y-0 right-0 z-[210] flex w-[min(100%,22rem)] flex-col border-l border-white/10 px-6 py-8 shadow-[-24px_0_64px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:w-[min(100%,26rem)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="shrink-0 font-display text-xl font-semibold tracking-tight text-[var(--foreground)]/90 hover:text-[var(--foreground)] md:text-2xl"
            aria-label="Close menu"
            onClick={close}
          >
            <span className="inline-flex items-center gap-2">
              <span>Close</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>
        <nav className="mt-10 flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Sections">
          {items.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className="lab-nav-link font-display rounded-xl px-3 py-3 text-lg font-medium tracking-tight text-[var(--foreground)]/90 transition hover:bg-white/[0.06]"
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Magnetic strength={0.14}>
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-motion mt-6 inline-flex w-full items-center justify-center gap-2 text-[16px]"
          >
            <span>Book a call</span>
            <IconArrowRight className="h-4 w-4 rotate-45" />
          </a>
        </Magnetic>
      </aside>
    </>
  );
}

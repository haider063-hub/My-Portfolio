"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import IconArrowRight from "./IconArrowRight";

export type NavItem = { href: string; label: string };

const CAL_DEFAULT =
  "https://cal.com/muhammad-haider-hamayoun/15min?overlayCalendar=true";

const EMAIL_HREF = "mailto:haiderofficial127@gmail.com?subject=Project%20inquiry";

type SiteNavProps = {
  items: NavItem[];
  calUrl?: string;
};

export default function SiteNav({ items, calUrl = CAL_DEFAULT }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace(/^#/, "")).filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const ratios = new Map<string, number>();

    const pickActive = () => {
      let bestId = "";
      let bestRatio = 0;
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestId) setActiveHref(`#${bestId}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        pickActive();
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const updateSurface = () => {
      if (open) return;
      const pill = pillRef.current;
      if (!pill) return;
      const rect = pill.getBoundingClientRect();
      const probeY = Math.min(
        window.innerHeight - 1,
        Math.max(1, rect.top + rect.height * 0.5)
      );
      const el = document.elementFromPoint(
        Math.min(window.innerWidth - 1, Math.max(1, rect.left + rect.width * 0.5)),
        probeY
      );
      setOnLight(!!el?.closest(".lab-surface-light"));
    };

    updateSurface();
    window.addEventListener("scroll", updateSurface, { passive: true });
    window.addEventListener("resize", updateSurface);
    return () => {
      window.removeEventListener("scroll", updateSurface);
      window.removeEventListener("resize", updateSurface);
    };
  }, [open]);

  return (
    <>
      <div
        className={`lab-nav-mobile-backdrop min-[992px]:hidden${open ? " lab-nav-mobile-backdrop--open" : ""}`}
        aria-hidden={!open}
        onClick={close}
      />

      <header className="lab-nav-sticky" aria-label="Site header">
        <div className={`lab-nav-shell lab-nav-mobile-wrap${open ? " lab-nav-mobile-wrap--open" : ""}`}>
          <div
            ref={pillRef}
            className={`lab-nav-pill${onLight ? " lab-nav-pill--on-light" : ""}`}
          >
            <a
              href="#"
              className="anime-brand font-display lab-nav-brand shrink-0"
            >
              MW
            </a>

            <nav
              className="lab-nav-links hidden min-w-0 items-center justify-center min-[992px]:flex"
              aria-label="Primary"
            >
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`navbar-link lab-nav-link-inline${activeHref === item.href ? " w--current" : ""}`}
                  aria-current={activeHref === item.href ? "true" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="lab-nav-cta hidden shrink-0 items-center gap-2 min-[992px]:flex">
              <a href={EMAIL_HREF} className="btn-outline btn-motion">
                Email
              </a>
              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-motion inline-flex items-center gap-2"
              >
                <span>Start a project</span>
                <IconArrowRight className="btn-arrow h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              className="lab-nav-menu-btn ml-auto shrink-0 min-[992px]:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            id={panelId}
            className={`lab-nav-mobile-panel min-[992px]:hidden${open ? " lab-nav-mobile-panel--open" : ""}`}
            aria-hidden={!open}
          >
            <nav className="lab-nav-mobile-links" aria-label="Sections">
              {items.map((item, i) => (
                <a
                  key={item.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className={`lab-nav-mobile-link${activeHref === item.href ? " w--current" : ""}`}
                  aria-current={activeHref === item.href ? "true" : undefined}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="lab-nav-mobile-cta">
              <a
                href={EMAIL_HREF}
                className="btn-outline btn-motion text-center"
                tabIndex={open ? 0 : -1}
                onClick={close}
              >
                Email
              </a>
              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-motion inline-flex w-full items-center justify-center gap-2"
                tabIndex={open ? 0 : -1}
                onClick={close}
              >
                <span>Start a project</span>
                <IconArrowRight className="btn-arrow h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

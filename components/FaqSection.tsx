"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/site-content";

type FaqSurface = "dark" | "light";

const itemClassDark = "border border-white/10 bg-white/[0.03]";

const btnHoverClass: Record<FaqSurface, string> = {
  dark: "md:hover:bg-white/[0.04]",
  light: "md:hover:bg-[color-mix(in_oklab,var(--background)_7%,transparent)]",
};

const chevronClass: Record<FaqSurface, string> = {
  dark: "text-[var(--accent)]",
  light: "text-[var(--on-light-accent)]",
};

const answerTextClass: Record<FaqSurface, string> = {
  dark: "text-[var(--muted)]",
  light: "text-[var(--on-light-muted)]",
};

const qClass: Record<FaqSurface, string> = {
  dark: "text-[var(--foreground)]",
  light: "text-[var(--background)]",
};

export default function FaqSection({
  items,
  surface = "dark",
}: {
  items: FaqItem[];
  surface?: FaqSurface;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl space-y-2 md:space-y-2.5">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const shell =
          surface === "light"
            ? "lab-glass-on-light"
            : itemClassDark;

        return (
          <div
            key={item.question}
            className={`reveal-line overflow-hidden rounded-2xl ${shell}`}
          >
            <button
              type="button"
              className={`flex min-h-[3.25rem] w-full items-start justify-between gap-3 px-4 py-3.5 text-left transition-colors duration-200 sm:min-h-0 md:gap-3.5 md:px-5 md:py-3 ${btnHoverClass[surface]}`}
              aria-expanded={isOpen}
              aria-controls={isOpen ? `faq-answer-${i}` : undefined}
              id={`faq-q-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span
                className={`min-w-0 flex-1 pr-1 font-display text-base font-semibold leading-snug md:text-lg ${qClass[surface]}`}
              >
                {item.question}
              </span>
              <span
                className={`mt-0.5 inline-block shrink-0 text-2xl font-medium leading-none transition-transform duration-300 ease-out motion-reduce:duration-0 ${chevronClass[surface]} ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  aria-hidden={!isOpen}
                >
                  <p
                    className={`lab-prose px-4 pb-4 pt-0.5 text-[0.9375rem] leading-relaxed sm:px-5 sm:pb-5 md:text-base ${answerTextClass[surface]}`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

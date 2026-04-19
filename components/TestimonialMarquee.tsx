"use client";

import Image from "next/image";
import type { Testimonial } from "@/lib/site-content";

function StarRow() {
  return (
    <div className="testimonial-card__stars flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-[0.85rem] leading-none text-amber-700">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="testimonial-card lab-glass-on-light flex min-h-[12rem] w-[min(86vw,20rem)] shrink-0 flex-col rounded-2xl lab-pad-card sm:w-[22rem] md:w-[24rem]"
    >
      <StarRow />
      <p className="testimonial-card__quote mt-4 flex-1 text-left text-[0.9375rem] leading-relaxed sm:text-base">
        &ldquo;{t.quote}&rdquo;
      </p>
      <footer className="testimonial-card__rule mt-5 flex items-center gap-3 border-t border-[color-mix(in_oklab,var(--background)_12%,transparent)] pt-4">
        <div
          className={`testimonial-card__avatar-ring relative shrink-0 overflow-hidden rounded-none ${t.avatarLarge ? "h-14 w-14" : "h-10 w-10"}`}
        >
          <Image
            src={t.avatar}
            alt=""
            fill
            className="object-contain object-left"
            sizes={t.avatarLarge ? "56px" : "40px"}
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="testimonial-card__name truncate font-semibold">{t.name}</p>
          <p className="testimonial-card__role mt-0.5 truncate text-sm">{t.role}</p>
        </div>
      </footer>
    </article>
  );
}

function Row({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  /** Widen strip so track beats viewport width (single 2× dup reads “empty” on wide screens). */
  const segment = items.length ? Array.from({ length: 4 }, () => items).flat() : [];
  const sequence = segment.length ? [...segment, ...segment] : [];
  const animClass =
    direction === "left" ? "testimonial-marquee--to-left" : "testimonial-marquee--to-right";

  if (!sequence.length) return null;

  return (
    <div className="testimonial-marquee-viewport relative w-full overflow-hidden bg-transparent py-1.5 md:py-2">
      <div className={`testimonial-marquee bg-transparent ${animClass}`}>
        {sequence.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialMarquee({ items }: { items: Testimonial[] }) {
  if (!items.length) return null;

  const mid = Math.ceil(items.length / 2);
  const rowTop = items.slice(0, mid);
  let rowBottom = items.slice(mid);
  if (!rowBottom.length) rowBottom = rowTop;

  return (
    <div className="testimonial-marquee-stack flex flex-col gap-4 bg-transparent py-1 md:gap-5 md:py-1.5">
      <Row items={rowTop} direction="right" />
      <Row items={rowBottom} direction="left" />
    </div>
  );
}

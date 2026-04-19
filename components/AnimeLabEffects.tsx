"use client";

import { useEffect } from "react";
import { animate, createTimeline, spring, stagger } from "animejs";

function easePop() {
  return spring({ stiffness: 380, damping: 28, mass: 0.78 });
}

function easeSoft() {
  return spring({ stiffness: 160, damping: 22, mass: 0.9 });
}

export default function AnimeLabEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revertibles: Array<{ revert: () => void }> = [];
    const reg = (a: { revert: () => void }) => revertibles.push(a);
    const cleanups: Array<() => void> = [];

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const brand = document.querySelector<HTMLElement>(".anime-brand");
    const navLinks = document.querySelectorAll<HTMLElement>(".lab-nav-link");
    if (brand && navLinks.length) {
      const tl = createTimeline({ defaults: { ease: easePop() } });
      tl.add(brand, {
        scale: [0.86, 1],
        rotate: [-7, 0],
        opacity: [0.45, 1],
      });
      tl.add(
        navLinks,
        {
          y: [14, 0],
          opacity: [0, 1],
          delay: stagger(48, { from: "first" }),
        },
        "-=420"
      );
      reg(tl);
    } else if (brand) {
      reg(
        animate(brand, {
          scale: [0.9, 1],
          opacity: [0.55, 1],
          ease: easePop(),
        })
      );
    }

    if (!coarsePointer && navLinks.length) {
      navLinks.forEach((el) => {
        let active: ReturnType<typeof animate> | null = null;
        const enter = () => {
          active?.revert();
          active = animate(el, { y: -5, ease: easePop() });
        };
        const leave = () => {
          active?.revert();
          active = animate(el, { y: 0, ease: spring({ stiffness: 260, damping: 24 }) });
        };
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          active?.revert();
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    const onceInView = (
      root: Element | null,
      run: () => void,
      opts: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    ) => {
      if (!root) return;
      let done = false;
      const io = new IntersectionObserver(([e]) => {
        if (!e?.isIntersecting || done) return;
        done = true;
        io.disconnect();
        run();
      }, opts);
      io.observe(root);
      cleanups.push(() => io.disconnect());
    };

    onceInView(document.getElementById("experience"), () => {
      reg(
        animate(".lab-timeline-dot", {
          scale: [0.35, 1],
          opacity: [0, 1],
          delay: stagger(90, { from: "first" }),
          ease: easePop(),
        })
      );
    });

    onceInView(document.getElementById("lab-footer"), () => {
      reg(
        animate(".lab-footer-inner", {
          opacity: [0, 1],
          y: [18, 0],
          ease: easeSoft(),
        })
      );
    });

    return () => {
      cleanups.forEach((fn) => fn());
      revertibles.forEach((a) => a.revert());
    };
  }, []);

  return null;
}

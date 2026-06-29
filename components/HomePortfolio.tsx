"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimeLabEffects from "./AnimeLabEffects";
import SiteNav from "./SiteNav";
import IconArrowRight from "./IconArrowRight";
import IconArrowUp from "./IconArrowUp";
import FaqSection from "./FaqSection";
import ShipPrincipleIcon from "./ShipPrincipleIcon";
import TestimonialMarquee from "./TestimonialMarquee";
import WorkProjectRows from "./WorkProjectRows";
import {
  buildPrinciples,
  faqs,
  processSteps,
  projects,
  services,
  skills,
  testimonials,
  timeline,
} from "@/lib/site-content";

const CAL_BOOKING_URL =
  "https://cal.com/muhammad-haider-hamayoun/15min?overlayCalendar=true";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function HomePortfolio() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!reduce) {
      lenis = new Lenis({
        duration: 1.12,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const loop = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        rotateX: -40,
        transformOrigin: "50% 100%",
        stagger: 0.07,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.12,
      });

      gsap.from(".hero-sub", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.45,
      });

      gsap.from(".hero-visual", {
        y: 48,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.35,
      });

      document.querySelectorAll<HTMLElement>(".skill-bar").forEach((bar) => {
        const track = bar.closest(".skill-track") as HTMLElement | null;
        const fill = track?.dataset.fill
          ? Number.parseFloat(track.dataset.fill)
          : 1;
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: Number.isFinite(fill) ? fill : 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: track ?? bar,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reveal-line").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    });

    const onRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", onRefresh);
    window.addEventListener("resize", onRefresh);

    return () => {
      window.removeEventListener("load", onRefresh);
      window.removeEventListener("resize", onRefresh);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <AnimeLabEffects />
      <div className="lab-noise" aria-hidden />

      <SiteNav items={NAV} calUrl={CAL_BOOKING_URL} />

      <section className="lab-surface-dark relative flex min-h-[100svh] flex-col justify-start overflow-hidden border-b border-white/[0.06] md:h-[100vh] md:min-h-[100vh] md:justify-center">
        <div className="lab-section lab-hero-inner relative z-10 w-full">
          <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <p className="hero-sub lab-section-kicker mb-3 max-w-xl text-xs md:text-sm">
                Muhammad Haider Hamayoun
              </p>
              <h1 className="[perspective:1200px]">
                <div className="hero-line text-gradient whitespace-normal sm:whitespace-nowrap">
                  AI Product Engineer
                </div>
                <div className="hero-line mt-1.5 text-[var(--foreground)]">for production.</div>
              </h1>
              <p className="hero-sub mt-5 max-w-none text-lg leading-relaxed text-[var(--muted)] md:max-w-xl md:text-xl">
                Shipping production AI products and Webflow sites for teams in the UK, UAE,
                and US.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-7 md:gap-5">
                <a
                  href={CAL_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-motion inline-flex items-center gap-2"
                >
                  <span>Start a project</span>
                  <IconArrowRight className="btn-arrow h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hero-visual lg:col-span-5">
              <div className="lab-glass rounded-3xl lab-pad-card lg:ml-auto lg:max-w-md">
                <p className="lab-section-kicker text-xs md:text-sm">At a glance</p>
                <div className="mt-4 grid gap-4 md:mt-7 md:gap-7">
                  <div>
                    <p className="font-display lab-stat-lg text-[var(--foreground)]">
                      3+
                    </p>
                    <p className="mt-1.5 text-lg text-[var(--muted)]">Years in production UI & APIs</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[var(--accent)]/35 via-white/10 to-transparent" />
                  <div>
                    <p className="font-display lab-stat-md text-[var(--foreground)]">
                      Global
                    </p>
                    <p className="mt-1.5 text-lg text-[var(--muted)]">
                      US · UK · UAE — scoped contracts & retainers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="lab-surface-light">
        <div className="lab-section lab-section-pad">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 01 · About</p>
            <h2 className="reveal-line">Engineering-first interfaces</h2>
          </div>
          <div className="lab-glass-on-light reveal-line lab-section-after-header rounded-3xl lab-pad-panel">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="lab-prose text-lg md:text-xl">
                <p>
                  Full-stack AI Product Engineer based in Pakistan. I build end-to-end SaaS platforms
                  and Webflow marketing sites for international teams — from database schema and API
                  design to auth, billing, and production deployment.
                </p>
                <p className="mt-6">
                  Currently building GeneFuel, a production clinical longevity platform for UK
                  health tech — live and actively shipping.
                </p>
              </div>
              <ul className="space-y-8 text-lg md:text-xl">
                <li className="about-rule border-l-2 pl-6">
                  <span className="font-display lab-heading-inline text-[var(--background)]">3+ years</span>{" "}
                  <span className="text-[var(--on-light-muted)]">
                    shipping full-stack AI products and Webflow builds.
                  </span>
                </li>
                <li className="about-rule border-l-2 pl-6">
                  <span className="font-display lab-heading-inline text-[var(--background)]">Stack</span>{" "}
                  <span className="text-[var(--on-light-muted)]">
                    Next.js · TypeScript · PostgreSQL · OpenAI · Anthropic
                  </span>
                </li>
                <li className="about-rule border-l-2 pl-6">
                  <span className="font-display lab-heading-inline text-[var(--background)]">Legal identity</span>{" "}
                  <span className="text-[var(--on-light-muted)]">Muhammad Haider Hamayoun</span>
                </li>
                <li className="about-rule border-l-2 pl-6">
                  <span className="font-display lab-heading-inline text-[var(--background)]">
                    SiteGrowth role
                  </span>{" "}
                  <span className="text-[var(--on-light-muted)]">
                    Senior Software Engineer (Jan 2025–present, remote UK)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="lab-surface-dark border-t border-white/[0.06]">
        <div className="lab-section lab-section-pad">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 02 · Services</p>
            <h2 className="reveal-line">What I deliver</h2>
            <p className="reveal-line lab-prose mt-8 max-w-3xl text-lg md:text-xl">
              Retainers and fixed-scope projects: design systems in code, CMS structures your team
              can own, and performance that holds up under real traffic.
            </p>
          </div>
          <div className="lab-section-after-header grid gap-5 sm:gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="reveal-line lab-glass flex flex-col rounded-2xl lab-pad-card">
                <h3 className="text-[var(--foreground)]">{s.title}</h3>
                <p className="lab-prose mt-5 text-base leading-relaxed md:text-lg">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="lab-surface-light">
        <div className="lab-section lab-section-pad">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 03 · Process</p>
            <h2 className="reveal-line">From brief to launch</h2>
            <p className="reveal-line lab-prose mt-8 max-w-3xl text-lg md:text-xl">
              A clear sequence you can line up with stakeholders and contracts.
            </p>
          </div>
          <div className="relative lab-section-after-header">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--on-light-accent)]/45 to-transparent lg:block"
              aria-hidden
            />
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="reveal-line lab-glass-on-light relative rounded-2xl lab-pad-card lg:pt-12"
                >
                  <span className="font-display lab-step-index tabular-nums text-[var(--on-light-accent)]">
                    {s.step}
                  </span>
                  <h3 className="mt-6 text-[var(--background)]">{s.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.65] text-[var(--on-light-muted)]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="lab-surface-dark relative border-t border-white/[0.06]">
        <div className="lab-section lab-section-pad">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 04 · Work</p>
            <h2>Selected launches</h2>
          </div>
          <div className="lab-section-after-header">
            <WorkProjectRows items={projects} />
          </div>
        </div>
      </section>

      <section id="testimonials" className="lab-surface-light">
        <div className="lab-section pt-[var(--section-pad-y)] pb-4 md:pb-5">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 05 · Testimonials</p>
            <h2 className="reveal-line">What they say about me</h2>
            <p className="reveal-line lab-prose mt-8 max-w-3xl text-lg md:text-xl">
              What clients say
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-transparent pb-8 pt-1 md:pb-10 md:pt-2">
          <TestimonialMarquee items={testimonials} />
        </div>
      </section>

      <section id="skills" className="lab-surface-dark border-t border-white/[0.06]">
        <div className="lab-section lab-section-pad-loose">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 06 · Skills</p>
            <h2 className="reveal-line">Capabilities</h2>
            <p className="reveal-line lab-prose mt-8 max-w-3xl text-lg md:text-xl">
              Self-assessed emphasis — a technical interview still tells the full story.
            </p>
          </div>
          <div className="lab-glass lab-section-after-header rounded-3xl lab-pad-panel">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
              {skills.map((s) => (
                <div key={s.name} className="skill-track" data-fill={String(s.level / 100)}>
                  <div className="flex justify-between text-base text-[var(--foreground)]/90 md:text-lg">
                    <span>{s.name}</span>
                    <span className="text-[var(--muted)]">{s.level}%</span>
                  </div>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="skill-bar h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="lab-surface-light">
        <div className="lab-section lab-section-pad">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 07 · Delivery</p>
            <h2 className="reveal-line">How I ship</h2>
            <p className="reveal-line lab-prose mt-8 max-w-3xl text-lg md:text-xl">
              What you get beyond the stack — how scopes are run, sites stay fast, and your team
              stays unblocked after launch.
            </p>
          </div>
          <div className="lab-section-after-header grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {buildPrinciples.map((item) => (
              <div
                key={item.title}
                className="reveal-line lab-glass-on-light flex flex-col rounded-2xl lab-pad-card"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--background)_14%,transparent)] bg-[color-mix(in_oklab,var(--background)_4%,transparent)]"
                  aria-hidden
                >
                  <ShipPrincipleIcon id={item.icon} />
                </div>
                <h3 className="text-[var(--background)]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-[var(--on-light-muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="lab-surface-dark border-t border-white/[0.06]">
        <div className="lab-section lab-section-pad-loose">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 08 · Experience</p>
            <h2 className="reveal-line">Timeline</h2>
          </div>
          <div className="lab-glass lab-section-after-header rounded-3xl lab-pad-panel">
            <div className="relative">
              <div
                className="pointer-events-none absolute bottom-4 left-[10px] top-4 z-0 hidden w-px -translate-x-1/2 bg-white/15 md:block md:left-3 md:bottom-5 md:top-5"
                aria-hidden
              />
              <ul className="relative z-[1] flex flex-col gap-10 md:gap-12">
              {timeline.map((t) => (
                <li
                  key={`${t.year}-${t.org}`}
                  className="reveal-line flex gap-0 md:gap-6"
                >
                  <div className="relative z-[2] hidden w-5 shrink-0 justify-center self-start md:flex md:w-6">
                    <div
                      className="lab-timeline-dot mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 border-[var(--accent)]/75 bg-[var(--background)] shadow-[0_0_18px_rgba(201,168,108,0.35)] md:mt-1 md:h-[14px] md:w-[14px]"
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-sm uppercase tracking-widest text-[var(--muted)]">{t.year}</p>
                    <h3 className="mt-2 text-[var(--foreground)]">{t.title}</h3>
                    <p className="mt-2 text-lg text-[var(--muted)]">{t.org}</p>
                  </div>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="lab-surface-light">
        <div className="lab-section lab-section-pad-loose">
          <div className="lab-section-header">
            <p className="lab-section-kicker text-xs md:text-sm">Chapter 09 · FAQ</p>
            <h2 className="reveal-line">Frequently Asked Questions</h2>
            <p className="reveal-line lab-prose mt-8 max-w-3xl text-lg md:text-xl">
              Quick answers about timeline, communication, payments, and delivery.
            </p>
          </div>
          <div className="lab-section-after-header">
            <FaqSection items={faqs} surface="light" />
          </div>
        </div>
      </section>

      <section id="contact" className="lab-surface-dark lab-surface-dark--flat border-t border-white/[0.06]">
        <div className="lab-section lab-section-pad">
          <div className="reveal-line lab-glass rounded-3xl lab-pad-panel lab-pad-panel--contact">
            <div className="lab-section-header max-w-3xl">
              <p className="lab-section-kicker text-xs md:text-sm">Chapter 10 · Contact</p>
              <h2 className="text-[var(--foreground)]">Let&apos;s talk about your build</h2>
            </div>
            <p className="lab-prose mt-8 max-w-2xl text-lg md:text-xl">
              Email works best for scope and paperwork. For a first chat, book a short call — paid
              engagements only, with written scope and milestones.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 sm:mt-12 sm:gap-5">
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-motion inline-flex items-center gap-2"
              >
                <span>Start a project</span>
                <IconArrowRight className="btn-arrow h-4 w-4" />
              </a>
              <a
                href="mailto:haiderofficial127@gmail.com?subject=Project%20inquiry"
                className="btn-ghost btn-motion"
              >
                haiderofficial127@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="lab-footer" className="lab-surface-dark lab-footer-pad border-t border-white/[0.08]">
        <div className="lab-section text-left">
          <div className="lab-footer-inner text-[var(--muted)]">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
              <div className="md:col-span-5">
                <a
                  href="#"
                  className="font-display lab-nav-brand inline-block text-[var(--foreground)]"
                >
                  MW
                </a>
                <p className="mt-5 max-w-sm text-[16px] leading-relaxed">
                  AI Product Engineer — Next.js, TypeScript, RAG pipelines, and Webflow for UK, UAE,
                  and US teams.
                </p>
                <div className="lab-footer-social mt-7">
                  <a
                    href="https://github.com/haider063-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-footer-social-link"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/haiderhamayoun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-footer-social-link"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:haiderofficial127@gmail.com?subject=Project%20inquiry"
                    className="lab-footer-social-link"
                    aria-label="Email"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M4 6h16v12H4V6z" />
                      <path d="m4 7 8 5.5L20 7" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.link/7ks4ra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-footer-social-link"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-3 md:col-start-7">
                <h3 className="lab-footer-label">
                  On this site
                </h3>
                <ul className="mt-5 space-y-3 text-[16px] text-[var(--foreground)]/85">
                  <li>
                    <a href="#about" className="transition md:hover:text-[var(--accent)]">About</a>
                  </li>
                  <li>
                    <a href="#work" className="transition md:hover:text-[var(--accent)]">Work</a>
                  </li>
                  <li>
                    <a href="#services" className="transition md:hover:text-[var(--accent)]">Services</a>
                  </li>
                  <li>
                    <a href="#experience" className="transition md:hover:text-[var(--accent)]">Experience</a>
                  </li>
                  <li>
                    <a href="#testimonials" className="transition md:hover:text-[var(--accent)]">Testimonials</a>
                  </li>
                  <li>
                    <a href="#faq" className="transition md:hover:text-[var(--accent)]">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <h3 className="lab-footer-label">
                  Connect
                </h3>
                <ul className="mt-5 space-y-3 text-[16px] text-[var(--foreground)]/85">
                  <li>
                    <a
                      href={CAL_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition md:hover:text-[var(--accent)]"
                    >
                      Start a project
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:haiderofficial127@gmail.com?subject=Project%20inquiry"
                      className="transition md:hover:text-[var(--accent)]"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/haiderhamayoun/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition md:hover:text-[var(--accent)]"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-14 flex flex-row flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-sm">
              <p className="text-[var(--muted)]">
                © {new Date().getFullYear()} Muhammad Haider Hamayoun. All rights reserved.
              </p>
              <button
                type="button"
                className="btn-text btn-motion inline-flex items-center gap-2 text-[var(--muted)] transition md:hover:text-[var(--foreground)]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span>Back to top</span>
                <IconArrowUp className="h-3.5 w-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

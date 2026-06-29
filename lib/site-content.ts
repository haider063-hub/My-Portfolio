export type ProjectItem = {
  title: string;
  tag: string;
  href: string;
  /** One line shown on the work card */
  description: string;
  /** Card art under text (`object-cover`); files in `/public/media/projects/` */
  image: string;
  imageAlt: string;
};

export type FaqItem = { question: string; answer: string };

/** From exported Webflow portfolio (`index.html` FAQ block) */
export const faqs: FaqItem[] = [
  {
    question: "How fast can we start?",
    answer:
      "Most projects start within 2-4 business days after scope alignment and initial deposit.",
  },
  {
    question: "How do you handle communication?",
    answer:
      "I provide clear async updates via email and LinkedIn, plus weekly progress checkpoints.",
  },
  {
    question: "What are payment terms?",
    answer:
      "I receive payments from clients for web development services through secure international methods.",
  },
  {
    question: "Do you support after launch?",
    answer: "Yes, I offer post-launch support for fixes, iterations, and performance improvements.",
  },
  {
    question: "Do you build AI-powered features?",
    answer:
      "Yes. I build RAG pipelines, LLM integrations, streaming AI chat, and PII-safe API dispatch into production applications — using OpenAI, Anthropic, and the Vercel AI SDK. AI is a core part of how I build, not an add-on.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "GeneFuel",
    tag: "Health Tech · Full-Stack SaaS",
    href: "https://genefuel.co.uk",
    description:
      "Clinical longevity platform — hybrid RAG AI assistant, PII-safe LLM dispatch, AWS Textract for lab PDFs, wearables OAuth, Stripe billing, Vonage video consultations, and role-based portals.",
    image: "/media/projects/genefuel.png",
    imageAlt: "GeneFuel clinical longevity platform dashboard and branding",
  },
  {
    title: "The GP Service",
    tag: "Healthcare",
    href: "https://booking.thegpservice.co.uk/",
    description:
      "Same-day online GP positioning — consultations, prescriptions, and trust signals in a dense Webflow marketing build.",
    image: "/media/projects/the-gp-service.png",
    imageAlt: "The GP Service marketing site hero and consultation messaging",
  },
  {
    title: "Care Hires",
    tag: "Social care",
    href: "https://carehires.com/",
    description:
      "Agency staffing platform story — visibility, compliance, and shift fulfilment for care providers on Webflow.",
    image: "/media/projects/carehires.png",
    imageAlt: "Care Hires platform marketing site with stats and provider messaging",
  },
  {
    title: "DocNow",
    tag: "Healthcare",
    href: "https://docnow-site.webflow.io/",
    description:
      "AI-assisted clinical triage — patients describe symptoms to Sarah AI, clinician reviews and issues prescriptions, fit notes, or referrals.",
    image: "/media/projects/docnow.png",
    imageAlt: "DocNow AI-assisted clinical triage platform",
  },
  {
    title: "MyUniGP",
    tag: "Student Healthcare",
    href: "https://myunigp.webflow.io/",
    description:
      "Online GP service for university students — sick notes, prescriptions, referrals, and video GP consultations. Same-day decisions.",
    image: "/media/projects/myunigp.png",
    imageAlt: "MyUniGP online GP service for university students",
  },
  {
    title: "Pure Elements",
    tag: "AI",
    href: "https://www.petech.ae/",
    description: "AI-forward product marketing and enterprise-grade Webflow delivery.",
    image: "/media/projects/pure-elements.png",
    imageAlt: "Pure Elements product marketing visuals",
  },
  {
    title: "Cogeter Fitness",
    tag: "Commerce",
    href: "https://trainwithlev.com/",
    description: "Commerce experience for a fitness brand with fast storefront UX.",
    image: "/media/projects/cogeter-fitness.png?v=2",
    imageAlt: "Cogeter Fitness brand and storefront imagery",
  },
  {
    title: "Dental ID",
    tag: "Forensic SaaS",
    href: "https://www.dentalid.app/",
    description: "Clinical SaaS narrative and landing structure for forensic dental workflows.",
    image: "/media/projects/dental-id.png",
    imageAlt: "Dental ID clinical SaaS marketing visuals",
  },
  {
    title: "Lithia Rewards",
    tag: "Enterprise",
    href: "https://totalrewards.lithiadriveway.com/",
    description: "Enterprise rewards microsite with dense content organized for scanning.",
    image: "/media/projects/lithia.png",
    imageAlt: "Lithia Rewards enterprise programme visuals",
  },
  {
    title: "TNTOpenMind",
    tag: "Healthcare narrative",
    href: "https://tntopenmind.org/",
    description: "Healthcare storytelling site with clear donor and community pathways.",
    image: "/media/projects/tnt-openminds.png",
    imageAlt: "TNTOpenMind healthcare storytelling imagery",
  },
];

export const services = [
  {
    title: "Webflow & CMS",
    body: "Marketing sites, CMS architecture, Client-First framework, Finsweet Attributes, GSAP animations, and a clean handoff so your team can edit with confidence.",
  },
  {
    title: "Next.js & React",
    body: "App Router, TypeScript, performance budgets, auth, Stripe billing, and AI feature integration that stays fast as features and traffic grow.",
  },
  {
    title: "APIs & integration",
    body: "PostgreSQL schema design, RAG pipelines, LLM integration, wearables OAuth, AWS Textract, Stripe webhooks — the full backend your product needs.",
  },
];

/** Engagement workflow — edit copy to match your real process */
export const processSteps = [
  {
    step: "01",
    title: "Discovery & scope",
    body: "Goals, audience, constraints, and a written scope with milestones so delivery stays predictable.",
  },
  {
    step: "02",
    title: "Structure & design in code",
    body: "IA, components, and motion only where it earns its place — Webflow or Next.js, depending on the stack.",
  },
  {
    step: "03",
    title: "Build & integrate",
    body: "CMS wiring, APIs, auth, analytics, and performance passes with realistic content and traffic in mind.",
  },
  {
    step: "04",
    title: "Launch & handoff",
    body: "Staging sign-off, production deploy, docs, and a handoff so your team owns what ships.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  /** Slightly larger logo tile (e.g. low-detail mark) */
  avatarLarge?: boolean;
};

/** From exported Webflow portfolio (`index.html` #testimonials) */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Precision and speed are what we look for in the Dubai market. Haider’s methodology and use of the Finsweet framework ensured our project was delivered with enterprise-grade quality.",
    name: "Hamad Rashid",
    role: "CEO, Pure Elements Technologies",
    avatar: "/media/testimonials/petch.avif",
  },
  {
    quote:
      "A true Webflow Architect. He bridged the gap between my complex designs and a functional, sub-second loading reality. His performance audits are a game-changer for SEO.",
    name: "Gino Whitaker",
    role: "Co-Founder, Pixeler Interactive Group",
    avatar: "/media/testimonials/piglogo.avif",
    avatarLarge: true,
  },
  {
    quote:
      "Working with a developer who understands both pixel-perfect Webflow design and complex backend logic is rare. Haider delivered a high-performance platform that exceeded our London team's expectations.",
    name: "Suleman Sacranie",
    role: "Founder, Prime Start Capital",
    avatar: "/media/testimonials/67920a331ab7a9aaf3c5ab81_FAV-B2-2.avif",
  },
  {
    quote:
      "Haider is a rare find who collaborates on a deep technical level. He bridges the gap between complex API logic and high-end design without compromising performance. He speaks the language of an engineer with the polish of an architect.",
    name: "Ammar Ahmad",
    role: "Full Stack Developer, Punch Group",
    avatar: "/media/testimonials/favicon-32x32.avif",
  },
  {
    quote:
      "Haider solved technical challenges in Webflow that other developers said required a complete custom build. His GSAP animations and custom JS injection brought our vision to life seamlessly.",
    name: "Ali Abbas Jaffari",
    role: "Co-Founder, SiteGrowth",
    avatar: "/media/testimonials/6883c1cdd3a9ebfdf3441ec9_256x256.avif",
  },
  {
    quote:
      "Haider doesn’t just build sites; he engineers digital systems. His Computer Science background is evident in how he structures scalable, logical CMS architectures that never break.",
    name: "Ahmad Hassan",
    role: "Senior Frontend Developer, Punch Group",
    avatar: "/media/testimonials/favicon-32x32.avif",
  },
];

export const skills: { name: string; level: number }[] = [
  { name: "Next.js / React", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "AI / LLM Integration", level: 90 },
  { name: "Webflow / CMS", level: 95 },
  { name: "PostgreSQL / APIs", level: 88 },
  { name: "Node.js / Backend", level: 86 },
  { name: "Motion · GSAP / anime.js", level: 88 },
];

export const timeline = [
  {
    year: "Jan 2025—present",
    title: "Senior Software Engineer | Full-stack engineer & Webflow",
    org: "SiteGrowth · London Area, UK · Remote",
  },
  {
    year: "Feb 2025—Jan 2026",
    title: "Webflow Developer",
    org: "Pure Elements Technologies · Dubai, UAE · Remote",
  },
  {
    year: "Dec 2023—Feb 2025",
    title: "Webflow Developer",
    org: "Punch Group · Lahore, Pakistan · Hybrid",
  },
  {
    year: "Oct 2021—Jun 2025",
    title: "B.S. Computer Science",
    org: "University of the Punjab · Lahore, Pakistan",
  },
];

export type BuildPrincipleIconId = "performance" | "cms" | "motion" | "handover" | "ai";

export type BuildPrinciple = { title: string; body: string; icon: BuildPrincipleIconId };

/** Delivery standards — replaces the old “OSS toolkit” strip */
export const buildPrinciples: BuildPrinciple[] = [
  {
    icon: "performance",
    title: "Performance ground rules",
    body: "Core Web Vitals, image and script discipline, and pragmatic caching so sites stay fast after handoff — not only on launch day.",
  },
  {
    icon: "cms",
    title: "CMS your team can own",
    body: "Webflow collections, editor guardrails, and naming that marketing can extend without breaking layout, SEO, or tracking.",
  },
  {
    icon: "motion",
    title: "Motion with restraint",
    body: "Interaction when it earns attention; prefers-reduced-motion respected, focus states obvious, and animations that do not fight content.",
  },
  {
    icon: "handover",
    title: "Clear handover",
    body: "Written scope and milestones, plus light documentation so stakeholders know what shipped, where it lives, and how to extend it safely.",
  },
  {
    icon: "ai",
    title: "AI-native builds",
    body: "LLM integration, RAG pipelines, and PII-safe API dispatch built into production systems — not bolted on after launch.",
  },
];

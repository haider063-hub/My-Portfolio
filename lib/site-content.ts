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
];

export const projects: ProjectItem[] = [
  {
    title: "The GP Service",
    tag: "UK · Healthcare",
    href: "https://thegpservice.webflow.io/",
    description:
      "Same-day online GP positioning — consultations, prescriptions, and trust signals in a dense Webflow marketing build.",
    image: "/media/projects/the-gp-service.png",
    imageAlt: "The GP Service marketing site hero and consultation messaging",
  },
  {
    title: "Care Hires",
    tag: "UK · Social care",
    href: "https://carehire.webflow.io/",
    description:
      "Agency staffing platform story — visibility, compliance, and shift fulfilment for care providers on Webflow.",
    image: "/media/projects/carehires.png",
    imageAlt: "Care Hires platform marketing site with stats and provider messaging",
  },
  {
    title: "Pure Elements",
    tag: "Abu Dhabi · AI",
    href: "https://www.petech.ae/",
    description: "AI-forward product marketing and enterprise-grade Webflow delivery.",
    image: "/media/projects/pure-elements.png",
    imageAlt: "Pure Elements product marketing visuals",
  },
  {
    title: "Cogeter Fitness",
    tag: "Dubai · Commerce",
    href: "https://fitness.cogeter.com/",
    description: "Commerce experience for a Dubai fitness brand with fast storefront UX.",
    image: "/media/projects/cogeter-fitness.png",
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
    title: "TNTOpenMind",
    tag: "Healthcare narrative",
    href: "https://tntopenmind.org/",
    description: "Healthcare storytelling site with clear donor and community pathways.",
    image: "/media/projects/tnt-openminds.png",
    imageAlt: "TNTOpenMind healthcare storytelling imagery",
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
    title: "GeneFuel",
    tag: "Longevity",
    href: "https://genefuel.webflow.io/",
    description: "Longevity brand prototype with science-led sections and premium pacing.",
    image: "/media/projects/genefuel.png",
    imageAlt: "GeneFuel longevity brand imagery",
  },
];

export const services = [
  {
    title: "Webflow & CMS",
    body: "Marketing sites, CMS architecture, interactions, and a clean handoff so your team can edit with confidence.",
  },
  {
    title: "Next.js & React",
    body: "App Router, performance budgets, and UI that stays fast as features and traffic grow.",
  },
  {
    title: "APIs & integration",
    body: "Node services, auth, payments, and the glue between your design system and real data.",
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

export const skills: { label: string; v: number }[] = [
  { label: "Webflow / CMS", v: 0.95 },
  { label: "React / Next.js", v: 0.92 },
  { label: "Node / APIs", v: 0.88 },
  { label: "Motion · GSAP / anime.js", v: 0.9 },
];

export const timeline = [
  {
    year: "Feb 2026—present",
    title: "Senior Software Engineer | Full-stack engineer & Webflow",
    org: "SiteGrowth · London Area, UK · Remote",
  },
  {
    year: "Jul 2025—present",
    title: "Software Engineer",
    org: "SiteGrowth · London Area, UK · Remote · Part-time",
  },
  {
    year: "Jan 2025—present",
    title: "Webflow Developer",
    org: "Prime Start Capital · London, UK · Remote · Part-time",
  },
  {
    year: "Feb 2025—Jan 2026",
    title: "Webflow Developer",
    org: "Pure Elements Technologies · Dubai, UAE · Remote · Full-time",
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

export type BuildPrincipleIconId = "performance" | "cms" | "motion" | "handover";

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
];

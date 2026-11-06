export interface Project {
  projectName: string;
  /** Short one-liner used in the selected-work index. */
  tagline?: string;
  description: string;
  link: string;
  /** Internal case-study route, if one exists. */
  caseStudyHref?: string;
  technologies: string[];
  category: "Web App" | "Mobile App" | "Infrastructure" | "Other";
  featured?: boolean;
  /** True when Abdul is the lead author / primary engineer of the codebase. */
  leadAuthor?: boolean;
  /** True when the live URL is internal / login-gated and shouldn't be a public clickable link. */
  internal?: boolean;
  /** True when the product has been decommissioned and its host no longer serves. */
  retired?: boolean;
  role?: string;
  year?: string;
  /** A single headline number for the card. */
  metric?: { value: string; label: string };
}

const projects: Project[] = [
  {
    projectName: "Keenu One Storefront",
    tagline:
      "Multi-tenant restaurant ordering platform — one codebase, many merchant domains, merchant-designed.",
    description:
      "Primary engineer — 85% of the surviving source (about 319,000 of 375,000 lines across 2,688 files); the next contributor accounts for under 6%. One Next.js 16 / React 19 codebase serves many restaurants, each on their own branded domain: tenancy resolves in edge middleware against a custom-domains table I built end to end, pages are server-rendered with JSON-LD for SEO, and ten visually isolated themes (eight of them mine) sit behind a registry and a typed config contract, with ESLint-enforced boundaries so themes never import each other. Underneath the themes is a parts catalog I wrote — 29 shared parts (header, hero, menu, cart, checkout, orders, footer, custom-page blocks) with several looks each — so a merchant designs their store on a live canvas in the visual builder and publishes without a deploy; a blank base theme is assembled from those parts alone. Cross-theme behaviour is held by registry-driven parity suites that fail a new theme by name until it complies. Seven brands are live — Siroc, If You Like Cheese, Down South, Caffè Praha, Cantina, Purple Cow and Braci — with Cosmo on staging, launching next. I built the menu, cart (Zustand), checkout and order tracking, 993 of the 1,145 Vitest test files and all 19 Playwright browser journeys, and the performance instrumentation: a web-vitals RUM reporter feeding Prometheus. I'm also the top contributor to the storefront's Go BFF, and I own the storefront's Docker, CI/CD, staging and production deploys.",
    link: "https://www.sirocpk.com",
    caseStudyHref: "/case-study/keenu-storefront",
    technologies: [
      "Next.js 16",
      "React 19",
      "React Compiler",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand",
      "Zod",
      "Go (BFF)",
      "Vitest",
      "Playwright",
      "Prometheus",
      "Storybook",
      "SSR / JSON-LD",
      "Multi-tenant",
    ],
    category: "Web App",
    featured: true,
    leadAuthor: true,
    role: "Primary engineer",
    year: "2026",
    metric: { value: "85% of 375k lines", label: "7 brands live · 10 themes · 1,145 test files" },
  },
  {
    projectName: "Keenu One Merchant Dashboard",
    tagline:
      "Operations dashboard for restaurants — menu, branches, delivery zones, POS, and the storefront builder.",
    description:
      "The merchant-facing control panel for the Keenu One platform — a React 19 + Vite SPA. I own its storefront builder at 84% of that feature's code (22,413 of 26,523 lines): a visual editor that opens the merchant's real storefront on a canvas, where they click any word to reword it, click any box to style it (spacing, corners, borders, shadows, colours), set phone-specific values, pick fonts, build their own pages from catalog parts, and publish — with drafts, version history, undo, a start-over path and publish checks that warn about unreadable colours or broken sections. The theme, branding, SEO and custom-domain screens are mine too. The wider app — built with the team — also covers catalog/menu management, branches, map-based delivery zones, a canvas floor-plan editor, promotions, role-based access and analytics.",
    link: "https://console.keenu.one",
    technologies: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "TanStack Query",
    ],
    category: "Web App",
    featured: true,
    internal: true,
    role: "Owner — storefront builder",
    year: "2026",
    metric: { value: "84%", label: "of the storefront builder · 26.5k lines" },
  },
  {
    projectName: "Bazaar Web App",
    tagline:
      "Flagship B2C grocery web for Pakistan — performance & Core Web Vitals.",
    description:
      "Flagship B2C e-commerce web for Pakistan's largest grocery platform (Next.js + NestJS). Co-led the image-optimization + CDN pipeline that took Core Web Vitals from failing to Passed (40% p75 LCP cut, INP 169 ms, Lighthouse 92) under Pakistani 3G/4G conditions. Organic search grew from ~0 to 156K total clicks / 11.2M impressions (Google Search Console). Cut CDN spend by ~$5,400/year. Drove the MUI → Tailwind + Radix migration on the same app. The platform was decommissioned in 2026 when the company pivoted to Keenu — the case study keeps the captured receipts.",
    link: "https://www.bazaarapp.com",
    caseStudyHref: "/case-study/bazaar-performance",
    retired: true,
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "React",
      "Tailwind",
      "AWS",
      "CloudFront",
    ],
    category: "Web App",
    featured: true,
    role: "Lead frontend",
    year: "2023—26",
    metric: { value: "INP 169ms", label: "CWV Passed · Lighthouse 92" },
  },
  {
    projectName: "Keenu Corporate Site",
    tagline:
      "Marketing site for Keenu's digital-payments & POS business.",
    description:
      "Lead author — I built the Keenu corporate site end-to-end. The public marketing and product site for Keenu's digital-payments and POS business (Bazaar group) — home, services, company, careers and newsroom. Built on Next.js with Tailwind, server-rendered for SEO and responsive across breakpoints.",
    link: "https://keenu.pk",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR / SEO"],
    category: "Web App",
    featured: true,
    leadAuthor: true,
    role: "Lead author",
  },
  {
    projectName: "Bazaar Partner Portal",
    tagline: "Internal vendor-analytics surface for Bazaar's partner ecosystem.",
    description:
      "Internal React application built for Bazaar's partner ecosystem, providing partner insights and analytics. Integrated Bazaar's internal component library for consistent UX, and used React Query for efficient data fetching and server-state management.",
    link: "https://partners.bazaar.technology",
    technologies: ["React", "TypeScript", "MUI", "React Query", "REST APIs"],
    category: "Web App",
    role: "Frontend",
    year: "2023—24",
    internal: true,
  },
  {
    projectName: "Bazaar Grocery Delivery App",
    tagline: "Pakistan's leading grocery delivery app — 1M+ downloads, 4.4★.",
    description:
      "Pakistan's leading grocery delivery app, serving 1M+ downloads at a 4.4★ rating across Karachi, Lahore and Islamabad. I contributed customer-facing features cross-platform (web and Android), including the PM-designed gamification feature I built — average order value (AOV) rose 47%.",
    link: "https://play.google.com/store/apps/details?id=bazaar.tech.com&hl=en",
    technologies: ["Android", "Kotlin", "Jetpack Compose"],
    category: "Mobile App",
    role: "Feature contributor",
    metric: { value: "1M+", label: "downloads · 4.4★" },
  },
  {
    projectName: "Check My DBS",
    tagline: "DBS certificate verification platform for UK companies.",
    description:
      "DBS certificate verification platform for UK companies, allowing businesses to check and validate employee background checks online. Built with React, Next.js, TypeScript and RTK Query for a fast, secure verification workflow.",
    link: "https://checkmydbs.co.uk",
    technologies: ["React", "Next.js", "TypeScript", "RTK Query", "REST APIs"],
    category: "Web App",
    role: "Frontend",
    retired: true,
  },
  {
    projectName: "Bazaar Agent App",
    tagline: "Field-agent operations app for Bazaar across Pakistan.",
    description:
      "Mobile application for Bazaar field agents — customer management, order processing, inventory tracking and performance analytics — supporting agent workflows across Pakistan's major cities. I contributed customer-facing features on Android.",
    link: "https://play.google.com/store/apps/details?id=com.tech.bazaar.agent&hl=en",
    technologies: ["Android", "Kotlin", "Offline Support"],
    category: "Mobile App",
    role: "Feature contributor",
  },
  {
    projectName: "MYSITE Construction Platform",
    tagline: "Reality capture & project collaboration for construction teams.",
    description:
      "Construction technology platform for reality capture and project collaboration. Enables visual site documentation, remote project management and efficient dispute resolution for construction teams.",
    link: "https://mysitetech.com/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AWS Amplify"],
    category: "Web App",
    role: "Frontend",
  },
];

export default projects;

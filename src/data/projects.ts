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
  /** True when Abdul is the sole author of the codebase. */
  soleAuthor?: boolean;
  role?: string;
  year?: string;
  /** A single headline number for the card. */
  metric?: { value: string; label: string };
  localIcon?: string;
}

const projects: Project[] = [
  {
    projectName: "Keenu One Storefront",
    tagline:
      "Multi-tenant restaurant ordering platform — one codebase, many merchant domains.",
    description:
      "Sole author. A single Next.js 16 / React 19 codebase that serves multiple restaurants, each on their own branded domain. Tenancy is resolved at the edge (host → org, HMAC-signed cookies), and pages are server-rendered with structured JSON-LD for SEO. I architected a manifest-driven theme system — design tokens plus per-merchant config — built to host many themes; the first merchant, Siroc, is live in production at sirocpk.com. ~24K lines spanning menu, cart (Zustand), checkout and order tracking, integrated with a Go BFF.",
    link: "https://sirocpk.com",
    caseStudyHref: "/case-study/keenu-storefront",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand",
      "TanStack Query",
      "SSR / JSON-LD",
      "Multi-tenant",
    ],
    category: "Web App",
    featured: true,
    soleAuthor: true,
    role: "Sole author",
    year: "2025—26",
    metric: { value: "~24K", label: "lines · sole author" },
  },
  {
    projectName: "Keenu One Merchant Dashboard",
    tagline:
      "Operations dashboard for restaurants — menu, branches, delivery zones, POS.",
    description:
      "The merchant-facing control panel for the Keenu One platform — a React 19 + Vite SPA. I built end-to-end frontend flows across its operations surfaces, including the interactive map-based delivery-zone editor (Leaflet + Turf + Geoman). The wider app covers catalog/menu management, branches, a canvas floor-plan editor (Konva), POS, promotions, role-based access and analytics (Recharts).",
    link: "https://console.keenu.one",
    technologies: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "TanStack Query",
      "Leaflet / Turf",
    ],
    category: "Web App",
    featured: true,
    role: "Frontend — end-to-end flows",
    year: "2025—26",
  },
  {
    projectName: "Bazaar Web App",
    tagline:
      "Flagship B2C grocery web for Pakistan — performance & Core Web Vitals.",
    description:
      "Flagship B2C e-commerce web for Pakistan's largest grocery platform (Next.js + NestJS). Co-led the image-optimization + CDN pipeline that took Core Web Vitals from failing to Passed (40% LCP cut, Lighthouse 92) under Pakistani 3G/4G conditions. Organic search grew from ~0 to 156K monthly clicks / 11.2M impressions. Cut CDN spend by ~$5,400/year. Drove the MUI → Tailwind + Radix migration on the same app.",
    link: "https://www.bazaarapp.com",
    caseStudyHref: "/case-study/bazaar-performance",
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
    year: "2023—Present",
    metric: { value: "Lighthouse 92", label: "CWV: Passed" },
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
  },
  {
    projectName: "Bazaar Grocery Delivery App",
    tagline: "Pakistan's leading grocery delivery app — 1M+ downloads, 4.5★.",
    description:
      "Pakistan's leading grocery delivery app, serving 1M+ downloads at a 4.5★ rating across Karachi, Lahore and Islamabad. I contributed customer-facing features cross-platform (web and Android), including the gamification feature that lifted customer order value 47%.",
    link: "https://play.google.com/store/apps/details?id=bazaar.tech.com&hl=en",
    technologies: ["Android", "Kotlin", "Jetpack Compose"],
    category: "Mobile App",
    role: "Feature contributor",
    metric: { value: "1M+", label: "downloads · 4.5★" },
    localIcon: "/images/app-icons/bazaarapplogo.webp",
  },
  {
    projectName: "Check My DBS",
    tagline: "DBS certificate verification platform for UK companies.",
    description:
      "DBS certificate verification platform for UK companies, allowing businesses to check and validate employee background checks online. Built with React, Next.js, TypeScript and RTK Query for a fast, secure verification workflow.",
    link: "https://app-dev.checkmydbs.co.uk/login",
    technologies: ["React", "Next.js", "TypeScript", "RTK Query", "REST APIs"],
    category: "Web App",
    role: "Frontend",
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
    localIcon: "/images/app-icons/bazaaragent.webp",
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
  {
    projectName: "Bazaar Website",
    tagline: "Corporate site with dynamic job-postings integration.",
    description:
      "Corporate website with dynamic job-postings integration using WebFlow, HTML, CSS and Vanilla JavaScript. Responsive design with SEO optimization.",
    link: "https://bazaartech.com",
    technologies: ["WebFlow", "HTML", "CSS", "JavaScript", "SEO"],
    category: "Web App",
  },
];

export default projects;

// Single source of truth for both résumé variants.
//
// Every claim here is git-verified against /Users/malikabdul/KeenuOne and the
// Bazaar repos. Numbers carry their provenance in comments so they can be
// re-checked before each application round rather than drifting.
//
// ATS rules enforced by template.mjs (do not work around them here):
//   - ASCII only. No en dashes, em dashes, arrows, curly quotes, nbsp.
//   - No dates inside a job-title line (parsers bind them to the title and
//     under-report tenure). Years only, inside bullets.
//   - Hyphenated compounds are auto-wrapped so the PDF text layer never
//     concatenates them ("manifest-driven" must not extract as "manifestdriven").

export const contact = {
  name: "Malik Abdul Rehman Khursheed",
  location: "Remote (UTC+5)",
  availability: "Overlaps CET fully, US East mornings",
  phone: "+92 304 591 9454",
  email: "malik.ali5560@gmail.com",
  linkedin: "linkedin.com/in/malik-abdul-rehman",
  github: "github.com/AbdulRehmanKhursheed",
  portfolio: "abdul-rehman-portfolio-ecru.vercel.app",
};

// ---------------------------------------------------------------------------
// Experience bullets, keyed so each variant can pick order and emphasis
// without the two documents drifting apart.
// ---------------------------------------------------------------------------

const keenuBullets = {
  // 110,889 of 126,921 surviving lines in src/**/*.ts(x) via git blame at HEAD;
  // next contributor 3,526 lines. 629 of 797 non-merge commits.
  authorship:
    "Took the Keenu One storefront from zero to three merchant brands live on their own domains, with two more in staging. One Next.js 16 and React 19 codebase serves all of them, so a new brand ships as a theme plus config rather than a fork. Primary engineer: 912 files, next contributor under 3%.",

  // src/themes/{siroc,cosmo,iylc,downsouth} + registry.ts + config/contract.ts;
  // 40+ *Parity.test.tsx suites; eslint boundary rules.
  architecture:
    "Designed the theme architecture that lets one codebase serve many brands: four visually isolated themes behind a registry and a typed config contract, tenant resolution in edge middleware, and ESLint-enforced module boundaries so themes never import each other. Registry-driven parity test suites fail a new theme by name until it complies.",

  // 433 *.test.ts(x) files, 19 e2e files, playwright visual baselines,
  // check-token-contract.mjs / check-theme-parity.mjs / check-alert-values.mjs
  quality:
    "Built the quality gate the platform ships behind: 433 unit test files in Vitest, 19 Playwright browser journeys with visual-regression baselines, plus custom design-token contract and theme-parity checks. CI runs format, lint, typecheck, the full suite, build and end-to-end journeys on every push.",

  // src/components/observability/WebVitalsReporter.tsx, src/app/api/observe/route.ts,
  // src/lib/metrics.ts (prom-client) - all sole-authored.
  observability:
    "Instrumented production performance end-to-end, sole authoring the web-vitals RUM reporter, its collection endpoint and the Prometheus metrics layer, so INP, LCP and CLS are measured on real merchant traffic instead of synthetic runs.",

  // 5,053 Go lines by blame (next: 2,763); 60 of 185 non-merge commits.
  // devops/ 9/9, .github/ 12/15, Makefile 85/121.
  backend:
    "Top contributor to the storefront's Go backend-for-frontend, roughly a third of the Go codebase, covering bootstrap and config, menu and order flows. Own its Docker image, Makefile tooling, GitHub Actions pipelines and staging deploys.",

  // keenu-one-identity: 33 non-merge commits. Zitadel IAM gates, service-account
  // token caching, auto-generated openapi.json + CI drift check.
  // Merged with `backend` in the full-stack variant to hold two pages.
  backendAndIdentity:
    "Top contributor to the storefront's Go backend-for-frontend, roughly a third of the Go codebase (bootstrap, config, menu and order flows), and own its Docker image, Makefile tooling, GitHub Actions and staging deploys. In the Go identity service: merchant and admin endpoint gates, Zitadel IAM checks on admin routes, service-account token caching, and OpenAPI generation with a CI drift check.",

  // 9,299 of 11,964 surviving lines in src/features/storefront-config (78%);
  // 70 commits vs next contributor 9.
  portal:
    "Own the storefront-configuration surface in the Keenu One merchant portal, a React 19 and Vite application, at 78% of that feature's code. These are the theme, branding and SEO editors that drive every live storefront.",

  // Framed as governance, deliberately detached from the authorship claim.
  agentic:
    "Built the guardrails that keep an agent-assisted workflow safe at this scale: typed API clients, registry-driven parity suites, design-token contracts and enforced review gates.",

  // Verified receipts: CrUX INP 169ms mobile / 76ms desktop, Lighthouse 92,
  // GSC 156K total clicks / 11.2M impressions, ~$450/mo CDN saving.
  // bazaarapp.com returned 403 as of Aug 2026 after the company pivot.
  bazaarPerf:
    "Led frontend on bazaarapp.com, Pakistan's largest B2C grocery web app, on Next.js with a NestJS backend-for-frontend. Co-led the image and CDN pipeline and the SEO foundations behind the Core Web Vitals, search and CDN results above.",

  bazaarProduct:
    "Built the PM-designed gamification feature end-to-end and drove the MUI to Tailwind and Radix migration on the same app, raising average order value by 47%.",

  promotion:
    "Promoted twice in three years: Software Engineer II, to Senior in 2024, to Senior II in 2026.",
};

const orcaloBullets = [
  "Led the team under the Frontend Lead across client projects in React, Next.js, Angular and Node.js.",
  "Introduced the Component-Container pattern across the frontend codebase, separating UI from business logic and making shared behaviour testable.",
  "Integrated React Query into legacy Redux-heavy applications, cutting redundant re-renders and duplicate API calls.",
  "Joined as a Junior Node.js Developer building server-side APIs and third-party integrations across Airtable, Twilio SMS and SendGrid before moving into frontend leadership.",
];

const webMekanicsBullets = [
  "Built responsive frontends for automobile products.",
  "Built REST APIs in Django serving real-time data insights.",
];

function experience(keenuOrder) {
  return [
    {
      company: "Bazaar Technologies (now Keenu One)",
      location: "Islamabad, Pakistan",
      dates: "Mar 2023 - Present",
      title: "Senior Software Engineer II",
      bullets: keenuOrder.map((k) => keenuBullets[k]),
    },
    {
      company: "Orcalo Holdings",
      location: "Rawalpindi, Pakistan",
      dates: "Aug 2021 - Mar 2023",
      title: "Senior Frontend Engineer, Junior Frontend Team Lead",
      bullets: orcaloBullets,
    },
    {
      company: "Web Mekanics",
      location: "Rawalpindi, Pakistan",
      dates: "Nov 2020 - Jun 2021",
      title: "Software Engineer Intern, Frontend and Python",
      bullets: webMekanicsBullets,
    },
  ];
}

// ---------------------------------------------------------------------------
// Shared tail sections
// ---------------------------------------------------------------------------

// Lifted from the resume version that actually converted for him: five
// outcome-first lines, each carrying a number, placed above Technical Skills.
// A recruiter's first six seconds land here, not on a technology list.
export const keyAchievements = [
  "Zero to three live merchant brands - Built and own the multi-tenant storefront platform behind sirocpk.com, ifyoulikecheese.com and downsouth.coffee. One Next.js 16 codebase, four themes, so a new brand ships as config rather than a fork.",
  "Core Web Vitals: Passed - Co-led the image and CDN pipeline that cut p75 LCP 40% and held INP at 169 ms, at Lighthouse 92, on a flagship app with 100k+ active web users on Pakistani 3G and 4G.",
  "Organic search from zero to 156K clicks - 11.2M impressions in Google Search Console, from structured data, metadata hygiene and a sitemap matching the real category tree.",
  "$5,400 a year cut from CDN spend - Per-asset cache-control and TTL tuning plus origin shielding across web and Android, roughly $450 a month.",
  "47% increase in average order value - Built the product-designed gamification feature end-to-end on the customer web app.",
  "Hired and led a team of 24 - Interviewed, hired and ran delivery and mentoring for 24 junior frontend engineers across multiple client projects.",
];

export const projects = [
  "Keenu One Storefront, sirocpk.com, ifyoulikecheese.com and downsouth.coffee. Multi-tenant Next.js 16 platform, primary engineer, 87% of the code.",
  "Keenu One Merchant Portal, console.keenu.one. React 19 and Vite operations dashboard, owner of the storefront-configuration surface.",
  "Keenu Corporate Site, keenu.pk. Next.js and Tailwind marketing site for the payments and POS business, sole author.",
  "Check My DBS - certificate-verification platform for UK companies, on React, Next.js, TypeScript and RTK Query.",
  "Bazaar Grocery App, Android, 1M+ downloads on Google Play. Customer-facing features across web and Android.",
  "Bazaar Web App, bazaarapp.com. Lead frontend on Pakistan's largest B2C grocery web app. Core Web Vitals pass at Lighthouse 92.",
];

export const education = {
  degree: "BS Computer Science",
  school: "HITEC University, Taxila",
  dates: "2017 - 2021",
  detail: "GPA 3.29 of 4.00",
};

export const certifications = [
  "AWS Certified Solutions Architect - Associate (in progress)",
  "AWS Technical Essentials, Coursera",
  "React with Redux and Next.js, Academind",
  "Angular Mastery, Academind",
  "Node.js, Code with Mosh",
  "Microsoft MTA: Introduction to Python",
];

export const achievements = [
  "Hackathon Runner-Up, Bazaar Technologies.",
  "Speed Programming Runner-Up, HITEC University.",
];

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const variants = {
  fullstack: {
    slug: "fullstack",
    fileName: "AbdulRehman_FullStack_Engineer_Resume",
    role: "Senior Full-Stack Engineer (React, Next.js, TypeScript, Go, Node.js)",
    summary:
      "Took a multi-tenant commerce platform from zero to three live merchant brands and own it end-to-end: React 19 and Next.js 16 on the front, a Go backend-for-frontend behind it, plus the CI/CD, Docker and production observability around both. 6 years building for high-latency emerging markets, where performance is a product requirement rather than a nice-to-have: I drove Pakistan's largest B2C grocery web app to a Core Web Vitals pass at Lighthouse 92 and organic search from zero to 156K clicks.",
    skills: [
      [
        "Languages",
        "TypeScript, JavaScript (ES2024), Go, HTML5, CSS3, Python",
      ],
      [
        "Frontend",
        "Next.js 16 (App Router, React Server Components), React 19, React Compiler, Redux and Redux Toolkit, React Query, Zustand, Zod, Tailwind CSS 4, Radix UI, MUI, SCSS, design tokens, WCAG accessibility",
      ],
      [
        "Backend and APIs",
        "Go, Node.js, NestJS, Express, REST, backend-for-frontend pattern, MongoDB, OAuth2 and OIDC (Zitadel), Firebase Auth, OpenAPI",
      ],
      [
        "Testing and quality",
        "Vitest, Jest, React Testing Library, Playwright end-to-end and visual-regression, contract tests, TDD, code review",
      ],
      [
        "Cloud and DevOps",
        "AWS (S3, CloudFront, Lambda, Route 53), Docker, GitHub Actions, CI/CD, Vercel, semantic-release, Makefile tooling",
      ],
      [
        "Performance and observability",
        "Core Web Vitals (INP, LCP, CLS), Prometheus, RUM and web-vitals instrumentation, Lighthouse, CrUX, Google Search Console, CDN and caching strategy, image pipelines",
      ],
      [
        "Architecture and practice",
        "Multi-tenant SaaS, front-end architecture, server-side rendering and JSON-LD SEO, edge middleware, modular boundaries enforced in lint, micro-frontend boundaries, Clean Architecture, Component-Container pattern, SOLID, Agile, agent-assisted development, mentoring",
      ],
    ],
    keenuOrder: [
      "authorship",
      "architecture",
      "backendAndIdentity",
      "quality",
      "observability",
      "portal",
      "agentic",
      "bazaarPerf",
      "promotion",
    ],
  },

  frontend: {
    slug: "frontend",
    fileName: "AbdulRehman_Frontend_Engineer_Resume",
    role: "Front-End Heavy Full-Stack Engineer (React, Next.js, TypeScript, Go)",
    summary:
      "Took a multi-tenant commerce platform from zero to three live merchant brands on Next.js 16 and React 19, behind 433 unit test files and Playwright visual regression. 6 years building B2C web for high-latency markets, where performance is a product requirement: I drove Pakistan's largest B2C grocery web app to a Core Web Vitals pass at INP 169 ms and Lighthouse 92, and grew organic search from zero to 156K clicks. Comfortable past the browser too, as top contributor to the storefront's Go backend-for-frontend and owner of its CI/CD and staging deploys.",
    skills: [
      [
        "Core",
        "TypeScript, JavaScript (ES2024), HTML5, CSS3, Next.js 16 (App Router, React Server Components), React 19, React Compiler",
      ],
      [
        "State and data",
        "Redux and Redux Toolkit, React Query, Zustand, Zod, typed API clients, REST, OpenAPI",
      ],
      [
        "Styling and design systems",
        "Tailwind CSS 4, Radix UI, MUI, SCSS, design tokens, theming, WCAG accessibility",
      ],
      [
        "Testing and quality",
        "Vitest, Jest, React Testing Library, Playwright end-to-end and visual-regression, contract tests, TDD, code review",
      ],
      [
        "Performance",
        "Core Web Vitals (INP, LCP, CLS), Lighthouse, CrUX, RUM and web-vitals instrumentation, image pipelines, CDN and caching strategy, Google Search Console",
      ],
      [
        "Platform and delivery",
        "Go, Node.js, NestJS, backend-for-frontend pattern, Firebase Auth, OAuth2 and OIDC, Docker, GitHub Actions, CI/CD, AWS (S3, CloudFront, Lambda), Vercel, Prometheus",
      ],
      [
        "Architecture and practice",
        "Multi-tenant SaaS, front-end architecture, server-side rendering and JSON-LD SEO, edge middleware, modular boundaries enforced in lint, micro-frontend boundaries, Clean Architecture, Component-Container pattern, SOLID, Agile, agent-assisted development, mentoring",
      ],
    ],
    keenuOrder: [
      "authorship",
      "architecture",
      "quality",
      "observability",
      "portal",
      "backend",
      "agentic",
      "bazaarPerf",
      "promotion",
    ],
  },
};

export function buildVariant(key) {
  const v = variants[key];
  if (!v) throw new Error(`Unknown resume variant: ${key}`);
  return { ...v, experience: experience(v.keenuOrder) };
}

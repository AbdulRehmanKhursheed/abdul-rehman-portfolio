const skills = [
  {
    group: "Frontend",
    items:
      "Next.js 16 (App Router · RSC) · React 19 · React Compiler · TypeScript · Redux / RTK · React Query · Zustand · Zod · Tailwind 4 · Radix · MUI · design tokens",
  },
  {
    group: "Backend / BFF",
    items:
      "Go · Node.js · NestJS · Express · REST · backend-for-frontend · MongoDB · OAuth2 / OIDC (Zitadel) · Firebase Auth · OpenAPI",
  },
  {
    group: "Testing",
    items:
      "Vitest · Jest · React Testing Library · Playwright (e2e + visual regression) · contract tests · TDD",
  },
  {
    group: "Cloud / Infra",
    items:
      "AWS (S3 · CloudFront · Lambda · Route 53) · Docker · GitHub Actions · CI/CD · Vercel · semantic-release",
  },
  {
    group: "Practice",
    items:
      "Core Web Vitals (INP · LCP · CLS) · Prometheus · RUM instrumentation · image pipelines · caching / CDN · multi-tenant SaaS · SSR / JSON-LD SEO · edge middleware · code review",
  },
];

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Software Engineer II",
    company: "Bazaar Technologies",
    note: "Promoted twice: Software Engineer II → Senior (Dec 2024) → Senior II (Jul 2026).",
    bullets: [
      "Primary engineer on the Keenu One storefront — 87% of a 127,000-line Next.js 16 / React 19 codebase (912 files), with the next contributor under 3%. Three merchant brands live on their own domains: sirocpk.com, ifyoulikecheese.com, downsouth.coffee — two more in staging.",
      "Designed the theme architecture: four visually isolated themes behind a registry and typed config contract, tenant resolution in edge middleware, and ESLint-enforced module boundaries. Registry-driven parity suites fail a new theme by name until it complies.",
      "Built the quality gate — 433 unit test files (Vitest), 19 Playwright browser journeys with visual-regression baselines, plus design-token contract and theme-parity checks running on every push.",
      "Sole-authored the production performance instrumentation: a web-vitals RUM reporter, its collection endpoint, and the Prometheus metrics layer — so INP, LCP and CLS come from real merchant traffic, not synthetic runs.",
      "Top contributor to the storefront's Go BFF (~a third of the Go codebase) and owner of its Docker image, Makefile tooling, GitHub Actions and staging deploys. In the Go identity service: merchant/admin endpoint gates, Zitadel IAM membership checks, service-account token caching, OpenAPI generation with a CI drift check.",
      "Own the storefront-configuration surface in the Keenu One merchant portal (React 19 + Vite) at 78% of that feature's code — the theme, branding and SEO editors that drive every live storefront.",
      "Lead author of the Keenu corporate site (keenu.pk) — the public payments / POS marketing site, on Next.js + Tailwind.",
      "Earlier: lead frontend on bazaarapp.com (Next.js + NestJS BFF). Co-led the image + CDN pipeline — 40% p75 LCP cut, INP 169 ms, Core Web Vitals: Passed at Lighthouse 92, organic search 0 → 156K clicks on 11.2M impressions, ~$5,400/yr CDN saving. Built the PM-designed gamification feature and drove the MUI → Tailwind + Radix migration; average order value rose 47%. The platform was retired in 2026 when the company pivoted.",
    ],
  },
  {
    period: "2021 — 2023",
    title: "Senior Frontend Engineer",
    company: "Orcalo Holdings",
    bullets: [
      "Led a team of 24 junior frontend engineers reporting to the Frontend Lead — interviewed and hired them, and owned their delivery and mentorship across multiple client projects.",
      "Introduced the Component-Container pattern across the FE codebase, separating UI from business logic.",
      "Integrated React Query into legacy Redux-heavy projects, cutting redundant re-renders and API calls.",
    ],
  },
  {
    period: "2020 — 2021",
    title: "Software Engineer Intern",
    company: "Web Mekanics",
    bullets: [
      "Built responsive frontends for automobile-related products.",
      "Built REST APIs in Django for real-time data insights.",
    ],
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section-padding border-t"
      style={{
        background: `rgb(var(--surface-primary))`,
        borderColor: `rgb(var(--border))`,
      }}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10">
          <h2 className="eyebrow pt-1">About</h2>
          <div className="min-w-0">
            <div
              className="space-y-4 text-[0.975rem] md:text-base leading-relaxed max-w-2xl text-pretty"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <p>
                Senior software engineer, nearly six years, building B2C web for
                emerging-market users. Today I&apos;m the primary engineer on the
                Keenu One storefront — a{" "}
                <span style={{ color: `rgb(var(--text-primary))` }}>
                  multi-tenant commerce platform
                </span>{" "}
                where one Next.js 16 codebase serves many restaurant brands on
                their own domains. I wrote 87% of its 127,000 lines; three brands
                are live in production and two more are in staging.
              </p>
              <p>
                I don&apos;t stop at the browser. I&apos;m the top contributor to
                that storefront&apos;s Go backend-for-frontend, I own its Docker,
                CI/CD and staging deploys, and I built its performance
                instrumentation — a web-vitals RUM reporter feeding Prometheus,
                so the numbers come from real merchant traffic. Before this I led
                frontend on Pakistan&apos;s largest B2C grocery web app and took
                it to Core Web Vitals: Passed (INP 169 ms, LCP down 40%,
                Lighthouse 92) with organic search from ~0 to 156K clicks.
              </p>
              <p>
                I work with coding agents daily, and the part I care about is the
                scaffolding that makes it safe: typed API clients, 433 test
                files, registry-driven parity suites and lint-enforced module
                boundaries. Architecture decisions and every merge stay mine.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 grid md:grid-cols-[140px_1fr] gap-4 md:gap-10">
          <h2 className="eyebrow pt-1">Stack</h2>
          <div className="space-y-4 max-w-2xl min-w-0">
            {skills.map((g) => (
              <div
                key={g.group}
                className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-1 sm:gap-4"
              >
                <span
                  className="text-sm"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  {g.group}
                </span>
                <span className="tech-chip">{g.items}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          className="mt-16 grid md:grid-cols-[140px_1fr] gap-4 md:gap-10"
        >
          <h2 className="eyebrow pt-1">Experience</h2>
          <div className="max-w-2xl min-w-0">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="py-7 border-t first:border-t-0 first:pt-0"
                style={{ borderColor: `rgb(var(--border))` }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className="text-base font-medium"
                    style={{ color: `rgb(var(--text-primary))` }}
                  >
                    {exp.title}
                  </h3>
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: `rgb(var(--text-tertiary))` }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: `rgb(var(--accent))` }}
                >
                  {exp.company}
                </p>
                {exp.note && (
                  <p
                    className="text-sm mt-1"
                    style={{ color: `rgb(var(--text-tertiary))` }}
                  >
                    {exp.note}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm leading-relaxed pl-4 relative"
                      style={{ color: `rgb(var(--text-secondary))` }}
                    >
                      <span
                        className="absolute left-0"
                        style={{ color: `rgb(var(--text-tertiary))` }}
                      >
                        ·
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

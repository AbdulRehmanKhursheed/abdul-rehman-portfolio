const skills = [
  {
    group: "Frontend",
    items: "Next.js · React · TypeScript · Redux / RTK · React Query · Tailwind · Radix · MUI",
  },
  {
    group: "Backend / BFF",
    items: "Node.js · NestJS · Go (BFF) · Express · REST APIs · MongoDB",
  },
  {
    group: "Cloud / Infra",
    items: "AWS (S3 · CloudFront · Lambda) · Vercel · Docker · CI/CD",
  },
  {
    group: "Practice",
    items: "Core Web Vitals (INP · LCP · CLS) · Image pipelines · Caching / CDN · Multi-tenant · TDD · Code review",
  },
];

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Software Engineer II",
    company: "Bazaar Technologies",
    note: "Promoted twice: Software Engineer II → Senior (Dec 2024) → Senior II (Jul 2026).",
    bullets: [
      "Lead frontend on bazaarapp.com (Next.js + NestJS BFF) — flagship customer web for Pakistan's largest B2C grocery platform.",
      "Co-led the image + CDN pipeline: 40% LCP cut, INP into the good range, CWV Passed, ~$5,400/yr CDN saving, organic search 0 → 156K total clicks.",
      "Lead author of the Keenu One storefront — a multi-tenant ordering platform (Next.js 16 / React 19) I wrote the large majority of; top committer on its Go BFF and its CI/CD + staging deploys. First merchant live at sirocpk.com.",
      "Built end-to-end frontend flows on the Keenu One merchant dashboard (React + Vite) — the storefront-config / theming & branding editors, plus dashboard and POS-kiosk screens.",
      "Lead-authored the Keenu corporate site (keenu.pk) end-to-end — the public payments / POS marketing site, on Next.js + Tailwind.",
      "Drove the MUI → Tailwind + Radix migration; built the PM-designed gamification feature — average order value (AOV) rose 47%.",
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
                Senior Frontend Engineer with five and a half years scaling B2C
                web apps on Pakistani mobile networks — three of them at scale at
                Bazaar. I co-led the image + CDN pipeline that took
                Bazaar&apos;s flagship app to{" "}
                <span style={{ color: `rgb(var(--text-primary))` }}>
                  Core Web Vitals: Passed
                </span>{" "}
                (INP 169&nbsp;ms, LCP down 40%, Lighthouse 92), and grew organic
                search from ~0 to 156K total clicks.
              </p>
              <p>
                I&apos;m also lead author of the Keenu One storefront — a
                multi-tenant platform where one Next.js codebase serves many
                merchants on their own domains (first merchant live) — and top
                committer on its Go BFF and staging deploys. I use
                AI-assisted development to direct and review changes across a
                large codebase — I own the architecture, review every change, and
                hold the quality bar with types, tests, and Lighthouse.
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

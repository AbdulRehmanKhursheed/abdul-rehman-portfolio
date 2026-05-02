"use client";

import { motion } from "framer-motion";

const skills = [
  {
    group: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux / RTK",
      "React Query",
      "MUI",
      "Tailwind",
    ],
  },
  {
    group: "Backend / BFF",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "MongoDB"],
  },
  {
    group: "Cloud / Infra",
    items: ["AWS S3", "CloudFront", "Lambda", "Vercel", "Docker"],
  },
  {
    group: "Mobile",
    items: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Room"],
  },
  {
    group: "Practice",
    items: [
      "Web Vitals",
      "Image pipelines",
      "Caching strategy",
      "TDD",
      "Code review",
    ],
  },
];

const experiences = [
  {
    period: "Mar 2023 – Present",
    title: "Senior Software Engineer",
    company: "Bazaar Technologies",
    note: "Promoted from Software Engineer II in December 2024. Currently working on identity for the Keenu acquisition.",
    bullets: [
      "Lead frontend on bazaarapp.com (Next.js + NestJS BFF) — flagship customer web for Pakistan's largest B2C grocery platform.",
      "Co-led the image + CDN pipeline: 40% LCP cut, CWV Passed, ~$5,400/yr CDN saving, organic search 0 → 156K monthly clicks.",
      "Built Bazaar Partner Portal (React, MUI, React Query) — internal vendor-analytics surface.",
      "Shipped gamification feature on the customer app, lifting customer order value 47%.",
    ],
  },
  {
    period: "Aug 2021 – Mar 2023",
    title: "Senior Frontend Engineer & Junior Team Lead",
    company: "Orcalo Holdings",
    bullets: [
      "Mentored a team of 24 junior frontend developers across multiple client projects.",
      "Introduced the Component-Container pattern across the FE codebase, separating UI from business logic.",
      "Integrated React Query into legacy Redux-heavy projects, cutting redundant API calls.",
    ],
  },
  {
    period: "Nov 2020 – Jun 2021",
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
      className="section-padding"
      style={{ background: `rgb(var(--surface-secondary))` }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: `rgb(var(--text-tertiary))` }}
          >
            About
          </p>

          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05] mb-8"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            Frontend, with a focus on what users on slow networks actually feel.
          </h2>

          <div
            className="space-y-5 text-base md:text-lg leading-relaxed max-w-3xl"
            style={{ color: `rgb(var(--text-secondary))` }}
          >
            <p>
              Senior Frontend Engineer with five years scaling B2C web apps on
              Pakistani mobile networks. I co-led the image + CDN pipeline that took
              Bazaar&apos;s flagship app to{" "}
              <strong style={{ color: `rgb(var(--text-primary))` }}>
                Core Web Vitals: Passed
              </strong>
              , Lighthouse 92, and grew organic search from ~0 to{" "}
              <strong style={{ color: `rgb(var(--text-primary))` }}>
                156K monthly clicks
              </strong>
              .
            </p>
            <p>
              Comfortable across BFFs (Node.js, NestJS) and Android (Kotlin /
              Jetpack Compose). AI-assisted dev day-to-day — but I&apos;ve shipped
              enough greenfield React to fix what AI gets wrong.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {skills.map((g) => (
            <div key={g.group}>
              <h3
                className="text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: `rgb(var(--text-tertiary))` }}
              >
                {g.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-sm"
                    style={{
                      background: `rgb(var(--surface-primary))`,
                      border: `1px solid rgb(var(--border))`,
                      color: `rgb(var(--text-primary))`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: `rgb(var(--text-tertiary))` }}
          >
            Experience
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold tracking-tight mb-12"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            Where I&apos;ve worked
          </h3>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-12"
              >
                <div
                  className="text-sm pt-1"
                  style={{ color: `rgb(var(--text-tertiary))` }}
                >
                  {exp.period}
                </div>
                <div>
                  <h4
                    className="font-semibold text-lg"
                    style={{ color: `rgb(var(--text-primary))` }}
                  >
                    {exp.title}
                  </h4>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: `rgb(var(--text-secondary))` }}
                  >
                    {exp.company}
                  </p>
                  {exp.note && (
                    <p
                      className="text-sm italic mb-3"
                      style={{ color: `rgb(var(--text-tertiary))` }}
                    >
                      {exp.note}
                    </p>
                  )}
                  <ul className="space-y-2 text-base leading-relaxed">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="pl-5 relative"
                        style={{ color: `rgb(var(--text-secondary))` }}
                      >
                        <span
                          className="absolute left-0"
                          style={{ color: `rgb(var(--text-tertiary))` }}
                        >
                          —
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

"use client";

import Image from "next/image";
import { RESUME_PDF } from "../data/site";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

  return (
    <section
      id="hero"
      className="pt-36 lg:pt-44 pb-20"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      <div className="container-custom">
        <div className="animate-rise flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="w-full sm:w-auto sm:max-w-2xl">
            <p className="eyebrow mb-3">
              Senior Software Engineer · Full-stack
            </p>
            <h1
              className="font-display text-display"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              Malik Abdul Rehman Khursheed
            </h1>

            <p
              className="mt-5 text-lg md:text-xl leading-snug text-balance"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              I build and run multi-tenant commerce platforms — one Next.js
              codebase, many live merchant brands, measured on real traffic.
            </p>

            <div
              className="mt-7 space-y-4 text-[0.975rem] md:text-base leading-relaxed text-pretty"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <p>
                I&apos;m the primary engineer on the{" "}
                <a
                  href="https://www.sirocpk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Keenu One storefront
                </a>{" "}
                — <span className="tabular-nums">87%</span> of a{" "}
                <span className="tabular-nums">127,000</span>-line Next.js 16 /
                React 19 codebase, with{" "}
                <span className="tabular-nums">three</span> merchant brands live
                on their own domains and two more in staging. I own the delivery
                path around it too: the{" "}
                <span className="tabular-nums">433</span>-file test suite,
                Playwright browser journeys, the Prometheus and web-vitals
                instrumentation, Docker, CI/CD and staging deploys.
              </p>
              <p>
                I&apos;m also the top contributor to that storefront&apos;s{" "}
                <span style={{ color: `rgb(var(--text-primary))` }}>Go</span>{" "}
                backend-for-frontend, and before this I led frontend on
                Pakistan&apos;s largest B2C grocery web app — Core Web Vitals:
                Passed, <span className="tabular-nums">INP 169 ms</span>,
                Lighthouse <span className="tabular-nums">92</span>, organic
                search from zero to{" "}
                <span className="tabular-nums">156K</span> clicks under
                Pakistani 3G/4G conditions.
              </p>
            </div>

            {/* Primary + secondary actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/case-study/keenu-storefront" className="button-primary">
                Read the case study →
              </a>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="button-secondary"
              >
                Get in touch
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href="https://github.com/AbdulRehmanKhursheed"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/malik-abdul-rehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                LinkedIn
              </a>
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Résumé
              </a>
            </div>

            <p
              className="mt-8 font-mono text-xs inline-flex items-center gap-2"
              style={{ color: `rgb(var(--text-tertiary))` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: `rgb(var(--accent))` }}
              />
              Available for senior full-stack / frontend roles — remote, or
              Islamabad, Pakistan
            </p>
          </div>

          {/* Small, understated portrait */}
          <div className="hidden sm:block shrink-0">
            <div
              className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-full"
              style={{ border: `1px solid rgb(var(--border))` }}
            >
              <Image
                src="/abdulrehman-224.webp"
                alt="Malik Abdul Rehman Khursheed"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

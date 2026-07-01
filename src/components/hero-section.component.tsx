"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });

  return (
    <section
      id="hero"
      className="pt-36 lg:pt-44 pb-20"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      <div className="container-custom">
        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, ease },
              })}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8"
        >
          <div className="w-full sm:w-auto sm:max-w-2xl">
            <p className="eyebrow mb-3">Senior Frontend Engineer</p>
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
              I make web fast where the network isn&apos;t — performance for
              emerging-market users, and lead author of a multi-tenant Next.js
              storefront.
            </p>

            <div
              className="mt-7 space-y-4 text-[0.975rem] md:text-base leading-relaxed text-pretty"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <p>
                At{" "}
                <span style={{ color: `rgb(var(--text-primary))` }}>
                  Bazaar Technologies
                </span>{" "}
                I co-led the work that took the flagship grocery app to Core Web
                Vitals: Passed —{" "}
                <span className="tabular-nums">INP 169&nbsp;ms</span>, LCP down{" "}
                <span className="tabular-nums">40%</span>, Lighthouse{" "}
                <span className="tabular-nums">92</span> — and grew organic
                search from zero to{" "}
                <span className="tabular-nums">156K</span> clicks, all under
                Pakistani 3G/4G conditions.
              </p>
              <p>
                On the side, I&apos;m lead author of the{" "}
                <a
                  href="https://sirocpk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Keenu One storefront
                </a>{" "}
                — a multi-tenant ordering platform on Next.js 16 / React 19
                (first merchant live).
              </p>
            </div>

            {/* Primary + secondary actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/case-study/bazaar-performance" className="button-primary">
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
                href="/api/resume"
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
              Available for senior frontend roles — Islamabad, PK / remote
            </p>
          </div>

          {/* Small, understated portrait */}
          <div className="hidden sm:block shrink-0">
            <div
              className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-full"
              style={{ border: `1px solid rgb(var(--border))` }}
            >
              <Image
                src="/abdulrehman.png"
                alt="Malik Abdul Rehman Khursheed"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

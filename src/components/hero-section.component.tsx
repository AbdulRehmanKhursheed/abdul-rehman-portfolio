"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="pt-36 lg:pt-44 pb-20"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-start justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h1
              className="font-display text-3xl md:text-[2.5rem] leading-[1.1] tracking-tight"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              Abdul Rehman
            </h1>
            <p
              className="mt-2 text-base md:text-lg"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              Senior Frontend Engineer
            </p>

            <div
              className="mt-7 space-y-4 text-[0.975rem] md:text-base leading-relaxed text-pretty"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <p>
                I build performant web for emerging-market users. At{" "}
                <span style={{ color: `rgb(var(--text-primary))` }}>
                  Bazaar Technologies
                </span>{" "}
                I co-led the work that took the flagship grocery app to Core
                Web Vitals: Passed — Lighthouse 92, and organic search from zero
                to 156K total clicks.
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

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href="/case-study/bazaar-performance" className="text-link">
                Read the case study
              </a>
              <span style={{ color: `rgb(var(--text-tertiary))` }}>·</span>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="text-link"
                style={{ color: `rgb(var(--text-primary))` }}
              >
                Get in touch
              </button>
              <span style={{ color: `rgb(var(--text-tertiary))` }}>·</span>
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
                alt="Abdul Rehman"
                fill
                className="object-cover object-top"
                priority
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

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";
import DisplayPictureComponent from "./display-picture.component";

const HERO_STATS = [
  { value: "Lighthouse 92", label: "Performance" },
  { value: "CWV: Passed", label: "Core Web Vitals" },
  { value: "156K", label: "Monthly organic clicks" },
  { value: "1M+", label: "Android downloads" },
];

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 flex items-center"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      <div className="container-custom w-full">
        <motion.div
          className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="order-2 lg:order-1 space-y-8">
            <p
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: `rgb(var(--text-tertiary))` }}
            >
              Senior Frontend Engineer · Performance & Scale
            </p>

            <h1
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.0] tracking-tight"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              Abdul Rehman
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              I build performant web experiences for emerging-market users.
              Currently at{" "}
              <span style={{ color: `rgb(var(--text-primary))` }}>
                Bazaar Technologies
              </span>
              , shipping Pakistan&apos;s flagship B2C grocery web app on Next.js —
              Core Web Vitals: Passed, Lighthouse 92, organic search from zero
              to 156K monthly clicks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/case-study/bazaar-performance"
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                <span>Read the case study</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="button-secondary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/AbdulRehmanKhursheed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg transition-colors"
                style={{ color: `rgb(var(--text-secondary))` }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/malik-abdul-rehman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg transition-colors"
                style={{ color: `rgb(var(--text-secondary))` }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
                className="p-2 rounded-lg transition-colors"
                style={{ color: `rgb(var(--text-secondary))` }}
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="rounded-full p-1.5 shadow-md"
              style={{
                background: `rgb(var(--surface-secondary))`,
                border: `1px solid rgb(var(--border))`,
              }}
            >
              <DisplayPictureComponent />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 max-w-4xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        >
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: `rgb(var(--text-primary))` }}
              >
                {s.value}
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: `rgb(var(--text-tertiary))` }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

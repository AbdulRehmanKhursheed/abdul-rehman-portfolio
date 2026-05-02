import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Bazaar — Web Performance Case Study | Abdul Rehman",
  description:
    "How we took Bazaar's flagship web app from failing Core Web Vitals to Passed and grew organic search from zero to 156K monthly clicks — under Pakistani 3G/4G conditions.",
  openGraph: {
    title: "Web performance for the rest of the world — Abdul Rehman",
    description:
      "Bazaar case study: Core Web Vitals from failing to Passed, Lighthouse 92, organic search 0 → 156K monthly clicks under Pakistani 3G/4G.",
    type: "article",
    images: [
      {
        url: "/case-study/lighthouse.png",
        width: 1200,
        height: 630,
        alt: "Lighthouse: Performance 92, Accessibility 92, Best Practices 96, SEO 92",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web performance for the rest of the world — Abdul Rehman",
    description:
      "Bazaar case study: CWV: Passed, Lighthouse 92, organic search 0 → 156K monthly clicks.",
    images: ["/case-study/lighthouse.png"],
  },
};

const RECEIPTS = [
  { value: "Passed", label: "Core Web Vitals (CrUX)" },
  { value: "92", label: "Lighthouse Performance" },
  { value: "40%", label: "LCP cut" },
  { value: "156K", label: "Monthly organic clicks" },
  { value: "11.2M", label: "Monthly impressions" },
  { value: "$5,400/yr", label: "CDN cost reduction" },
];

export default function BazaarCaseStudy() {
  return (
    <main
      className="min-h-screen"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      <div className="container-custom py-16 lg:py-24">
        {/* Back */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:underline"
            style={{ color: `rgb(var(--text-tertiary))` }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>

        <article className="max-w-3xl">
          {/* Title block */}
          <header className="mb-16">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: `rgb(var(--text-tertiary))` }}
            >
              Case study · Bazaar Technologies
            </p>
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.0] mb-8"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              Web performance for the rest of the world.
            </h1>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              How we took Bazaar&apos;s flagship app from failing Core Web
              Vitals to Passed — and grew organic search from zero to{" "}
              <strong style={{ color: `rgb(var(--text-primary))` }}>
                156K monthly clicks
              </strong>{" "}
              — under Pakistani 3G/4G network conditions.
            </p>

            <p
              className="mt-10 text-sm"
              style={{ color: `rgb(var(--text-tertiary))` }}
            >
              Senior Software Engineer · Bazaar Technologies
            </p>
          </header>

          {/* Receipts strip */}
          <section
            className="mb-20 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 py-10 border-y"
            style={{ borderColor: `rgb(var(--border))` }}
          >
            {RECEIPTS.map((r) => (
              <div key={r.label}>
                <div
                  className="text-2xl md:text-3xl font-semibold tracking-tight"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  {r.value}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: `rgb(var(--text-tertiary))` }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </section>

          {/* Body */}
          <Section title="Context">
            <p>
              Bazaar is Pakistan&apos;s largest B2C grocery platform — 100k+
              active web users, 1M+ Android downloads. Most of those users are
              not on US-fiber. They&apos;re on Pakistani 3G and entry-level 4G,
              on mid-range Android phones. The benchmark that mattered
              wasn&apos;t a synthetic Lighthouse run — it was{" "}
              <strong>field-measured Core Web Vitals from CrUX</strong>.
            </p>
            <p>
              When we started, CWV was failing. Imagery was unoptimized, CDN
              caching ran on defaults, organic search was effectively zero. Two
              of us on the web side took ownership of fixing it.
            </p>
          </Section>

          <Section title="The work">
            <h3 className="case-h3">Image pipeline</h3>
            <p>
              The biggest LCP win. We moved customer-facing imagery through a
              Next.js Image pipeline backed by S3 + CloudFront —
              format-appropriate variants (WebP / JPEG) and width-appropriate
              sizes for the actual breakpoints we serve. Same CDN ended up
              serving the optimized variants to the Android app too.
            </p>

            <h3 className="case-h3">Viewport-aware lazy loading</h3>
            <p>
              Below-the-fold imagery — category tiles, recommendation shelves —
              moved to lazy loading. On slow connections this isn&apos;t about
              eventual bytes; it&apos;s about not blocking LCP behind content
              the user won&apos;t see for another two seconds anyway.
            </p>

            <h3 className="case-h3">CDN tuning</h3>
            <p>
              Default CloudFront caching wasn&apos;t cutting it. TTLs +
              cache-control per asset type, aggressive caching for hot imagery
              and shared bundles, origin shielding so an uncached request
              didn&apos;t cascade. CDN bill came down ~$450/month — close to{" "}
              <strong>$5,400/year</strong>.
            </p>

            <h3 className="case-h3">SEO foundations</h3>
            <p>
              Once the site was actually fast, the SEO basics had something to
              work with: structured product data, metadata hygiene, canonical
              URLs, sitemap reflecting the real category tree. Google rewards
              this slowly — but the curve was unmistakable once it kicked in.
            </p>
          </Section>

          <Section title="The receipts">
            <p>
              Screenshots from the actual tools — Lighthouse, Search Console,
              and PageSpeed Insights&apos; CrUX report — for{" "}
              <strong>bazaarapp.com</strong>:
            </p>

            <Figure
              src="/case-study/lighthouse.png"
              alt="Lighthouse report for bazaarapp.com — Performance 92, Accessibility 92, Best Practices 96, SEO 92"
              caption="Lighthouse — Performance 92, Accessibility 92, Best Practices 96, SEO 92."
            />

            <Figure
              src="/case-study/crux-mobile.png"
              alt="PageSpeed Insights / CrUX report for bazaarapp.com on mobile — Core Web Vitals: Passed"
              caption="CrUX, mobile — Core Web Vitals: Passed. LCP 2.2s, INP 169ms, CLS 0.01. Field-measured on real users, not a synthetic test."
            />

            <Figure
              src="/case-study/crux-desktop.png"
              alt="PageSpeed Insights / CrUX report for bazaarapp.com on desktop — Core Web Vitals: Passed"
              caption="CrUX, desktop — same story. LCP 2.0s, INP 76ms, CLS 0.01."
            />

            <Figure
              src="/case-study/gsc-growth.png"
              alt="Google Search Console for bazaarapp.com — 156K total clicks, 11.2M total impressions, 1.4% CTR, average position 7"
              caption="Google Search Console — from ~0 clicks/day in early 2025 to ~1K clicks/day by Q1 2026. 156K total clicks, 11.2M impressions, average position 7."
            />
          </Section>

          <Section title="Honest scope">
            <p>
              I co-led this with one other engineer on the web side — the
              image-pipeline and CDN strategy were a shared call. I owned the
              Next.js Image integration end-to-end and drove the rollout to
              Android. I&apos;m claiming the perf and CDN + SEO foundation work,
              not the whole product.
            </p>
          </Section>

          <Section title="Stack">
            <p>
              Next.js (App Router), TypeScript, NestJS BFF, AWS (S3, CloudFront,
              Lambda), Vercel. Web Vitals via CrUX + Lighthouse. Image pipeline:
              Next.js Image + sharp through CloudFront with custom cache
              behaviours.
            </p>
          </Section>

          {/* Footer / contact */}
          <section
            className="mt-24 pt-12 border-t"
            style={{ borderColor: `rgb(var(--border))` }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              Want to talk about performance work for emerging markets?
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              I&apos;m open to senior frontend roles — remote, or
              Islamabad/Rawalpindi-based.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:malik.ali5560@gmail.com"
                className="button-primary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
              <a
                href="https://www.linkedin.com/in/malik-abdul-rehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2
        className="font-serif text-3xl md:text-4xl font-normal tracking-tight mb-5"
        style={{ color: `rgb(var(--text-primary))` }}
      >
        {title}
      </h2>
      <div className="case-prose">{children}</div>
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="rounded-lg overflow-hidden border"
        style={{ borderColor: `rgb(var(--border))` }}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto"
          unoptimized
        />
      </div>
      <figcaption
        className="text-sm mt-3 italic"
        style={{ color: `rgb(var(--text-tertiary))` }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

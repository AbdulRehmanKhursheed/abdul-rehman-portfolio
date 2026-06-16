import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Keenu One Storefront — Case Study | Abdul Rehman",
  description:
    "Sole-authoring a multi-tenant restaurant storefront: one Next.js 16 / React 19 codebase serving merchants on their own domains, with edge tenant-resolution, SSR + JSON-LD SEO, and a manifest-driven theme system. First merchant live at sirocpk.com.",
  openGraph: {
    title: "Keenu One Storefront — Case Study",
    description:
      "One codebase, many merchant domains. Edge tenant-resolution, SSR + JSON-LD SEO, a manifest-driven theme system. Sole author.",
    type: "article",
  },
};

const FACTS = [
  { label: "ROLE", value: "Lead author" },
  { label: "STACK", value: "Next.js 16 · React 19" },
  { label: "LIVE", value: "sirocpk.com" },
  { label: "SCALE", value: "~24K lines · 385 commits" },
];

export default function KeenuStorefrontCaseStudy() {
  return (
    <main
      className="min-h-screen"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      <div className="container-custom py-20 lg:py-28">
        <div className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
            style={{ color: `rgb(var(--text-tertiary))` }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <article className="max-w-2xl">
          <header className="mb-12">
            <p className="eyebrow mb-5">Case study · Keenu One</p>
            <h1
              className="font-display text-3xl md:text-[2.5rem] leading-[1.1] tracking-tight mb-5"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              One codebase, many merchant domains.
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              I&apos;m lead author of the Keenu One storefront — a multi-tenant
              ordering platform where a single Next.js codebase is built to serve
              many restaurants, each on their own branded domain. The first
              merchant is live at{" "}
              <a
                href="https://sirocpk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                sirocpk.com
              </a>
              .
            </p>
          </header>

          {/* Facts */}
          <dl
            className="mb-16 border-t"
            style={{ borderColor: `rgb(var(--border))` }}
          >
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-4 py-3 border-b"
                style={{ borderColor: `rgb(var(--border))` }}
              >
                <dt
                  className="font-mono text-xs"
                  style={{ color: `rgb(var(--text-tertiary))` }}
                >
                  {f.label}
                </dt>
                <dd
                  className="text-sm font-medium"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <Section title="Context">
            <p>
              Keenu One is a restaurant-commerce platform. The storefront is the
              customer-facing piece: browse a menu, customise items, check out,
              track the order. The hard requirement was multi-tenancy —{" "}
              <strong>one codebase serving N restaurants</strong>, each on their
              own domain (e.g. sirocpk.com), with their own branding, menu and
              configuration. No per-merchant forks.
            </p>
          </Section>

          <Section title="Architecture">
            <h3 className="case-h3">Tenant resolution at the edge</h3>
            <p>
              Every request resolves its tenant before anything renders.
              Middleware maps the incoming host to an org id, signs it into an
              HMAC cookie, and forwards it on a header the browser can&apos;t
              spoof. Client-supplied identity headers are stripped and rebuilt
              server-side, so one merchant can never read another&apos;s data.
            </p>

            <h3 className="case-h3">Server-rendered, SEO-first</h3>
            <p>
              Pages are server-rendered with structured{" "}
              <strong>JSON-LD</strong> (Restaurant, Menu, Product, Breadcrumb),
              dynamic sitemaps and per-merchant metadata — because a storefront
              that doesn&apos;t rank doesn&apos;t sell. Cart and client state run
              on Zustand, versioned and scoped per-org so switching merchants
              never leaks a basket.
            </p>

            <h3 className="case-h3">A manifest-driven theme system</h3>
            <p>
              The part I&apos;m most proud of. Each theme is a module that
              declares its design tokens and capabilities in a manifest; the
              storefront reads that manifest and renders accordingly. It&apos;s
              built as a <strong>house of themes</strong> — architected to host
              many — and today it ships and serves one production theme (Siroc)
              live on sirocpk.com.
            </p>
          </Section>

          <Section title="Honest scope">
            <p>
              I&apos;m the <strong>lead author / primary engineer</strong> of
              the storefront — I wrote the large majority of it (the substance:
              menu, cart, checkout, order tracking, theming and SEO), with a few
              other engineers contributing along the way. I don&apos;t claim the
              whole Keenu One platform: the merchant dashboard, the Go BFF and
              the backend services are the wider team&apos;s work — on the
              merchant dashboard I built the storefront-config / theming editors.
              One merchant is live today; the multi-theme system is built for
              many and currently serves the first.
            </p>
          </Section>

          <Section title="Stack">
            <p>
              Next.js 16 (App Router, React Server Components), React 19,
              TypeScript, Tailwind CSS 4, Zustand, TanStack Query. Server-side
              integration with a Go BFF. SSR + JSON-LD for SEO. Self-hosted fonts
              and a custom CDN image loader.
            </p>
          </Section>

          <div
            className="mt-16 pt-10 border-t flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ borderColor: `rgb(var(--border))` }}
          >
            <a
              href="https://sirocpk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: `rgb(var(--accent))` }}
            >
              Visit sirocpk.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:malik.ali5560@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm text-link"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
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
    <section className="mb-12">
      <h2
        className="font-display text-xl md:text-2xl tracking-tight mb-4"
        style={{ color: `rgb(var(--text-primary))` }}
      >
        {title}
      </h2>
      <div className="case-prose">{children}</div>
    </section>
  );
}

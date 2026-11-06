import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Keenu One Storefront — Case Study | Malik Abdul Rehman Khursheed",
  description:
    "Primary engineer on a multi-tenant restaurant storefront: one Next.js 16 / React 19 codebase serving merchants on their own domains, with edge tenant-resolution, SSR + JSON-LD SEO, a registry-driven theme system and a visual builder merchants design their stores in. Seven brands live in production.",
  alternates: { canonical: "/case-study/keenu-storefront" },
  openGraph: {
    title: "Keenu One Storefront — Case Study",
    description:
      "One codebase, seven live merchant brands. Edge tenant-resolution, SSR + JSON-LD SEO, a registry-driven theme system and a visual storefront builder. Primary engineer.",
    type: "article",
    url: "/case-study/keenu-storefront",
    images: [
      {
        url: "/case-study/keenu-og.jpg",
        width: 1200,
        height: 630,
        alt: "Siroc storefront on desktop, served from the multi-tenant Keenu One codebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keenu One Storefront — Case Study",
    description:
      "One codebase, seven live merchant brands. Edge tenant-resolution, SSR + JSON-LD SEO, a visual storefront builder. Primary engineer.",
    images: ["/case-study/keenu-og.jpg"],
  },
};

const FACTS = [
  { label: "ROLE", value: "Primary engineer" },
  { label: "STACK", value: "Next.js 16 · React 19" },
  { label: "LIVE", value: "7 brands in production" },
  { label: "SCOPE", value: "Menu · cart · checkout · theming · builder" },
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
              className="font-display text-h1 mb-5"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              One codebase, many merchant domains.
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              I&apos;m the primary engineer on the Keenu One storefront — a
              multi-tenant ordering platform where a single Next.js codebase
              serves many restaurants, each on their own branded domain, and
              merchants design their own store in a visual builder I built on
              top of it. Seven brands are live in production, the first at{" "}
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
            <p>
              I run an agent-assisted workflow on this codebase, and the
              interesting engineering is the scaffolding that makes it safe at
              this scale: typed API clients, registry-driven parity suites,
              design-token contracts and enforced review gates.
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
              The host-to-merchant mapping itself is a custom-domains table I
              built end to end — the Go migration and admin API, the BFF
              resolver with a long-lived cache, and the admin screen where ops
              attach a domain to a restaurant.
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
              Each theme is a module that declares its design tokens and
              capabilities in a manifest; the storefront reads that manifest
              and renders accordingly. It&apos;s built as a{" "}
              <strong>house of themes</strong> — architected to host many — and
              today seven brands run on it in production: Siroc, If You Like
              Cheese, Down South, Caffè Praha, Cantina, Purple Cow and Braci,
              with Cosmo on staging and launching next. The registry holds
              ten themes.
            </p>
            <h3 className="case-h3">A parts catalog, and a builder on top</h3>
            <p>
              The part I&apos;m most proud of. Under every theme sits a{" "}
              <strong>parts catalog</strong>: 29 shared parts — header, hero,
              menu, cart, checkout, order pages, footer, and the blocks a
              custom page is made of — each with several looks, styled only
              through store tokens so any look wears any brand&apos;s palette.
              A theme became a starting choice of looks rather than separate
              code; a blank base theme is assembled from the catalog alone.
              The merchant portal&apos;s <strong>visual builder</strong> opens
              the real storefront on a canvas: click a word to reword it, click
              a box to style its spacing, corners, borders, shadows and colours,
              set phone-specific values, pick fonts, drag sections, build
              custom pages, and publish — with drafts, version history, undo
              and publish checks that warn about unreadable colours or broken
              sections. Nothing deploys per merchant.
            </p>
          </Section>

          <Section title="What we rejected">
            <p>
              <strong>Per-merchant forks</strong> were the fast way to ship the
              first store, but every fork multiplies maintenance and drift. One
              codebase with a manifest-driven theme system keeps a single surface
              to secure, test and improve — the cost is a stricter theming
              contract, which is the right trade for a platform meant to host
              many.
            </p>
            <p>
              Tenancy resolves from the host{" "}
              <strong>at the edge into an HMAC-signed cookie</strong> rather than
              trusting a subdomain or a client-supplied header — identity a
              browser can&apos;t spoof, so one merchant can never read
              another&apos;s data. Subdomain-only routing would have been simpler
              but weaker.
            </p>
            <p>
              Cart state runs on <strong>Zustand, scoped per-org</strong>, not
              server state: a basket is cheap and shouldn&apos;t round-trip on
              every tap over a slow connection. Server state earns its keep for
              catalog and orders — not the cart.
            </p>
          </Section>

          <Section title="The storefront, live">
            <p>
              The first merchant — Siroc — running in production on{" "}
              <strong>sirocpk.com</strong>: branded header, server-rendered menu,
              category navigation, and the Zustand-backed cart. The same codebase
              renders any merchant&apos;s theme from its manifest.
            </p>
            <Figure
              src="/case-study/keenu-desktop.webp"
              alt="Siroc storefront on desktop — branded header, food carousel, category navigation and menu, served from the multi-tenant Keenu One codebase"
              caption="Desktop — sirocpk.com. Branded header, category nav and server-rendered menu, all driven by the merchant's theme manifest."
            />
            <Figure
              src="/case-study/keenu-mobile.webp"
              alt="Siroc storefront on mobile — category cards, menu list with prices and add-to-cart, served from the multi-tenant Keenu One codebase"
              caption="Mobile — same codebase, same theme manifest, responsive down to the phone."
            />
          </Section>

          <Section title="Honest scope">
            <p>
              I&apos;m the <strong>primary engineer</strong> on the storefront
              — <strong>85% of the surviving source</strong> by git blame
              (about 319,000 of 375,000 lines across 2,688 files), with the next
              contributor under 6%. That covers the substance: menu, cart,
              checkout, order tracking, theming, the parts catalog (98% mine)
              and SEO. Other engineers have contributed along the way. On the
              storefront&apos;s <strong>Go BFF</strong> I&apos;m the top
              committer at 44% of the code — tenant resolution, menu, checkout
              rules and order flows, and most of its tests — with the rest from
              the wider platform team. I also own the storefront&apos;s CI/CD
              and staging deploys. I don&apos;t claim the whole Keenu One
              platform: the merchant dashboard and the backend services are the
              wider team&apos;s work — on the merchant dashboard I built the
              storefront builder and its theme, branding, SEO and domain
              screens (84% of that feature), and in the Go merchants service I
              added the custom-domains table and API. Seven merchants are live
              today; the registry holds ten themes, eight of them mine.
            </p>
          </Section>

          <Section title="Stack">
            <p>
              Next.js 16 (App Router, React Server Components), React 19 with
              the React Compiler, TypeScript, Tailwind CSS 4, Zustand, Zod.
              Vitest and Playwright with visual-regression baselines; a
              Storybook gallery that doubles as the builder&apos;s picture
              catalog. Server-side integration with a Go BFF (top committer —
              tenant resolution, menu, checkout and order flows). SSR + JSON-LD
              for SEO. Self-hosted fonts and a custom CDN image loader.
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
        className="font-display text-h2 mb-4"
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
  // Portrait (mobile) shots are constrained so they don't dominate the column.
  const portrait = src.includes("mobile");
  const dims = portrait
    ? { w: 900, h: 1870 }
    : { w: 1800, h: 1133 };
  return (
    <figure className="my-8">
      <div
        className={`rounded-lg overflow-hidden border ${
          portrait ? "max-w-[300px] mx-auto" : ""
        }`}
        style={{ borderColor: `rgb(var(--border))` }}
      >
        <Image
          src={src}
          alt={alt}
          width={dims.w}
          height={dims.h}
          className="w-full h-auto"
          sizes={portrait ? "300px" : "(max-width: 768px) 100vw, 672px"}
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

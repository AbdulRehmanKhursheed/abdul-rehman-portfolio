# Portfolio Redesign + Resume Overhaul — Design

**Date:** 2026-06-16
**Owner:** Abdul Rehman (Malik Abdul Rehman Khursheed)
**Goal:** Replace the current portfolio's generic "AI-generated" look with a crafted, senior-engineer design; add the two Keenu projects to both the site and the resume; tighten the resume.

---

## 1. Problem statement

Two problems, one effort:

1. **The portfolio reads as "vibe coded."** It uses every tell of a templated AI portfolio: warm-stone beige (`#fafaf9`), a giant centered serif display name (Instrument Serif), big number "stat tiles," `uppercase tracking-widest` micro-labels on every section, fade-up-on-scroll on every block, lucide icons in rounded squares, and filler copy ("Open to senior frontend roles."). It must instead read as deliberately crafted.
2. **The strongest work is missing.** The Keenu One Storefront (sole author) and the Keenu Merchant Portal are absent from both the site and the resume.

Non-goal: This is not a rewrite of the framework or a CMS. Next.js 14 App Router, Tailwind, Framer Motion stay.

---

## 2. Anti-"vibe-coded" principles (the design rubric)

Every decision below is checked against these. If a choice trips one, it's wrong.

- **No giant centered serif hero name.** Name is set, not shouted.
- **No warm beige.** True white `#ffffff` page, with a single near-white (`#fafafa`) for section rhythm. Ink-black text.
- **No "stat tile" counters as decoration.** Metrics live inside sentences and project cards where they're earned, not as four big numbers in a row.
- **No `uppercase tracking-widest` eyebrow on every section.** Use at most one, sparingly.
- **No motion on everything.** Motion is reserved for one or two intentional moments (hero entrance). No fade-up on every scroll block.
- **No filler microcopy.** Every line says something specific.
- **Real artifacts over decoration.** Project cards reference real domains (sirocpk.com, console.keenu.one) and real numbers.
- **Density with discipline.** A senior portfolio shows range; whitespace is intentional, not empty.

---

## 3. Visual system

### Typography
- **Display / headings:** Brandon Grotesque (self-hosted woff2, weights 400/500/900) — copied from the Keenu storefront's `public/siroc/fonts/BrandonGrotesque/`. Brand continuity with the author's own product; distinctive without being the generic "AI serif." Loaded via `next/font/local`.
- **Body / UI:** Inter (already in project) for paragraphs, labels, and dense text — Brandon's 3 weights are too few for body.
- **Mono (optional):** keep JetBrains Mono only if used for inline code/tech tokens; otherwise drop.
- Remove Instrument Serif entirely.

### Color (CSS variables in `globals.css`)
- `--background: #ffffff` (page), `--surface-secondary: #fafafa` (alternating sections), `--surface-tertiary: #f5f5f5`.
- Text: `--text-primary: #111111`, `--text-secondary: #555555`, `--text-tertiary: #8a8a8a`.
- Border: `#e5e5e5`.
- **Accent:** a single restrained blue derived from Siroc brand `#115BA7`, used only for links/interactive/focus — not as fill everywhere. Primary buttons stay ink-black `#111` for seriousness.
- Single light theme (no dark toggle), consistent with current.

### Layout & components
- **Header:** keep, restyle to white/flat with a thin bottom border on scroll.
- **Hero:** left-aligned, name set at a restrained display size (not 8xl), one-line role, a 2–3 sentence positioning paragraph with metrics inline, primary CTA (case study) + secondary (contact). Display picture kept but smaller / less "framed."
- **Selected work:** the centerpiece. A considered grid (not uniform 500px-min cards). Featured items get more room. Each card: project name (Brandon), one-line what-it-is, real domain, tech chips, and where relevant a metric or "sole author" tag.
- **About:** condensed. Keep experience timeline (it's good and ATS-like), drop the redundant skill-chip wall or tighten it.
- **Case studies:** keep `/case-study/bazaar-performance`. Add `/case-study/keenu-storefront` (see §5).
- **Contact:** keep, rewrite filler heading to something specific.
- **Footer:** keep minimal.

---

## 4. Content: projects (`src/data/projects.ts`)

Add two featured projects. **Honesty constraints baked in:**

### Keenu One Storefront (NEW, featured, first in list)
- **One-liner:** "Multi-tenant restaurant ordering platform — one Next.js 16 / React 19 codebase serving merchants on their own domains. Sole author."
- **Body:** Edge tenant-resolution (host → org, HMAC-signed cookies), SSR with JSON-LD SEO, Zustand cart, Go BFF integration. Architected a manifest-driven **theme system** (design tokens + per-merchant config) intended to host many themes; **first merchant live at sirocpk.com on the Siroc theme.**  ~24K LOC, 385 commits.
- **Link:** https://sirocpk.com
- **Tech:** Next.js 16, React 19, TypeScript, Tailwind 4, Zustand, TanStack Query, Go BFF, JSON-LD/SEO, multi-tenant.
- **Claim guardrail:** Describe the theme system as *architected for many, one live* — never "N themes running."

### Keenu Merchant Portal (NEW, featured)
- **One-liner:** "Restaurant operations dashboard — menu, branches, delivery zones, floor plans, POS, promos, analytics."
- **Body:** React 19 + Vite SPA, 30 feature modules / ~45 pages. Interactive **map-based delivery-zone editor** (Leaflet + Turf + Geoman), **floor-plan editor** (Konva canvas), RBAC roles, Recharts analytics, command palette, offline cache (Dexie). 382 commits.
- **Link:** https://console.keenu.one
- **Tech:** React 19, Vite, TypeScript, Tailwind 4, Radix UI, TanStack Query, React Router 7, Leaflet/Turf, Konva, Recharts.

### Existing projects
- Update Bazaar "currently working on" note to reference the Keenu One platform accurately.
- Keep the rest; re-order so Keenu Storefront, Keenu Merchant Portal, Bazaar Web App lead.

---

## 5. Keenu Storefront case study (`/case-study/keenu-storefront`)

Mirror the structure/styling of `bazaar-performance`. Sections:
1. **Context** — what Keenu One is, the multi-tenant problem (one codebase, N merchant domains).
2. **Architecture** — edge tenant resolution, signed cookies, SSR + JSON-LD, BFF boundary, Zustand cart.
3. **The theme system** — manifest-driven tokens, why "house of themes," honest current state (Siroc live).
4. **Outcome** — sirocpk.com live, scale signals (LOC/commits), sole authorship.
- All claims grounded; no invented metrics. If a number isn't verifiable, it's omitted.

*(Scope note: if time-boxing is needed, the project card + link can ship first and the full case study second. Default is to build it.)*

---

## 6. Resume (`public/pdf/resume.html` → regenerated PDF)

**Strategy decision:** The handmade LaTeX resume (`~/Downloads/Front_End_Dev_AbdulRehman_Resume.pdf`) is the one that historically got responses; the current fancy portfolio resume got none. Follow the data: adopt the handmade one's **single-column, dense, ATS-friendly structure** as the basis — not the fancier multi-block layout.

**Toolchain reality:** No `.tex` source exists locally and no LaTeX toolchain is installed. Google Chrome IS available. The portfolio already renders resume PDFs from `public/pdf/resume.html` via headless Chrome. So: rebuild `resume.html` to mirror the handmade single-column structure, then render to PDF with `Google Chrome --headless --print-to-pdf` and replace the served file `public/pdf/AbdulRehman_Senior_Frontend_Resume.pdf` (served via `/api/resume`). Result: the converting layout + an editable, versioned source + one-command regeneration.

Changes:
1. **Add Keenu One Storefront** to experience bullets and highlighted projects (sole author, multi-tenant, Next 16/React 19, sirocpk.com).
2. **Add Keenu Merchant Portal** to highlighted projects (React/Vite ops dashboard, console.keenu.one).
3. **Cut duplication** — the CWV/CDN/MUI-migration items currently appear in both "Key Achievements" and the Bazaar experience bullets. Each fact gets one home.
4. **Restore keyword density** — re-add truthful keywords the old resume had that ATS filters match (e.g., Webpack, Prometheus/Grafana, Route 53, Spring Boot if still truthful, CI/CD). Keep the clean look but widen the skills line.
5. **Single-column-safe** — ensure layout stays parseable (it already extracts cleanly; keep it that way).
6. Regenerate the PDF from the updated HTML (headless Chrome / available tool) and replace the served file.

### Stack honesty (applies to resume AND portfolio)
Only list skills defensible in a deep interview. Author is a Next.js/React/TypeScript/web-performance specialist; Node/NestJS BFF is the genuine secondary stack.
- **Remove Spring Boot and Java entirely** from all skill lists (not the author's stack; pure interview liability).
- **Remove Kotlin / Android from the *skills/languages* lists** (no claim of depth).
- **Keep the Bazaar Android apps as shipped *projects*** (1M+ downloads is real, verifiable credibility), framed as cross-platform contribution — "shipped customer features on Android (Kotlin/Compose)" — never as Kotlin mastery. Soften/trim the per-project Kotlin tech-tag walls accordingly.
- Net positioning: **Senior Frontend Engineer — Next.js / React / TypeScript / web performance**, Node/NestJS BFF secondary.

---

## 7. Out of scope
- No dark mode.
- No CMS / data backend.
- No framework upgrade (stays Next 14).
- No changes to the `/noor` privacy route.

---

## 8. Build sequence
1. Visual system: fonts (Brandon Grotesque local), `globals.css` tokens → true white + ink + restrained blue, remove serif.
2. Components: hero, header, selected-work grid, about, contact — applying the anti-vibe rubric.
3. Content: `projects.ts` — add Keenu Storefront + Merchant Portal, reorder, fix Bazaar note.
4. Keenu storefront case study page.
5. Resume: edit `resume.html`, regenerate PDF.
6. Verify in dev server (running on :3001), check no regressions on `/`, `/case-study/*`, `/noor/*`.

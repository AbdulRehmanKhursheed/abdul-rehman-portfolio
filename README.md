# abdul-rehman-portfolio

Personal portfolio + résumé of **Malik Abdul Rehman Khursheed** — Senior Software Engineer,
full-stack (primary engineer on a multi-tenant Next.js commerce platform; web performance for
emerging-market users).

- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind, self-hosted Geist (SIL OFL).
- **Perf/a11y**: fluid `clamp()` type scale, `prefers-reduced-motion` support, optimized
  WebP imagery, zero client-side animation library.
- **Résumé pipeline**: one source of truth in `scripts/resume/content.mjs` →
  `npm run generate:resume` (puppeteer-core + system Chrome) → two ATS-verified
  PDFs in `public/pdf/`, a full-stack variant and a frontend-specialist variant.
  The build asserts the PDF text layer: ASCII-only content, at most two pages,
  hyphenated compounds intact, section headings unsplit, and the portfolio URL
  present. It fails rather than shipping a résumé an ATS would misparse.

## Develop

```bash
npm install
npm run dev        # local dev
npm run build      # production build
npm run generate:resume            # both résumé variants, with ATS verification
npm run generate:resume frontend   # just one variant
```

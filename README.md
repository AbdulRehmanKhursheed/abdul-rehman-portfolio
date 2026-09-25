# abdul-rehman-portfolio

Personal portfolio + résumé of **Malik Abdul Rehman Khursheed** — Senior Software Engineer,
full-stack (primary engineer on a multi-tenant Next.js commerce platform; web performance for
emerging-market users).

- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind, self-hosted Geist (SIL OFL).
- **Perf/a11y**: fluid `clamp()` type scale, `prefers-reduced-motion` support, optimized
  WebP imagery, zero client-side animation library.
- **Résumé pipeline**: one LaTeX source in `resume/` →
  `npm run generate:resume` (pdfTeX, e.g. via TinyTeX) → an ATS-verified PDF in
  `public/pdf/`. The build asserts the PDF text layer: at most two pages, contact
  details present, no Unicode dashes or ligatures, hyphenated compounds intact
  and section headings unsplit. It fails rather than shipping a résumé an ATS
  would misparse.

## Develop

```bash
npm install
npm run dev        # local dev
npm run build      # production build
npm run generate:resume   # build the résumé PDF, with ATS verification
```

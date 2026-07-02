# abdul-rehman-portfolio

Personal portfolio + résumé of **Malik Abdul Rehman Khursheed** — Senior Frontend Engineer
(web performance for emerging-market users; lead author of a multi-tenant Next.js storefront).

- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind, self-hosted Geist (SIL OFL).
- **Perf/a11y**: fluid `clamp()` type scale, `prefers-reduced-motion` support, optimized
  WebP imagery, zero client-side animation library.
- **Résumé pipeline**: `public/pdf/resume.html` → `npm run generate:resume` (puppeteer-core +
  system Chrome) → the PDF served at `/api/resume`.

## Develop

```bash
npm install
npm run dev        # local dev
npm run build      # production build
npm run generate:resume  # regenerate the résumé PDF after editing resume.html
```

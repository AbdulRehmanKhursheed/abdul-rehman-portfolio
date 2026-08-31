// Regenerate both résumé variants (HTML + PDF) from scripts/resume/content.mjs.
//
// Usage:
//   npm run generate:resume            # both variants
//   npm run generate:resume frontend   # one variant
//
// Requires a local Chrome/Chromium (puppeteer-core does not bundle one).
// Override with CHROME_PATH=/path/to/chrome.
//
// After each PDF is written, the text layer is verified with `pdftotext` when
// it is on PATH: page count, the portfolio URL, and every hyphenated compound
// surviving intact. A résumé that fails those checks is an ATS problem, so the
// build fails rather than shipping it quietly.

import puppeteer from "puppeteer-core";
import { existsSync, writeFileSync, readFileSync } from "fs";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { renderResume, SECTION_TITLES } from "./resume/template.mjs";
import {
  buildVariant,
  variants,
  contact,
  keyAchievements,
  projects,
  education,
  certifications,
  achievements,
} from "./resume/content.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "pdf");

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No Chrome/Chromium found. Set CHROME_PATH to your browser binary.");
  process.exit(1);
}

const MAX_PAGES = 2;

function has(bin) {
  try {
    execFileSync("which", [bin], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Every hyphenated compound in the document, so we can prove each one survived
// into the PDF text layer with its hyphen intact.
function compoundsIn(v) {
  const strings = [
    v.role,
    v.summary,
    ...v.skills.flat(),
    ...keyAchievements,
    ...v.experience.flatMap((j) => [j.company, j.title, ...j.bullets]),
    ...projects,
    education.degree,
    education.school,
    ...certifications,
    ...achievements,
  ];
  const found = new Set();
  for (const s of strings) {
    for (const m of s.matchAll(/\b[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\b/g)) {
      found.add(m[0]);
    }
  }
  return [...found];
}

function verify(pdfPath, v) {
  if (!has("pdftotext")) {
    console.warn("   ! pdftotext not on PATH - skipped text-layer verification");
    return;
  }
  const txt = execFileSync("pdftotext", ["-enc", "UTF-8", pdfPath, "-"], {
    encoding: "utf8",
  });
  const problems = [];

  const pages = (txt.match(/\f/g) || []).length;
  if (pages > MAX_PAGES) {
    problems.push(`${pages} pages (max ${MAX_PAGES})`);
  }

  if (!txt.includes(contact.portfolio)) {
    problems.push(`portfolio URL "${contact.portfolio}" missing from text layer`);
  }
  if (!txt.includes(contact.email)) {
    problems.push("email missing from text layer");
  }

  for (const ch of ["–", "—", "→", " "]) {
    if (txt.includes(ch)) {
      problems.push(
        `text layer contains U+${ch.charCodeAt(0).toString(16).toUpperCase()} - parsers may drop it`
      );
    }
  }

  const broken = compoundsIn(v).filter((word) => !txt.includes(word));
  if (broken.length) {
    problems.push(`hyphen lost in text layer: ${broken.join(", ")}`);
  }

  // Wide letter-spacing on uppercase headings makes pdftotext split words
  // ("SUMMARY" -> "SU MMARY"), which stops a parser finding the section at all.
  const missingSections = SECTION_TITLES.filter(
    (title) => !txt.includes(title.toUpperCase())
  );
  if (missingSections.length) {
    problems.push(
      `section heading split or missing in text layer: ${missingSections.join(", ")}`
    );
  }

  if (problems.length) {
    console.error(`   x ATS verification failed for ${pdfPath}:`);
    for (const p of problems) console.error(`     - ${p}`);
    process.exitCode = 1;
    return;
  }
  console.log(`   ok ${pages} page(s), text layer clean`);
}

const requested = process.argv.slice(2);
const keys = requested.length ? requested : Object.keys(variants);
for (const key of keys) {
  if (!variants[key]) {
    console.error(`Unknown variant "${key}". Available: ${Object.keys(variants).join(", ")}`);
    process.exit(1);
  }
}

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--font-render-hinting=none"],
});

try {
  for (const key of keys) {
    const v = { ...buildVariant(key), contact, keyAchievements, projects, education, certifications, achievements };
    const htmlPath = join(outDir, `resume-${v.slug}.html`);
    const pdfPath = join(outDir, `${v.fileName}.pdf`);

    writeFileSync(htmlPath, renderResume(v), "utf8");

    const page = await browser.newPage();
    await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });
    await page.close();

    console.log(`\n${key}:`);
    console.log(`   ${htmlPath.replace(root + "/", "")}`);
    console.log(`   ${pdfPath.replace(root + "/", "")}`);
    verify(pdfPath, v);
  }
} finally {
  await browser.close();
}

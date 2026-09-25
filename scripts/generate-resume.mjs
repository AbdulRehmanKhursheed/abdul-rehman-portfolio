// Build the résumé PDF from resume/AbdulRehman_FullStack_Engineer_Resume.tex.
//
// Usage:
//   npm run generate:resume
//
// Requires pdfTeX. Looked up via $PDFLATEX, then TinyTeX's default macOS path,
// then PATH. pdfTeX rather than XeTeX/Tectonic: XeTeX writes Lato's hyphen as
// U+2010 in the text layer, so parsers miss "Mar 2023 - Present" and the URLs.
//
// After the build, the text layer is checked with pdftotext: at most two pages,
// contact details present, no dash or ligature characters a parser could drop,
// and every hyphenated compound in the source intact. A résumé that fails those
// checks is an ATS problem, so the build fails rather than shipping it quietly.

import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync } from "fs";
import { execFileSync } from "child_process";
import { homedir, tmpdir } from "os";
import { basename, dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const texPath = join(root, "resume", "AbdulRehman_FullStack_Engineer_Resume.tex");
const pdfName = basename(texPath).replace(/\.tex$/, ".pdf");
const outPath = join(root, "public", "pdf", pdfName);

const MAX_PAGES = 2;
const REQUIRED_TEXT = [
  "malik.ali5560@gmail.com",
  "abdul-rehman-portfolio-ecru.vercel.app",
  "Mar 2023 - Present",
];
const SECTION_TITLES = [
  "KEY ACHIEVEMENTS",
  "TECHNICAL SKILLS",
  "EXPERIENCE",
  "HIGHLIGHTED PROJECTS",
  "EDUCATION",
  "CERTIFICATIONS AND COURSES",
  "ACHIEVEMENTS AND AWARDS",
];
// Unicode dashes, arrows, no-break spaces and f-ligatures: parsers drop or
// mis-tokenise them, so a keyword like "gamification" stops matching.
const FORBIDDEN_CHARS = /[‐-―→ ﬀ-ﬆ]/g;

/** Returns true when `bin` is on PATH. */
function onPath(bin) {
  try {
    execFileSync("which", [bin], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

/** Returns the pdflatex binary to use, or exits with an install hint. */
function findPdflatex() {
  const candidates = [
    process.env.PDFLATEX,
    join(homedir(), "Library/TinyTeX/bin/universal-darwin/pdflatex"),
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (found) return found;
  if (onPath("pdflatex")) return "pdflatex";
  console.error(
    "pdflatex not found. Install TinyTeX (https://yihui.org/tinytex/) and run\n" +
      "  tlmgr install lato fontaxes titlesec enumitem preprint microtype\n" +
      "or set PDFLATEX=/path/to/pdflatex."
  );
  process.exit(1);
}

/** Compiles the .tex into a temp dir and returns the path of the built PDF. */
function compile(pdflatex, buildDir) {
  try {
    execFileSync(
      pdflatex,
      ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, texPath],
      { stdio: "pipe" }
    );
  } catch (err) {
    const logPath = join(buildDir, pdfName.replace(/\.pdf$/, ".log"));
    const log = existsSync(logPath) ? readFileSync(logPath, "utf8") : String(err.stdout ?? "");
    console.error(`pdflatex failed on ${texPath}. Last lines of the log:\n`);
    console.error(log.split("\n").slice(-30).join("\n"));
    process.exit(1);
  }
  return join(buildDir, pdfName);
}

/** Returns every hyphenated compound in the document body ("Front-End", "end-to-end"). */
function hyphenatedCompounds() {
  const tex = readFileSync(texPath, "utf8");
  const body = tex.slice(tex.indexOf("\\begin{document}"));
  const prose = body
    .split("\n")
    .filter((line) => !line.trimStart().startsWith("%"))
    .join("\n");
  return [...new Set(prose.match(/\b[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\b/g) ?? [])];
}

/** Lists every ATS problem found in the PDF's text layer (empty when clean). */
function textLayerProblems(pdfPath) {
  const text = execFileSync("pdftotext", ["-enc", "UTF-8", pdfPath, "-"], { encoding: "utf8" });
  const problems = [];

  const pages = (text.match(/\f/g) ?? []).length;
  if (pages > MAX_PAGES) problems.push(`${pages} pages (max ${MAX_PAGES})`);

  for (const required of REQUIRED_TEXT) {
    if (!text.includes(required)) problems.push(`"${required}" missing from text layer`);
  }
  for (const title of SECTION_TITLES) {
    if (!text.includes(title)) problems.push(`section heading "${title}" split or missing`);
  }

  const forbidden = [...new Set(text.match(FORBIDDEN_CHARS) ?? [])];
  for (const ch of forbidden) {
    const code = ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
    problems.push(`text layer contains U+${code}, which parsers may drop`);
  }

  const broken = hyphenatedCompounds().filter((word) => !text.includes(word));
  if (broken.length) problems.push(`hyphen lost in text layer: ${broken.join(", ")}`);

  return { pages, problems };
}

const buildDir = mkdtempSync(join(tmpdir(), "resume-"));
try {
  const builtPdf = compile(findPdflatex(), buildDir);
  if (!onPath("pdftotext")) {
    console.error("pdftotext not on PATH (brew install poppler); refusing to publish an unverified résumé.");
    process.exit(1);
  }
  const { pages, problems } = textLayerProblems(builtPdf);
  if (problems.length) {
    console.error("ATS verification failed:");
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
  copyFileSync(builtPdf, outPath);
  console.log(`ok  ${outPath.replace(root + "/", "")}  (${pages} pages, text layer clean)`);
} finally {
  rmSync(buildDir, { recursive: true, force: true });
}

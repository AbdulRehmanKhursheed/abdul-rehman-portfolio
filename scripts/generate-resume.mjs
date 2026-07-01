// Regenerate the downloadable résumé PDF from public/pdf/resume.html.
// Usage: node scripts/generate-resume.mjs
// Requires a local Chrome/Chromium (puppeteer-core does not bundle one).
// Override the binary with CHROME_PATH=/path/to/chrome if needed.
import puppeteer from "puppeteer-core";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const htmlPath = join(root, "public", "pdf", "resume.html");
const outPath = join(root, "public", "pdf", "AbdulRehman_Senior_Frontend_Resume.pdf");

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const { existsSync } = await import("fs");
const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No Chrome/Chromium found. Set CHROME_PATH to your browser binary.");
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--font-render-hinting=none"],
});
const page = await browser.newPage();
await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log("Wrote", outPath);

// Renders a résumé variant to ATS-safe HTML.
//
// The two guards below are the point of this file. They make a whole class of
// PDF text-layer bug impossible rather than something to remember:
//
//   assertAscii()  - a smart quote, en dash or arrow that a parser drops (or
//                    renders as a replacement char) can silently corrupt a
//                    keyword. Content must be ASCII; the build fails otherwise.
//   nowrapCompounds() - Chrome will break a line at an existing hyphen, and the
//                    hyphen is then absent from the extracted text
//                    ("manifest-driven" -> "manifestdriven"). Wrapping every
//                    hyphenated compound in a nowrap span prevents the break.

const BULLET = "•"; // the one intentional non-ASCII glyph: the list marker

// Section headings, in render order. Exported so the build can assert each one
// survives into the PDF text layer intact - an ATS locates sections by these.
export const SECTION_TITLES = [
  "Summary",
  "Key Achievements",
  "Technical Skills",
  "Professional Experience",
  "Selected Projects",
  "Education",
  "Certifications and Awards",
];

const ASCII_LABELS = {
  "–": "en dash",
  "—": "em dash",
  "→": "arrow",
  " ": "non-breaking space",
  "’": "curly apostrophe",
  "‘": "curly quote",
  "“": "curly double quote",
  "”": "curly double quote",
  "…": "ellipsis",
  "·": "middot",
};

function assertAscii(value, where) {
  const bad = [...value].filter((ch) => ch.charCodeAt(0) > 126);
  if (bad.length) {
    const detail = [...new Set(bad)]
      .map((ch) => {
        const code = ch.codePointAt(0).toString(16).padStart(4, "0");
        return `${ASCII_LABELS[ch] || "non-ASCII"} (U+${code.toUpperCase()})`;
      })
      .join(", ");
    throw new Error(
      `Non-ASCII content in ${where}: ${detail}\n  -> ${value.slice(0, 120)}`
    );
  }
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Wrap word-hyphen-word compounds so Chrome cannot break the line at the hyphen.
function nowrapCompounds(html) {
  return html.replace(
    /\b([A-Za-z0-9]+(?:-[A-Za-z0-9]+)+)\b/g,
    '<span class="nb">$1</span>'
  );
}

function text(value, where) {
  assertAscii(value, where);
  return nowrapCompounds(escapeHtml(value));
}

const CSS = `
  @font-face { font-family:"Geist"; src:url("../fonts/geist/Geist-Regular.woff2") format("woff2"); font-weight:400; font-style:normal; }
  @font-face { font-family:"Geist"; src:url("../fonts/geist/Geist-Medium.woff2") format("woff2"); font-weight:500; font-style:normal; }
  @font-face { font-family:"Geist"; src:url("../fonts/geist/Geist-SemiBold.woff2") format("woff2"); font-weight:600; font-style:normal; }
  @font-face { font-family:"Geist"; src:url("../fonts/geist/Geist-Bold.woff2") format("woff2"); font-weight:700; font-style:normal; }

  :root { --ink:#111114; --body:#33333a; --muted:#5f5f68; --rule:#d9d9de; --accent:#1d5fa8; }
  * { box-sizing:border-box; }
  html, body { margin:0; padding:0; }
  @page { size:A4; margin:10mm 12mm; }

  body {
    font-family:"Geist", Arial, Helvetica, sans-serif;
    color:var(--body); font-size:10pt; line-height:1.32;
    -webkit-font-smoothing:antialiased; print-color-adjust:exact;
  }

  /* Keep compounds off line breaks so the PDF text layer keeps the hyphen. */
  .nb { white-space:nowrap; }

  .header { padding-bottom:6pt; border-bottom:1.2px solid var(--rule); margin-bottom:7pt; }
  .name { font-size:21pt; font-weight:700; letter-spacing:-0.025em; color:var(--ink); margin:0; line-height:1.06; }
  .role { font-size:11pt; font-weight:500; color:var(--accent); margin:4pt 0 0 0; }
  .contact { margin:6pt 0 0 0; font-size:9pt; color:var(--muted); }
  .contact span { white-space:nowrap; }
  .contact .bar { color:var(--rule); margin:0 5pt; }

  /* No letter-spacing: wide tracking makes pdftotext insert false word breaks,
     so "SUMMARY" extracts as "SU MMARY" and a parser cannot match the section. */
  h2.section {
    font-size:9.4pt; text-transform:uppercase; letter-spacing:0;
    color:var(--ink); font-weight:700; margin:8pt 0 3.5pt 0;
    padding-bottom:2.5pt; border-bottom:1px solid var(--rule);
  }
  section:first-of-type h2.section { margin-top:0; }

  p { margin:0; }
  .summary { color:var(--body); text-align:justify; }

  .skill { margin:0 0 2.6pt 0; }
  .skill:last-child { margin-bottom:0; }
  .skill b { color:var(--ink); font-weight:600; }

  .entry { margin-bottom:6pt; }
  .entry:last-child { margin-bottom:0; }
  .entry-head { display:flex; justify-content:space-between; align-items:baseline; gap:14pt; }
  .entry-co { color:var(--ink); font-size:10.8pt; font-weight:600; }
  .entry-co .loc { color:var(--muted); font-weight:400; font-size:9.4pt; }
  .entry-dates { color:var(--muted); font-size:9.2pt; font-weight:500; white-space:nowrap; }
  .entry-title { color:var(--ink); font-size:10pt; font-weight:500; margin:1.5pt 0 3pt 0; }

  ul { list-style:none; margin:0; padding:0; }
  li { position:relative; padding-left:11pt; margin-bottom:2.1pt; color:var(--body); }
  li:last-child { margin-bottom:0; }
  li::before { content:"${BULLET}"; position:absolute; left:1pt; top:0; color:var(--accent); }
  li b { color:var(--ink); font-weight:600; }

  .edu-line { color:var(--body); }
  .edu-line b { color:var(--ink); font-weight:600; }
`;

export function renderResume(v) {
  const c = v.contact;

  const contactLine1 = [
    c.location,
    c.availability,
    c.phone,
    c.email,
  ];
  const contactLine2 = [c.linkedin, c.github, c.portfolio];

  const line = (items, where) =>
    items
      .map((item) => `<span>${text(item, where)}</span>`)
      .join('<span class="bar">|</span>');

  const skills = v.skills
    .map(
      ([label, value], i) =>
        `<p class="skill"><b>${text(label, `skills[${i}].label`)}:</b> ${text(
          value,
          `skills[${i}].value`
        )}</p>`
    )
    .join("\n      ");

  const experience = v.experience
    .map((job, i) => {
      const bullets = job.bullets
        .map((b, j) => `<li>${text(b, `experience[${i}].bullets[${j}]`)}</li>`)
        .join("\n          ");
      return `<div class="entry">
        <div class="entry-head">
          <span class="entry-co">${text(job.company, `experience[${i}].company`)} <span class="loc">${text(
            job.location,
            `experience[${i}].location`
          )}</span></span>
          <span class="entry-dates">${text(job.dates, `experience[${i}].dates`)}</span>
        </div>
        <p class="entry-title">${text(job.title, `experience[${i}].title`)}</p>
        <ul>
          ${bullets}
        </ul>
      </div>`;
    })
    .join("\n      ");

  const listSection = (title, items, where) => `<section>
        <h2 class="section">${title}</h2>
        <ul>
          ${items
            .map((item, i) => `<li>${text(item, `${where}[${i}]`)}</li>`)
            .join("\n          ")}
        </ul>
      </section>`;

  // Short, uniform items read fine as one run-on line and buy back the vertical
  // space the experience section needs to stay inside two pages.
  const compactSection = (title, items, where) => `<section>
        <h2 class="section">${title}</h2>
        <p class="edu-line">${items
          .map((item, i) => text(item.replace(/\.$/, ""), `${where}[${i}]`))
          .join(" | ")}</p>
      </section>`;

  const edu = v.education;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${text(c.name, "name")} - ${text(v.role, "role")}</title>
<style>${CSS}</style>
</head>
<body>

  <header class="header">
    <h1 class="name">${text(c.name, "name")}</h1>
    <p class="role">${text(v.role, "role")}</p>
    <p class="contact">${line(contactLine1, "contact line 1")}</p>
    <p class="contact">${line(contactLine2, "contact line 2")}</p>
  </header>

  <section>
    <h2 class="section">Summary</h2>
    <p class="summary">${text(v.summary, "summary")}</p>
  </section>

  ${listSection("Key Achievements", v.keyAchievements, "keyAchievements")}

  <section>
    <h2 class="section">Technical Skills</h2>
    ${skills}
  </section>

  <section>
    <h2 class="section">Professional Experience</h2>
    ${experience}
  </section>

  ${listSection("Selected Projects", v.projects, "projects")}

  <section>
    <h2 class="section">Education</h2>
    <p class="edu-line"><b>${text(edu.degree, "education.degree")}</b>, ${text(
    edu.school,
    "education.school"
  )}, ${text(edu.dates, "education.dates")}. ${text(
    edu.detail,
    "education.detail"
  )}</p>
  </section>

  <section>
        <h2 class="section">Certifications and Awards</h2>
        <p class="edu-line">${v.certifications
          .map((x, i) => text(x.replace(/\.$/, ""), `certifications[${i}]`))
          .join(" | ")}</p>
        <p class="edu-line">${v.achievements
          .map((x, i) => text(x.replace(/\.$/, ""), `achievements[${i}]`))
          .join(" | ")}</p>
      </section>

</body>
</html>`;
}

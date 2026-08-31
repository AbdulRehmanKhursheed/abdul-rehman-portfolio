import { ArrowUpRight, ArrowRight } from "lucide-react";
import projects, { type Project } from "../data/projects";

function prettyHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Some entries must not be clickable: login-gated internal tools, and products
 * whose hosts are gone (Bazaar's web platform was decommissioned in 2026). A
 * dead link on a portfolio reads as a false claim, so we label the state
 * instead of shipping a 403.
 */
function unlinkedBadge(project: Project) {
  if (project.retired) return "retired";
  if (project.internal) return "internal";
  return null;
}

function FeaturedRow({ project }: { project: Project }) {
  return (
    <article
      className="py-7 border-t first:border-t-0 first:pt-0"
      style={{ borderColor: `rgb(var(--border))` }}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3
          className="text-base font-medium flex items-center gap-2.5 flex-wrap min-w-0"
          style={{ color: `rgb(var(--text-primary))` }}
        >
          {project.projectName}
          {project.leadAuthor && (
            <span
              className="font-mono text-[0.65rem] px-1.5 py-0.5 rounded"
              style={{
                color: `rgb(var(--accent))`,
                background: `rgb(var(--accent-soft))`,
              }}
            >
              primary engineer
            </span>
          )}
        </h3>
        <span
          className="font-mono text-xs sm:shrink-0"
          style={{ color: `rgb(var(--text-tertiary))` }}
        >
          {[project.role, project.year].filter(Boolean).join(" · ")}
        </span>
      </div>

      {project.metric && (
        <p
          className="mt-2 font-mono text-xs tabular-nums"
          style={{ color: `rgb(var(--accent))` }}
        >
          {project.metric.value}
          <span style={{ color: `rgb(var(--text-tertiary))` }}>
            {"  ·  "}
            {project.metric.label}
          </span>
        </p>
      )}

      <p
        className="mt-2.5 text-sm md:text-[0.95rem] leading-relaxed max-w-2xl text-pretty"
        style={{ color: `rgb(var(--text-secondary))` }}
      >
        {project.description}
      </p>

      <p className="tech-chip mt-3">{project.technologies.join("  ·  ")}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {unlinkedBadge(project) ? (
          <span
            className="inline-flex items-center gap-1.5 font-mono text-xs"
            style={{ color: `rgb(var(--text-tertiary))` }}
          >
            {prettyHost(project.link)}
            <span
              className="px-1.5 py-0.5 rounded"
              style={{ background: `rgb(var(--accent-soft))`, color: `rgb(var(--accent))` }}
            >
              {unlinkedBadge(project)}
            </span>
          </span>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-link"
          >
            {prettyHost(project.link)}
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
          </a>
        )}
        {project.caseStudyHref && (
          <a
            href={project.caseStudyHref}
            className="inline-flex items-center gap-1"
            style={{ color: `rgb(var(--accent))` }}
          >
            Case study
            <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}

function CompactRow({ project }: { project: Project }) {
  const badge = unlinkedBadge(project);
  const meta = badge ? (
    <span
      className="font-mono text-xs inline-flex items-center gap-1.5 shrink-0"
      style={{ color: `rgb(var(--text-tertiary))` }}
    >
      <span
        className="px-1.5 py-0.5 rounded"
        style={{ background: `rgb(var(--accent-soft))`, color: `rgb(var(--accent))` }}
      >
        {badge}
      </span>
    </span>
  ) : (
    <span
      className="font-mono text-xs inline-flex items-center gap-1 shrink-0"
      style={{ color: `rgb(var(--text-tertiary))` }}
    >
      {prettyHost(project.link)}
      <ArrowUpRight className="w-3.5 h-3.5" />
    </span>
  );

  const inner = (
    <>
      <span className="flex items-baseline gap-3 flex-wrap min-w-0">
        <span
          className="text-sm font-medium transition-colors group-hover:opacity-70"
          style={{ color: `rgb(var(--text-primary))` }}
        >
          {project.projectName}
        </span>
        <span
          className="text-sm truncate"
          style={{ color: `rgb(var(--text-tertiary))` }}
        >
          {project.tagline}
        </span>
      </span>
      {meta}
    </>
  );

  if (badge) {
    return (
      <div
        className="flex items-baseline justify-between gap-4 py-3.5 border-t"
        style={{ borderColor: `rgb(var(--border))` }}
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between gap-4 py-3.5 border-t"
      style={{ borderColor: `rgb(var(--border))` }}
    >
      {inner}
    </a>
  );
}

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding border-t"
      style={{
        background: `rgb(var(--surface-primary))`,
        borderColor: `rgb(var(--border))`,
      }}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10">
          <h2 className="eyebrow pt-1">Selected work</h2>
          <div className="min-w-0">
            {featured.map((p) => (
              <FeaturedRow key={p.projectName} project={p} />
            ))}

            {rest.length > 0 && (
              <div className="mt-12">
                <p className="eyebrow mb-2">More</p>
                {rest.map((p) => (
                  <CompactRow key={p.projectName} project={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

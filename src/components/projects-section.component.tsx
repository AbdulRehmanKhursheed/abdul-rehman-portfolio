import { ArrowUpRight, ArrowRight } from "lucide-react";
import projects, { type Project } from "../data/projects";

function prettyHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function FeaturedRow({ project }: { project: Project }) {
  return (
    <article
      className="py-7 border-t first:border-t-0 first:pt-0"
      style={{ borderColor: `rgb(var(--border))` }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3
          className="text-base font-medium flex items-center gap-2.5 flex-wrap"
          style={{ color: `rgb(var(--text-primary))` }}
        >
          {project.projectName}
          {project.soleAuthor && (
            <span
              className="font-mono text-[0.65rem] px-1.5 py-0.5 rounded"
              style={{
                color: `rgb(var(--accent))`,
                background: `rgb(var(--accent-soft))`,
              }}
            >
              sole author
            </span>
          )}
        </h3>
        <span
          className="font-mono text-xs shrink-0"
          style={{ color: `rgb(var(--text-tertiary))` }}
        >
          {[project.role, project.year].filter(Boolean).join(" · ")}
        </span>
      </div>

      <p
        className="mt-2.5 text-sm md:text-[0.95rem] leading-relaxed max-w-2xl text-pretty"
        style={{ color: `rgb(var(--text-secondary))` }}
      >
        {project.description}
      </p>

      <p className="tech-chip mt-3">{project.technologies.join("  ·  ")}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-link"
        >
          {prettyHost(project.link)}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        {project.caseStudyHref && (
          <a
            href={project.caseStudyHref}
            className="inline-flex items-center gap-1"
            style={{ color: `rgb(var(--accent))` }}
          >
            Case study
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

function CompactRow({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between gap-4 py-3.5 border-t"
      style={{ borderColor: `rgb(var(--border))` }}
    >
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
      <span
        className="font-mono text-xs inline-flex items-center gap-1 shrink-0"
        style={{ color: `rgb(var(--text-tertiary))` }}
      >
        {prettyHost(project.link)}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </span>
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
          <p className="eyebrow pt-1">Selected work</p>
          <div>
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

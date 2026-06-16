const LINKS = [
  { label: "Email", value: "malik.ali5560@gmail.com", href: "mailto:malik.ali5560@gmail.com" },
  { label: "WhatsApp", value: "+92 304 591 9454", href: "https://wa.me/923045919454" },
  { label: "GitHub", value: "AbdulRehmanKhursheed", href: "https://github.com/AbdulRehmanKhursheed" },
  { label: "LinkedIn", value: "malik-abdul-rehman", href: "https://www.linkedin.com/in/malik-abdul-rehman/" },
  { label: "Résumé", value: "Download PDF", href: "/api/resume" },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-padding border-t"
      style={{
        background: `rgb(var(--surface-primary))`,
        borderColor: `rgb(var(--border))`,
      }}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10">
          <p className="eyebrow pt-1">Contact</p>
          <div className="max-w-2xl">
            <p
              className="text-[0.975rem] md:text-base leading-relaxed mb-8"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              Open to senior frontend roles — remote, or Islamabad / Rawalpindi.
              Email or WhatsApp are the fastest ways to reach me.
            </p>

            <div>
              {LINKS.map(({ label, value, href }) => {
                const external = href.startsWith("http") || href === "/api/resume";
                return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline justify-between gap-4 py-3 border-t"
                  style={{ borderColor: `rgb(var(--border))` }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: `rgb(var(--text-tertiary))` }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-sm transition-colors group-hover:opacity-60"
                    style={{ color: `rgb(var(--text-primary))` }}
                  >
                    {value}
                  </span>
                </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

const Footer = () => {
  return (
    <footer
      className="border-t"
      style={{
        background: `rgb(var(--surface-primary))`,
        borderColor: `rgb(var(--border))`,
      }}
    >
      <div className="container-custom py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span
          className="font-mono text-xs"
          style={{ color: `rgb(var(--text-tertiary))` }}
        >
          © {new Date().getFullYear()} Abdul Rehman
        </span>
        <span
          className="font-mono text-xs"
          style={{ color: `rgb(var(--text-tertiary))` }}
        >
          Built with Next.js · Islamabad, PK
        </span>
      </div>
    </footer>
  );
};

export default Footer;

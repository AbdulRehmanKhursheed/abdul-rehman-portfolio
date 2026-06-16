"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const NAV = [
  { name: "Work", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      setActiveSection(current || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: isScrolled ? "rgba(255,255,255,0.82)" : "transparent",
        borderBottom: `1px solid ${
          isScrolled ? "rgb(var(--border))" : "transparent"
        }`,
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Wordmark */}
          <button
            onClick={() => {
              router.push("/");
              scrollToSection("hero");
            }}
            className="flex items-baseline gap-2.5 group"
          >
            <span
              className="font-display text-lg leading-none tracking-tight"
              style={{ color: `rgb(var(--text-primary))`, fontWeight: 900 }}
            >
              Abdul Rehman
            </span>
            <span
              className="hidden sm:inline font-mono text-[0.68rem]"
              style={{ color: `rgb(var(--text-tertiary))` }}
            >
              /// FE ENGINEER
            </span>
          </button>

          {/* Nav — mono, right-aligned, no pill */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item, i) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-xs transition-colors flex items-center gap-1.5"
                style={{
                  color:
                    activeSection === item.id
                      ? `rgb(var(--text-primary))`
                      : `rgb(var(--text-secondary))`,
                }}
              >
                <span style={{ color: `rgb(var(--text-tertiary))` }}>
                  0{i + 1}
                </span>
                {item.name}
              </button>
            ))}
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs underline underline-offset-4 decoration-1 transition-colors"
              style={{ color: `rgb(var(--accent))` }}
            >
              Résumé ↗
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden border-t"
              style={{
                borderColor: `rgb(var(--border))`,
                background: `rgb(var(--surface-primary))`,
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 flex flex-col gap-1">
                {NAV.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="font-mono text-sm text-left px-1 py-2.5 flex items-center gap-2"
                    style={{ color: `rgb(var(--text-primary))` }}
                  >
                    <span style={{ color: `rgb(var(--text-tertiary))` }}>
                      0{i + 1}
                    </span>
                    {item.name}
                  </button>
                ))}
                <a
                  href="/api/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-1 py-2.5"
                  style={{ color: `rgb(var(--accent))` }}
                >
                  Résumé ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

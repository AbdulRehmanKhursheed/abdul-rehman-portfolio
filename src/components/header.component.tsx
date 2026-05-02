"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Github, Linkedin, Download } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
    scrollToSection("hero");
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
      style={{
        background: isScrolled ? "rgba(250, 250, 249, 0.85)" : "transparent",
        borderBottom: isScrolled
          ? `1px solid rgb(var(--border))`
          : `1px solid transparent`,
        backdropFilter: isScrolled ? "blur(12px) saturate(140%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px) saturate(140%)" : "none",
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center"
              style={{ background: `rgb(var(--primary))` }}
            >
              <span
                className="font-semibold text-sm"
                style={{ color: `rgb(var(--primary-foreground))` }}
              >
                AR
              </span>
            </div>
            <div className="hidden sm:block">
              <span
                className="font-semibold text-base tracking-tight"
                style={{ color: `rgb(var(--text-primary))` }}
              >
                Abdul Rehman
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="https://github.com/AbdulRehmanKhursheed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md transition-colors hover:bg-[rgb(var(--surface-secondary))]"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/malik-abdul-rehman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md transition-colors hover:bg-[rgb(var(--surface-secondary))]"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="p-2 rounded-md transition-colors hover:bg-[rgb(var(--surface-secondary))] mr-2"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              <Download size={18} />
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="button-primary inline-flex items-center gap-2"
            >
              <Mail size={14} />
              <span>Get in touch</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors"
            aria-label="Toggle menu"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t"
              style={{
                borderColor: `rgb(var(--border))`,
                background: `rgb(var(--surface-primary))`,
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2.5 rounded-md font-medium transition-colors"
                    style={{
                      color:
                        activeSection === item.id
                          ? `rgb(var(--text-primary))`
                          : `rgb(var(--text-secondary))`,
                    }}
                  >
                    {item.name}
                  </button>
                ))}

                <div
                  className="pt-4 mt-2 px-4 flex items-center justify-between border-t"
                  style={{ borderColor: `rgb(var(--border))` }}
                >
                  <div className="flex items-center gap-1 pt-3">
                    <a
                      href="https://github.com/AbdulRehmanKhursheed"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-md"
                      style={{ color: `rgb(var(--text-secondary))` }}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/malik-abdul-rehman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-md"
                      style={{ color: `rgb(var(--text-secondary))` }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="/api/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Resume"
                      className="p-2 rounded-md"
                      style={{ color: `rgb(var(--text-secondary))` }}
                    >
                      <Download size={18} />
                    </a>
                  </div>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="button-primary inline-flex items-center gap-2 mt-3"
                  >
                    <Mail size={14} />
                    <span>Get in touch</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

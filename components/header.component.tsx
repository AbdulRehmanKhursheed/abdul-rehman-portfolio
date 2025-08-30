"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Github, Linkedin, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find(section => {
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

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-800/50 light:bg-white/95 light:border-slate-200/50"
          : "bg-transparent"
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-white font-bold text-sm">AR</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl gradient-text">
                Abdul Rehman
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id!)}
                className={`nav-link relative ${
                  activeSection === item.id ? "active" : ""
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <motion.a
                href="https://github.com/AbdulRehmanKhursheed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/malik-abdul-rehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-all duration-200 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
              </motion.a>
              <ThemeToggle />
            </div>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:via-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 light:hover:bg-slate-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl light:border-slate-200 light:bg-white/95"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id!)}
                    className={`block w-full text-left px-4 py-3 text-slate-300 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-all duration-200 font-medium light:text-slate-700 light:hover:text-slate-900 light:hover:bg-slate-50 ${
                      activeSection === item.id ? "text-indigo-400 bg-indigo-900/20 light:text-indigo-600 light:bg-indigo-50" : ""
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <div className="px-4 pt-6 border-t border-slate-800 light:border-slate-200">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <motion.a
                      href="https://github.com/AbdulRehmanKhursheed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-all duration-200 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/malik-abdul-rehman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-all duration-200 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-all duration-200 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={20} />
                    </motion.a>
                    <ThemeToggle />
                  </div>

                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:via-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={16} />
                    <span>Get in Touch</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/AbdulRehmanKhursheed",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/malik-abdul-rehman/",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:mali.ali5560@gmail.com",
    },
    {
      icon: Download,
      label: "Resume",
      url: "/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <motion.div className="lg:col-span-2" variants={itemVariants}>
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">
                      Abdul Rehman
                    </h3>
                    <p className="text-slate-400">
                      Full Stack Developer & Cloud Engineer
                    </p>
                  </div>
                </motion.div>

                <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                  Crafting exceptional digital experiences with modern
                  technologies. Specialized in React, Next.js, AWS, and cloud
                  infrastructure.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Contact
                </h4>
                <div className="space-y-3 text-slate-400">
                  <p>malik.ali5560@gmail.com</p>
                  <p>+92 304 5919 454</p>
                  <p>Pakistan</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-slate-800 py-6"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400">
                <span>Designed & Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>by Abdul Rehman</span>
              </div>

              <div className="flex items-center space-x-4 text-slate-400">
                <span>Made with</span>
                <span className="px-2 py-1 bg-slate-800 rounded text-xs">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-slate-800 rounded text-xs">
                  Framer Motion
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;

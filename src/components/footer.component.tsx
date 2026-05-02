"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
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
      url: "mailto:malik.ali5560@gmail.com",
    },
    {
      icon: Download,
      label: "Resume",
      url: "/api/resume",
    },
  ];

  return (
    <footer
      style={{
        background: `rgb(var(--surface-primary))`,
        color: `rgb(var(--text-primary))`,
        borderTop: `1px solid rgb(var(--border))`,
      }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p
              className="font-semibold tracking-tight"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              Abdul Rehman
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: `rgb(var(--text-tertiary))` }}
            >
              Senior Frontend Engineer · Islamabad, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-md transition-colors"
                style={{ color: `rgb(var(--text-secondary))` }}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <div
          className="py-5 text-xs flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between"
          style={{
            borderTop: `1px solid rgb(var(--border))`,
            color: `rgb(var(--text-tertiary))`,
          }}
        >
          <span>© {new Date().getFullYear()} Abdul Rehman</span>
          <span>malik.ali5560@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

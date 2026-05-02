"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: `rgb(var(--surface-secondary))` }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: `rgb(var(--text-tertiary))` }}
          >
            Contact
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05] mb-6"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            Open to senior frontend roles.
          </h2>
          <p
            className="text-lg leading-relaxed mb-12"
            style={{ color: `rgb(var(--text-secondary))` }}
          >
            Remote, or Islamabad / Rawalpindi.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
            <a
              href="mailto:malik.ali5560@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `rgb(var(--surface-primary))`,
                  border: `1px solid rgb(var(--border))`,
                }}
              >
                <Mail
                  className="w-5 h-5"
                  style={{ color: `rgb(var(--text-secondary))` }}
                />
              </div>
              <div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: `rgb(var(--text-tertiary))` }}
                >
                  Email
                </div>
                <div
                  className="font-medium group-hover:underline"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  malik.ali5560@gmail.com
                </div>
              </div>
            </a>

            <a href="tel:+923045919454" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `rgb(var(--surface-primary))`,
                  border: `1px solid rgb(var(--border))`,
                }}
              >
                <Phone
                  className="w-5 h-5"
                  style={{ color: `rgb(var(--text-secondary))` }}
                />
              </div>
              <div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: `rgb(var(--text-tertiary))` }}
                >
                  Phone
                </div>
                <div
                  className="font-medium group-hover:underline"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  +92 304 5919 454
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: `rgb(var(--surface-primary))`,
                  border: `1px solid rgb(var(--border))`,
                }}
              >
                <MapPin
                  className="w-5 h-5"
                  style={{ color: `rgb(var(--text-secondary))` }}
                />
              </div>
              <div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: `rgb(var(--text-tertiary))` }}
                >
                  Based in
                </div>
                <div
                  className="font-medium"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  Islamabad, Pakistan
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/AbdulRehmanKhursheed"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/malik-abdul-rehman/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

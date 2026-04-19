"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Zap,
  Users,
  Globe,
  Award,
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Server,
} from "lucide-react";

const AboutMe = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "React & Next.js",
      level: 95,
      icon: Code,
      color: "from-indigo-500 to-cyan-500",
    },
    {
      name: "TypeScript & JavaScript",
      level: 92,
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "NestJS & Node.js",
      level: 88,
      icon: Server,
      color: "from-cyan-500 to-emerald-500",
    },
    {
      name: "Redux & React Query",
      level: 90,
      icon: Zap,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "AWS & Cloud (S3, CloudFront, Lambda)",
      level: 85,
      icon: Cloud,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "MongoDB & REST APIs",
      level: 87,
      icon: Database,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const experiences = [
    {
      year: "March 2023 – Present",
      title: "Senior Software Engineer I",
      company: "Bazaar Technologies",
      description:
        "Lead development of the Bazaar Web App (Next.js + NestJS) serving 100k+ active users. Cut CDN costs by $450/month, reduced LCP by 40%, and drove a 47% increase in customer order value via gamification features. Drove TDD and SOLID adoption across teams. Hackathon runner-up.",
    },
    {
      year: "Aug 2021 – March 2023",
      title: "Senior Front-End Engineer & Junior Team Lead",
      company: "Orcalo Holdings",
      description:
        "Mentored and managed 24 junior developers, ensuring timely feature delivery. Introduced the Component-Container pattern to separate UI from business logic. Integrated React Query and other tools to improve client-server performance.",
    },
    {
      year: "Nov 2020 – Jun 2021",
      title: "Software Engineer Intern (Python / Frontend)",
      company: "Web Mekanics",
      description:
        "Developed responsive front-end designs for automobile-related products. Built REST APIs using Django to retrieve and present real-time data insights.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "5+", icon: Clock },
    { label: "Projects Delivered", value: "20+", icon: Award },
    { label: "Technologies Mastered", value: "15+", icon: Code },
    { label: "Active Users Served", value: "100k+", icon: Users },
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
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: `rgb(var(--surface-secondary))` }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium mb-6"
              style={{
                background: `rgb(var(--surface-secondary))`,
                border: `1px solid rgb(var(--border))`,
                color: `rgb(var(--text-primary))`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Code className="w-4 h-4" />
              <span>About Me</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold heading-gradient mb-6">
              Crafting Digital Excellence
            </h2>

            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              I&apos;m a Front-End Heavy Full-Stack Engineer with 5 years of
              experience building and scaling high-traffic web applications.
              Specialized in React, Next.js, and NestJS — with a record of
              cutting costs, boosting performance, and driving revenue impact.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: `rgb(var(--surface-primary))`,
                  border: `1px solid rgb(var(--border))`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: `rgb(var(--text-secondary))` }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold heading-gradient mb-4">
                  My Journey
                </h3>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: `rgb(var(--text-secondary))` }}
                >
                  Over 5 years I&apos;ve built and shipped products at every
                  layer of the stack — from pixel-perfect React UIs to NestJS
                  APIs and AWS infrastructure. I thrive on measurable impact:
                  saving $5,400/year in CDN costs, cutting LCP by 40%, and
                  boosting order value by 47% with a single gamification
                  feature.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ color: `rgb(var(--text-secondary))` }}
                >
                  I care deeply about code quality — TDD, SOLID principles, and
                  clean architecture are non-negotiables for me. I&apos;ve also
                  led and mentored teams, introduced design patterns like
                  Component-Container, and driven engineering culture changes
                  across organizations.
                </p>
              </div>

              {/* Key Strengths */}
              <div>
                <h3 className="text-2xl font-bold heading-gradient mb-6">
                  Key Strengths
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: "Performance Optimization" },
                    { icon: Shield, label: "TDD & SOLID Principles" },
                    { icon: TrendingUp, label: "Scalable Architecture" },
                    { icon: Users, label: "Team Leadership & Mentoring" },
                  ].map((strength, index) => (
                    <motion.div
                      key={strength.label}
                      className="flex items-center space-x-3 p-3 rounded-xl"
                      style={{
                        background: `rgb(var(--surface-secondary))`,
                        border: `1px solid rgb(var(--border))`,
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <strength.icon className="w-4 h-4 text-white" />
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: `rgb(var(--text-primary))` }}
                      >
                        {strength.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-bold heading-gradient mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <span
                          className="font-semibold"
                          style={{
                            color: isDark ? "#ffffff" : "#1e293b",
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h3 className="text-2xl font-bold heading-gradient mb-6">
                  Experience Timeline
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.year}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span
                            className="text-sm font-medium"
                            style={{ color: `rgb(var(--primary))` }}
                          >
                            {exp.year}
                          </span>
                        </div>
                        <h4
                          className="font-semibold"
                          style={{ color: `rgb(var(--text-primary))` }}
                        >
                          {exp.title}
                        </h4>
                        <p
                          className="text-sm font-medium"
                          style={{ color: `rgb(var(--text-secondary))` }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: `rgb(var(--text-secondary))` }}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

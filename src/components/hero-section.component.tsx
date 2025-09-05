"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Download,
  Sparkles,
} from "lucide-react";
import DisplayPictureComponent from "./display-picture.component";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "Android",
  "Kotlin",
  "Python",
];

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-5 flex items-center relative overflow-hidden"
      style={{ background: `rgb(var(--surface-primary))` }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] light:bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)]" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div
            className="space-y-8 lg:space-y-10 order-2 lg:order-1"
            variants={itemVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-full shadow-lg light:bg-white/80 light:border-slate-200"
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-slate-300 light:text-slate-700">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Abdul</span>
                <br />
                <span className="heading-gradient">Rehman</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4" style={{ color: `rgb(var(--text-secondary))` }}>
                Senior Software Engineer & Full Stack Developer
              </h2>
              <p className="text-lg leading-relaxed max-w-lg" style={{ color: `rgb(var(--text-secondary))` }}>
                Passionate software engineer with 4.5+ years of experience
                building scalable web applications and mobile solutions. Expert
                in React, Next.js, Node.js, AWS, and modern development
                practices. Proven track record of delivering high-performance
                applications serving thousands of users.
              </p>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 backdrop-blur-sm rounded-full text-sm font-medium"
                  style={{ 
                    background: `rgb(var(--surface-secondary))`,
                    border: `1px solid rgb(var(--border))`,
                    color: `rgb(var(--text-primary))`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="button-primary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="button-secondary flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6"
            >
              <motion.a
                href="https://github.com/AbdulRehmanKhursheed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group light:bg-white/60 light:border-slate-200 light:hover:bg-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-slate-300 group-hover:text-slate-100 light:text-slate-700 light:group-hover:text-slate-900" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/malik-abdul-rehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group light:bg-white/60 light:border-slate-200 light:hover:bg-white"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-slate-100 light:text-slate-700 light:group-hover:text-slate-900" />
              </motion.a>
              <motion.a
                href="/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group light:bg-white/60 light:border-slate-200 light:hover:bg-white"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 text-slate-300 group-hover:text-slate-100 light:text-slate-700 light:group-hover:text-slate-900" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate="animate"
              variants={floatingVariants}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Profile Picture Container */}
              <div className="relative bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-full p-2 shadow-2xl light:bg-white/20 light:border-slate-200/30">
                <DisplayPictureComponent />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white text-xs font-bold">AR</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full shadow-lg"
                animate={{ y: [5, -5, 5], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all duration-300 group light:bg-white/60 light:border-slate-200 light:hover:bg-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-5 h-5 text-slate-400 group-hover:text-slate-100 light:text-slate-600 light:group-hover:text-slate-900" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

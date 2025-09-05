"use client";

import { motion } from "framer-motion";
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
      name: "Node.js & Python",
      level: 88,
      icon: Server,
      color: "from-cyan-500 to-emerald-500",
    },
    {
      name: "Android & Kotlin",
      level: 90,
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "AWS & Cloud",
      level: 85,
      icon: Cloud,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Database & APIs",
      level: 87,
      icon: Database,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const experiences = [
    {
      year: "March 2023 - Present",
      title: "Senior Software Engineer",
      company: "Bazaar Technologies",
      description:
        "Developed B2C e-commerce bazaar webapp platform serving thousands of users. Built React/Next.js frontend with 99% test coverage, and optimized performance by improving web vitals. Mentoring junior developers and establishing best practices and storybook.",
    },
    {
      year: "August 2021 - March 2023",
      title: "Full Stack Developer - Junior Front-End Lead",
      company: "Orcalo Holdings",
      description:
        "Developed scalable web applications and mobile solutions. Led frontend team initiatives, implemented performance optimizations achieving 60% faster load times, and delivered multiple projects using React, Node.js, and cloud technologies.",
    },
    {
      year: "November 2020 - August 2021",
      title: "Software Developer Intern",
      company: "Web Mechanics",
      description:
        "Gained foundational experience in full-stack development. Worked with HTML, CSS, JavaScript, React, Python, and database technologies. Contributed to client projects and learned industry best practices.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "4.5+", icon: Clock },
    { label: "Projects Delivered", value: "20+", icon: Award },
    { label: "Technologies Mastered", value: "15+", icon: Code },
    { label: "Happy Clients", value: "50+", icon: Users },
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
      className="section-padding bg-slate-800 light:bg-white relative overflow-hidden"
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-900/20 border border-purple-800 rounded-full text-purple-300 font-medium mb-6 light:bg-purple-50 light:border-purple-200 light:text-purple-700"
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

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed light:text-slate-600">
              I&apos;m a passionate Senior Software Engineer with 4+ years of
              experience in full-stack development, mobile applications, and
              cloud infrastructure. I specialize in building scalable,
              high-performance applications that serve thousands of users daily.
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
                className="text-center p-6 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 light:bg-white/60 light:border-slate-200"
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
                <div className="text-sm text-slate-400 light:text-slate-600">
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
                <p className="text-slate-400 leading-relaxed mb-6 light:text-slate-600">
                  I&apos;ve spent the last 4.5+ years immersed in the world of
                  software development, working on projects that range from
                  mobile applications to enterprise-scale web platforms. My
                  passion lies in creating solutions that not only work
                  flawlessly but also provide exceptional user experiences and
                  drive business value.
                </p>
                <p className="text-slate-400 leading-relaxed light:text-slate-600">
                  I specialize in React, Next.js, TypeScript, Node.js, Android
                  development with Kotlin, and AWS cloud infrastructure. With a
                  strong focus on performance optimization, security, and
                  scalable architecture, I&apos;ve successfully delivered
                  applications serving thousands of users daily while
                  maintaining 99%+ test coverage.
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
                    { icon: Shield, label: "Security Best Practices" },
                    { icon: TrendingUp, label: "Scalable Architecture" },
                    { icon: Smartphone, label: "Mobile-First Design" },
                  ].map((strength, index) => (
                    <motion.div
                      key={strength.label}
                      className="flex items-center space-x-3 p-3 bg-slate-800/40 rounded-xl light:bg-slate-100/40"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <strength.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-300 light:text-slate-700">
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
                        <span className="font-semibold text-slate-300 light:text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                      <div className="ml-11">
                        <div className="w-full bg-slate-700/50 rounded-full h-2 light:bg-slate-200">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level || 90}%` }}
                            transition={{
                              delay: 0.7 + index * 0.1,
                              duration: 1,
                            }}
                          />
                        </div>
                        <div className="text-xs text-slate-500 mt-1 light:text-slate-500">
                          {skill.level || 90}% Proficiency
                        </div>
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
                          <span className="text-sm font-medium text-indigo-400 light:text-indigo-600">
                            {exp.year}
                          </span>
                        </div>
                        <h4 className="font-semibold text-slate-100 light:text-slate-900">
                          {exp.title}
                        </h4>
                        <p className="text-sm text-slate-400 font-medium light:text-slate-600">
                          {exp.company}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed light:text-slate-600">
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

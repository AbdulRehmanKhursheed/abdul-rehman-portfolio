"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Cloud, 
  Database, 
  Smartphone, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  Award,
  Clock,
  Globe,
  Cpu
} from "lucide-react";

const AboutMe = () => {
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

  const skills = [
    { name: "React", level: 95, category: "Frontend", icon: Code },
    { name: "Next.js", level: 90, category: "Frontend", icon: Code },
    { name: "TypeScript", level: 88, category: "Language", icon: Code },
    { name: "Node.js", level: 85, category: "Backend", icon: Database },
    { name: "AWS", level: 82, category: "Cloud", icon: Cloud },
    { name: "Docker", level: 80, category: "DevOps", icon: Cpu },
    { name: "MongoDB", level: 78, category: "Database", icon: Database },
    { name: "React Native", level: 75, category: "Mobile", icon: Smartphone },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Bazaar Technologies",
      period: "2023 - Present",
      description: "Leading development of enterprise-grade B2B & B2C platforms with React, Next.js, and AWS infrastructure.",
      achievements: ["Reduced cloud costs by 57%", "Achieved 99% test coverage", "Improved web vitals by 40%"]
    },
    {
      title: "Full Stack Developer",
      company: "Various Companies",
      period: "2021 - 2023",
      description: "Built scalable web applications and mobile apps for multiple clients across different industries.",
      achievements: ["Delivered 15+ projects", "Mentored junior developers", "Implemented CI/CD pipelines"]
    },
    {
      title: "Software Engineer",
      company: "Freelance & Startups",
      period: "2019 - 2021",
      description: "Developed full-stack solutions and contributed to open-source projects while learning modern technologies.",
      achievements: ["Built 20+ applications", "Contributed to open source", "Learned cloud technologies"]
    }
  ];

  const stats = [
    { label: "Years Experience", value: "5+", icon: Clock },
    { label: "Projects Delivered", value: "50+", icon: Award },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Countries Served", value: "10+", icon: Globe },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />

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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6"
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
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                             I&apos;m a passionate Full Stack Developer and Cloud Engineer with 5+ years of experience 
              building scalable, high-performance applications. I specialize in modern web technologies 
              and cloud infrastructure, delivering exceptional user experiences.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold heading-gradient mb-6">
                My Journey in Tech
              </h3>
              
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  I started my journey in web development with a passion for creating meaningful digital experiences. 
                  Over the years, I&apos;ve evolved from building simple websites to architecting complex enterprise solutions 
                  that serve thousands of users daily.
                </p>
                
                <p>
                  My expertise spans the entire development stack - from crafting responsive user interfaces with React 
                  and Next.js to designing scalable backend architectures with Node.js and cloud services. I&apos;m particularly 
                  passionate about cloud infrastructure and have helped organizations optimize their AWS deployments, 
                  reducing costs while improving performance.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and following best practices. Test-driven development, 
                  continuous integration, and performance optimization are core principles in my work. I&apos;m always eager 
                  to learn new technologies and share knowledge with the developer community.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold heading-gradient mb-4">Key Strengths</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, text: "Performance Optimization" },
                    { icon: Shield, text: "Security Best Practices" },
                    { icon: Users, text: "Team Collaboration" },
                    { icon: TrendingUp, text: "Scalable Architecture" },
                  ].map((strength, index) => (
                    <motion.div
                      key={strength.text}
                      className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <strength.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{strength.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills & Experience */}
            <motion.div variants={itemVariants}>
              {/* Skills Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold heading-gradient mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-slate-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h3 className="text-2xl font-bold heading-gradient mb-6">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                    >
                      <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-slate-900 text-lg">{exp.title}</h4>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-3">{exp.description}</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
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

"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Heart,
  ArrowUp,
  Code,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/AbdulRehmanKhursheed",
      color: "hover:bg-slate-900 hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/malik-abdul-rehman/",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:abdulrehman.dev@gmail.com",
      color: "hover:bg-red-600 hover:text-white"
    },
    {
      icon: Download,
      name: "Resume",
      url: "/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf",
      color: "hover:bg-green-600 hover:text-white"
    }
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
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

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
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Abdul Rehman</h3>
                    <p className="text-slate-400">Full Stack Developer & Cloud Engineer</p>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                  Passionate about creating exceptional digital experiences with modern technologies. 
                  Specialized in React, Next.js, AWS, and cloud infrastructure.
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
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
                        className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-200" />
                        <span>{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-3 text-slate-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a 
                      href="mailto:abdulrehman.dev@gmail.com"
                      className="hover:text-white transition-colors duration-200"
                    >
                      abdulrehman.dev@gmail.com
                    </a>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-3 text-slate-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AR</span>
                    </div>
                    <span>Pakistan</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-slate-800 py-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.div 
                className="flex items-center space-x-2 text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Code className="w-4 h-4" />
                <span>Designed & Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by Abdul Rehman</span>
                <span className="text-slate-500">© {currentYear}</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-slate-400 text-sm">Made with</span>
                <div className="flex items-center space-x-1">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-slate-300 text-sm">Next.js & Framer Motion</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;

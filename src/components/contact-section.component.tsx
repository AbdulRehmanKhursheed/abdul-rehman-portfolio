"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Download,
  MessageSquare,
  Zap,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("success");
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "malik.ali5560@gmail.com",
      description: "Professional inquiries welcome",
      link: "mailto:malik.ali5560@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 304 5919 454",
      description: "Available for project discussions",
      link: "tel:+923045919454",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Pakistan",
      description: "Open to remote & on-site work",
      link: "#",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Full-time",
      description: "Ready for new opportunities",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/AbdulRehmanKhursheed",
      color: "hover:text-slate-100 light:hover:text-slate-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/malik-abdul-rehman/",
      color: "hover:text-indigo-400",
    },
    {
      icon: Download,
      label: "Resume",
      url: "/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf",
      color: "hover:text-emerald-400",
    },
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
      id="contact" 
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-900/20 border border-orange-800 rounded-full text-orange-300 font-medium mb-6 light:bg-orange-50 light:border-orange-200 light:text-orange-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold heading-gradient mb-6">
              Let&apos;s Work Together
            </h2>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed light:text-slate-600">
              I&apos;m always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group light:bg-white/60 light:border-slate-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 mb-1 light:text-slate-900">
                        {info.title}
                      </h3>
                      <p className="text-slate-300 font-medium mb-1 light:text-slate-700">
                        {info.value}
                      </p>
                      <p className="text-sm text-slate-400 light:text-slate-500">
                        {info.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="p-6 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl text-center light:bg-white/60 light:border-slate-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-100 mb-1 light:text-slate-900">
                    Available
                  </h4>
                  <p className="text-sm text-slate-400 light:text-slate-500">
                    For new projects
                  </p>
                </motion.div>

                <motion.div
                  className="p-6 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl text-center light:bg-white/60 light:border-slate-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-100 mb-1 light:text-slate-900">
                    Response Time
                  </h4>
                  <p className="text-sm text-slate-400 light:text-slate-500">
                    Within 24 hours
                  </p>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 ${social.color} light:bg-white/60 light:border-slate-200 light:hover:bg-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 light:text-slate-600" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl light:bg-white/60 light:border-slate-200">
                <h3 className="text-2xl font-bold heading-gradient mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 light:text-slate-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-slate-100 placeholder-slate-400 light:bg-white light:border-slate-300 light:text-slate-900 light:placeholder-slate-500"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 light:text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-slate-100 placeholder-slate-400 light:bg-white light:border-slate-300 light:text-slate-900 light:placeholder-slate-500"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 light:text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-slate-100 placeholder-slate-400 resize-none light:bg-white light:border-slate-300 light:text-slate-900 light:placeholder-slate-500"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full button-primary flex items-center justify-center space-x-2 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        className="flex items-center space-x-2 p-4 bg-emerald-900/20 border border-emerald-800 rounded-xl text-emerald-300 light:bg-emerald-50 light:border-emerald-200 light:text-emerald-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Message sent successfully!</span>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        className="flex items-center space-x-2 p-4 bg-red-900/20 border border-red-800 rounded-xl text-red-300 light:bg-red-50 light:border-red-200 light:text-red-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AlertCircle className="w-5 h-5" />
                        <span>Something went wrong. Please try again.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

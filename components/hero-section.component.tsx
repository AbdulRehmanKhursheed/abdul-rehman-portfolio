"use client";

import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import DisplayPictureComponent from "./display-picture.component";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Greeting */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />
              <span className="text-lg font-medium text-gray-600">Hello, I&apos;m</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abdul Rehman
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600">
              Full Stack Developer & Cloud Engineer
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg">
              Crafting exceptional digital experiences with modern technologies. 
              Specialized in React, Next.js, AWS, and cloud infrastructure. 
              Passionate about performance, security, and scalable solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30" />
              <div className="relative">
                <DisplayPictureComponent />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

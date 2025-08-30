"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import projects from "../data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectIndex: number;
}

export function ProjectModal({ isOpen, onClose, projectIndex }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projects[projectIndex];

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3); // Assuming 3 images per project
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold heading-gradient">{project.projectName}</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{project.category}</p>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Project Images */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">AR</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">{project.projectName}</h3>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {[
                    "Responsive design for all devices",
                    "Modern UI/UX with smooth animations",
                    "Optimized performance and loading times",
                    "Scalable architecture and best practices",
                    "Comprehensive testing and documentation"
                  ].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 p-6 border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center space-x-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                </div>
                <motion.button
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Filter,
  Code,
  Smartphone,
  Cloud,
  Database,
  Eye,
  ArrowRight,
  Star,
  Users,
  Zap,
} from "lucide-react";
import projects from "../data/projects";
import React from "react";
import { ProjectModal } from "./project-modal";

// Helper functions
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web App":
      return Code;
    case "Mobile App":
      return Smartphone;
    case "Infrastructure":
      return Cloud;
    default:
      return Database;
  }
};

const getFaviconUrl = (url: string) => {
  if (!url || url === "#") return null;
  try {
    const domain = new URL(url).hostname;
    // Use multiple favicon services for better reliability
    return `https://favicon.im/${domain}?larger=true`;
  } catch {
    return null;
  }
};

// Project Icon Component with Local Icon and Favicon Support
const ProjectIcon = ({
  project,
  size = 24,
  className = "",
}: {
  project: any;
  size?: number;
  className?: string;
}) => {
  const [faviconError, setFaviconError] = useState(false);
  const [faviconLoaded, setFaviconLoaded] = useState(false);
  const CategoryIcon = getCategoryIcon(project.category);

  // Use local icon if available
  if (project.localIcon) {
    return (
      <Image
        src={project.localIcon}
        alt={`${project.projectName} icon`}
        width={size}
        height={size}
        className={`rounded-sm ${className}`}
      />
    );
  }

  // Fallback to favicon
  const faviconUrl = getFaviconUrl(project.link);
  if (faviconUrl && !faviconError) {
    return (
      <div className="relative flex items-center justify-center">
        <Image
          src={faviconUrl}
          alt={`${project.projectName} favicon`}
          width={size}
          height={size}
          className={`rounded-sm transition-opacity duration-200 ${
            faviconLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onError={() => setFaviconError(true)}
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            // Check if the image is actually loaded and not a tiny/broken icon
            if (img.naturalWidth >= 16 && img.naturalHeight >= 16) {
              setFaviconLoaded(true);
            } else {
              setFaviconError(true);
            }
          }}
          unoptimized
        />
        {!faviconLoaded && !faviconError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <CategoryIcon size={size} className={`text-white ${className}`} />
          </div>
        )}
      </div>
    );
  }

  // Final fallback to category icon
  return <CategoryIcon size={size} className={`text-white ${className}`} />;
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const categories = [
    "All",
    "Web App",
    "Mobile App",
    "Infrastructure",
    "Other",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web App":
        return "from-indigo-500 to-cyan-500";
      case "Mobile App":
        return "from-purple-500 to-pink-500";
      case "Infrastructure":
        return "from-cyan-500 to-emerald-500";
      default:
        return "from-orange-500 to-red-500";
    }
  };

  const openProjectModal = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const closeProjectModal = () => {
    setSelectedProjectIndex(null);
  };

  return (
    <>
      <section
        id="projects"
        className="section-padding relative overflow-hidden"
        style={{ background: `rgb(var(--surface-primary))` }}
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
                className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-900/20 border border-indigo-800 rounded-full text-indigo-300 font-medium mb-6 light:bg-indigo-50 light:border-indigo-200 light:text-indigo-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Code className="w-4 h-4" />
                <span>My Work</span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold heading-gradient mb-6">
                Featured Projects
              </h2>

              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: `rgb(var(--text-secondary))` }}>
                Here are some of my recent projects that showcase my expertise
                in full-stack development, cloud infrastructure, and mobile
                applications. Each project demonstrates different aspects of
                modern software development.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 light:bg-white light:text-slate-600 light:hover:bg-slate-100 light:border-slate-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4" />
                  <span>{category}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
              variants={containerVariants}
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.projectName}
                    className="project-card group relative overflow-hidden cursor-pointer flex flex-col h-full"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onHoverStart={() => setHoveredProject(project.projectName)}
                    onHoverEnd={() => setHoveredProject(null)}
                    onClick={() => openProjectModal(index)}
                    layout
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div
                        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                          project.category
                        )} text-white text-xs font-medium rounded-full flex items-center space-x-1`}
                      >
                        <ProjectIcon project={project} size={12} className="" />
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full flex items-center space-x-1">
                          <Star size={12} />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}

                    {/* Project Image Placeholder */}
                    <div 
                      className="relative h-40 rounded-xl mb-4 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, rgb(var(--surface-tertiary)), rgb(var(--surface-secondary)))`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <ProjectIcon
                              project={project}
                              size={24}
                              className=""
                            />
                          </div>
                          <h3 
                            className="font-semibold"
                            style={{ color: `rgb(var(--text-primary))` }}
                          >
                            {project.projectName}
                          </h3>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-cyan-600/90 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity:
                            hoveredProject === project.projectName ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex space-x-4">
                          <motion.div
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col flex-grow space-y-4">
                      <h3 className="text-xl font-bold heading-gradient group-hover:gradient-text transition-all duration-300">
                        {project.projectName}
                      </h3>

                      <p className="leading-relaxed flex-grow text-sm line-clamp-4" style={{ color: `rgb(var(--text-secondary))` }}>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              background: `rgb(var(--surface-secondary))`,
                              color: `rgb(var(--text-primary))`
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span 
                            className="px-2 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              background: `rgb(var(--surface-secondary))`,
                              color: `rgb(var(--text-primary))`
                            }}
                          >
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View Details Button - Always at bottom */}
                      <motion.div
                        className="flex justify-center items-center text-white font-medium group/link bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg p-3 mt-auto"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Details</span>
                        <ArrowRight className="ms-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* CTA Section */}
            <motion.div className="text-center mt-16" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 px-6 py-3 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                style={{
                  background: `rgb(var(--surface-primary))`,
                  border: `1px solid rgb(var(--border))`
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5 text-indigo-500" />
                <span 
                  className="font-medium"
                  style={{ color: `rgb(var(--text-primary))` }}
                >
                  View All Projects
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={selectedProjectIndex !== null}
        onClose={closeProjectModal}
        projectIndex={selectedProjectIndex || 0}
      />
    </>
  );
};

export default ProjectsSection;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        className="section-padding bg-slate-900 light:bg-slate-50 relative overflow-hidden"
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

              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed light:text-slate-600">
                Here are some of my recent projects that showcase my expertise
                in full-stack development, cloud infrastructure, and mobile
                applications. Each project demonstrates different aspects of
                modern software development.
              </p>
            </motion.div>

            {/* Filter Tabs */}
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.projectName}
                    className="project-card group relative overflow-hidden cursor-pointer"
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
                        {React.createElement(
                          getCategoryIcon(project.category),
                          { size: 12 }
                        )}
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
                    <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl mb-6 overflow-hidden light:from-slate-100 light:to-slate-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            {React.createElement(
                              getCategoryIcon(project.category),
                              {
                                size: 24,
                                className: "text-white",
                              }
                            )}
                          </div>
                          <h3 className="font-semibold text-slate-300 light:text-slate-700">
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
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold heading-gradient group-hover:gradient-text transition-all duration-300">
                        {project.projectName}
                      </h3>

                      <p className="text-slate-400 leading-relaxed line-clamp-3 light:text-slate-600">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium light:bg-slate-100 light:text-slate-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium light:bg-slate-100 light:text-slate-700">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>

                      {/* Project Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700 light:border-slate-200">
                        <div className="flex items-center space-x-4 text-sm text-slate-400 light:text-slate-500">
                          <div className="flex items-center space-x-1">
                            <Zap size={14} />
                            <span>High Performance</span>
                          </div>
                        </div>

                        <motion.div
                          className="flex items-center  text-white-400 font-small group/link light:text-indigo-400 bg-indigo-400 rounded-md px-2 py-1"
                          whileHover={{ x: 5 }}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* CTA Section */}
            <motion.div className="text-center mt-16" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group light:bg-white/60 light:border-slate-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5 text-indigo-400 light:text-indigo-600" />
                <span className="font-medium text-slate-300 light:text-slate-700">
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

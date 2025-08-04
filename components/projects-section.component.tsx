"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Award, Globe } from "lucide-react";
import projects, { Project } from "../data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "Web App" | "Mobile App" | "Infrastructure" | "Other"
  >("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filters = [
    { key: "all" as const, label: "All Projects" },
    { key: "Web App" as const, label: "Web Apps" },
    { key: "Infrastructure" as const, label: "Infrastructure" },
    { key: "Mobile App" as const, label: "Mobile Apps" },
    { key: "Other" as const, label: "Other" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web App":
        return "bg-blue-100 text-blue-700";
      case "Infrastructure":
        return "bg-green-100 text-green-700";
      case "Mobile App":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getFaviconUrl = (projectUrl: string) => {
    try {
      const url = new URL(projectUrl);
      return `${url.protocol}//${url.hostname}/favicon.ico`;
    } catch {
      return undefined;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            A showcase of my recent work, including web applications, cloud
            infrastructure, and performance optimizations that deliver real
            business value.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 text-dark-600 hover:bg-gray-200"
              }`}
            >
              <Filter size={16} />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.projectName}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredProject(project.projectName)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`relative group cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full relative">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Award size={14} />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Project Image with Favicon */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.link !== "#" ? (
                        <div className="relative">
                          <img
                            src={getFaviconUrl(project.link)}
                            alt={`${project.projectName} favicon`}
                            className="w-16 h-16 rounded-lg shadow-lg bg-white p-2"
                            onError={(e) => {
                              // Fallback to icon if favicon fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              target.nextElementSibling?.classList.remove(
                                "hidden"
                              );
                            }}
                          />
                          <div className="w-16 h-16 rounded-lg shadow-lg bg-white p-2 flex items-center justify-center hidden">
                            <Globe className="w-8 h-8 text-primary-600" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-lg shadow-lg bg-white p-2 flex items-center justify-center">
                          <Globe className="w-8 h-8 text-primary-600" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-dark-800 group-hover:text-primary-600 transition-colors duration-300">
                        {project.projectName}
                      </h3>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-dark-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>

                    <p className="text-dark-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-dark-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-dark-600 text-sm rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.projectName ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-primary-600/90 to-transparent flex items-end p-6"
                  >
                    <div className="text-white">
                      <h4 className="text-lg font-bold mb-2">View Project</h4>
                      <p className="text-sm opacity-90">
                        Click to explore this project
                      </p>
                    </div>
                  </motion.div>

                  {/* Clickable Link Overlay */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`View ${project.projectName} project`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-dark-600 mb-6">
            Interested in working together? Let&apos;s discuss your next
            project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="button-primary"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

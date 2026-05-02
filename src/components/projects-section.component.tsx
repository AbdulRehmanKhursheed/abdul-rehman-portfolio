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
        className={`rounded-sm ${className} rounded-full`}
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
        className="section-padding"
        style={{ background: `rgb(var(--surface-primary))` }}
      >
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="mb-12 max-w-3xl" variants={itemVariants}>
              <p
                className="text-sm font-medium tracking-widest uppercase mb-4"
                style={{ color: `rgb(var(--text-tertiary))` }}
              >
                Selected work
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: `rgb(var(--text-primary))` }}
              >
                Things I&apos;ve shipped.
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2 mb-10"
              variants={itemVariants}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors"
                  style={{
                    background:
                      selectedCategory === category
                        ? `rgb(var(--primary))`
                        : `rgb(var(--surface-secondary))`,
                    color:
                      selectedCategory === category
                        ? `rgb(var(--primary-foreground))`
                        : `rgb(var(--text-secondary))`,
                    border: `1px solid ${
                      selectedCategory === category
                        ? `rgb(var(--primary))`
                        : `rgb(var(--border))`
                    }`,
                  }}
                >
                  {category}
                </button>
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
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-medium uppercase tracking-widest"
                        style={{ color: `rgb(var(--text-tertiary))` }}
                      >
                        {project.category}
                      </span>
                      {project.featured && (
                        <span
                          className="text-xs font-medium uppercase tracking-widest"
                          style={{ color: `rgb(var(--text-primary))` }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <div
                      className="relative h-32 rounded-md mb-5 flex items-center justify-center overflow-hidden"
                      style={{
                        background: `rgb(var(--surface-secondary))`,
                      }}
                    >
                      <ProjectIcon project={project} size={56} className="" />
                    </div>

                    <div className="flex flex-col flex-grow space-y-4">
                      <h3
                        className="text-lg font-semibold tracking-tight"
                        style={{ color: `rgb(var(--text-primary))` }}
                      >
                        {project.projectName}
                      </h3>

                      <p
                        className="text-sm leading-relaxed flex-grow line-clamp-4"
                        style={{ color: `rgb(var(--text-secondary))` }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 min-h-[2rem]">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs"
                            style={{
                              background: `rgb(var(--surface-secondary))`,
                              color: `rgb(var(--text-secondary))`,
                              border: `1px solid rgb(var(--border))`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span
                            className="px-2 py-0.5 rounded text-xs"
                            style={{
                              background: `rgb(var(--surface-secondary))`,
                              color: `rgb(var(--text-secondary))`,
                              border: `1px solid rgb(var(--border))`,
                            }}
                          >
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div
                        className="flex items-center justify-between text-sm font-medium pt-2 mt-auto border-t"
                        style={{ borderColor: `rgb(var(--border))` }}
                      >
                        <span style={{ color: `rgb(var(--text-primary))` }}>
                          View details
                        </span>
                        <ArrowRight
                          className="w-4 h-4"
                          style={{ color: `rgb(var(--text-secondary))` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
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

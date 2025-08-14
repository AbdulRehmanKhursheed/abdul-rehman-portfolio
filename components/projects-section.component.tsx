"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Filter, Award, Globe } from "lucide-react";
import projects from "../data/projects";
import Image from "next/image";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "Web App" | "Mobile App" | "Infrastructure" | "Other"
  >("all");

  const filters = [
    { key: "all" as const, label: "All Projects" },
    { key: "Web App" as const, label: "Web Apps" },
    // { key: "Infrastructure" as const, label: "Infrastructure" },
    { key: "Mobile App" as const, label: "Mobile Apps" },
    // { key: "Other" as const, label: "Other" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, including web applications, cloud
            infrastructure, and performance optimizations that deliver real
            business value.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Filter size={16} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.projectName}
              className={`relative group cursor-pointer ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full relative">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Award size={14} />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.link !== "#" ? (
                      <div className="relative">
                        <Image
                          src={
                            getFaviconUrl(project.link) ||
                            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fplaceholder%2F&psig=AOvVaw1U3QJ3yYAj6wgwhElQ6k0v&ust=1755253169867000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOij3OiJio8DFQAAAAAdAAAAABAM"
                          }
                          alt={`${project.projectName} favicon`}
                          className="w-16 h-16 rounded-lg shadow-lg bg-white p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        <div className="w-16 h-16 rounded-lg shadow-lg bg-white p-2 flex items-center justify-center hidden">
                          <Globe className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg shadow-lg bg-white p-2 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-blue-600" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {project.projectName}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

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

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.projectName} project`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/mobile-projects"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Mobile Apps
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get In Touch
            </button>
          </div>
          <p className="text-lg text-gray-600">
            Interested in working together? Let&apos;s discuss your next
            project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

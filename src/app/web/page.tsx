"use client";

import { useEffect } from "react";
import ProjectElementComponent from "../../../components/project-element.component";
import projects from "../../../data/projects";
import "@/styles/page.scss";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function WebProjects() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((reg) => reg.unregister());
      });
    }
  }, []);
  return (
    <div className="container mx-auto my-7 px-3 sm:px-0">
      <h1
        className={`${syne.className} font-semibold text-center`}
        style={{ fontSize: "1.25rem" }}
      >
        Web Applications
      </h1>
      <div className="flex flex-col gap-3 px-2 sm:px-0">
        {projects.map((project: ProjectElementProps, index: number) => (
          <ProjectElementComponent
            key={index}
            projectName={project.projectName}
            description={project.description}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
export default WebProjects;

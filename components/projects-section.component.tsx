import { Syne } from "next/font/google";
import projects from "../data/projects";
import ProjectElementComponent from "./project-element.component";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectSection = () => {
  return (
    <div className="p-8 md:p-24 ">
      <h1 className={syne.className} style={{ fontSize: "40px" }}>
        My projects:
      </h1>

      <div className="flex flex-col gap-3">
        {projects.map((project: ProjectElementProps, index: number) => (
          <ProjectElementComponent
            key={index}
            projectName={project.projectName}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectSection;

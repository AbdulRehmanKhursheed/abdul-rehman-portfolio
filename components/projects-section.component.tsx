import { syne } from "@/app/page";
import projects from "../data/projects";
import ProjectElementComponent from "./project-element.component";

const ProjectSection = () => {
  return (
    <div className="p-24 ">
      <h1 className={syne.className} style={{ fontSize: "40px" }}>
        My projects:
      </h1>

      <div className="flex flex-col gap-3">
        {projects.map((project: ProjectElementProps) => (
          <ProjectElementComponent
            projectName={project.projectName}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectSection;

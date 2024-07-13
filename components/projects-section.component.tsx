import projects from "../data/projects";
import ProjectElementComponent from "./project-element.component";
import Heading from "../elements/heading.element";


const ProjectSection = () => {
  return (
    <div className="mt-20">
      <Heading title="My Projects" />

      <div className="flex flex-col gap-3">
        {projects.map((project: ProjectElementProps, index: number) => (
          <ProjectElementComponent
            key={index}
            projectName={project.projectName}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectSection;

import projects from "../data/projects";
import ProjectElementComponent from "./project-element.component";
import Heading from "../elements/heading.element";
import Card from "./card.component";
import { faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import MobileAppsProjects from "./mobile-apps-projects.component";

const ProjectSection = () => {
  return (
    <div className="mt-20">
      <Heading title="My Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card icon={faMobile} title="Mobile Apps" />
        <Card icon={faLaptop} title="Web Apps" />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-4 bg-white">
        <MobileAppsProjects
          title="Bazaar Customer App"
          image="bazaar-agent-image.png"
        />
        <MobileAppsProjects
          title="Bazaar Agent App"
          image="bazaar-customer-app.png"
        />
      </div>

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

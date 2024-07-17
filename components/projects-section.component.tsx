
import Heading from "../elements/heading.element";
import MyProjectsCard from "./my-projects-card.component";
import { faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  return (
    <div className="mt-20">
      <Heading title="My Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <MyProjectsCard
          icon={faMobile}
          title="Mobile Apps"
          link="/mobile-projects"
        />
        <MyProjectsCard icon={faLaptop} title="Web Apps" link="web-projects" />
      </div>

    </div>
  );
};
export default ProjectSection;

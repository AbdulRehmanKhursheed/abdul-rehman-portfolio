import ProjectElementComponent from "../../../components/project-element.component";
import projects from "../../../data/projects";
import "@/styles/page.scss";
import { Syne } from "next/font/google";


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const webProjects = () => {
  return (
    <div className="container mx-auto my-7">
      <h1
        className={`${syne.className} font-semibold text-center`}
        style={{ fontSize: "32px" }}
      >
        Web App Development
      </h1>
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
export default webProjects;

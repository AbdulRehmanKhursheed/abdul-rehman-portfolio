import Link from "next/link";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectElementComponent = ({
  projectName,
  link,
}: ProjectElementProps) => {
  return (
    <Link href={link} className="projects">
      <div className="w-full flex justify-between">
        <p> {projectName}</p>
        <FontAwesomeIcon
          style={{ width: "18px" }}
          fade={true}
          icon={faUpRightFromSquare}
        />
      </div>
    </Link>
  );
};
export default ProjectElementComponent;

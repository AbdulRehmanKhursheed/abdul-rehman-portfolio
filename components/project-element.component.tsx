import Link from "next/link";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectElementComponent = ({
  projectName,
  description,
  link,
}: ProjectElementProps) => {
  return (
    <Link href={link} className="projects">
      <div className="w-full flex justify-between">
        <div>
          <h1 className={syne.className} style={{ fontSize: "24px" }}>
            {" "}
            {projectName}
          </h1>
          <h5 style={{ fontSize: "20x" }} className="grey-color">
            {description}
          </h5>
        </div>
        
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

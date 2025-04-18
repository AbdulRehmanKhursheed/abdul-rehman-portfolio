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
    <Link
      href={link}
      className="projects"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full flex justify-between">
        <div>
          <h1
            className={syne.className}
            style={{ fontSize: "24px", color: "rgb(161 101 27)" }}
          >
            {" "}
            {projectName}{" "}
          </h1>
          <h5
            style={{ maxWidth: "80%" }}
            className="grey-color regular-text-size"
          >
            {description}
          </h5>
        </div>

        <div className="flex item-center">
          <FontAwesomeIcon
            style={{ width: "18px" }}
            fade={true}
            icon={faUpRightFromSquare}
          />
        </div>
      </div>
    </Link>
  );
};
export default ProjectElementComponent;

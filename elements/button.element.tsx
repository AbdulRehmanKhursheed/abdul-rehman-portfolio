import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const BigButton = () => {
  return (
    <a
      style={{
        paddingLeft: "15px",
        paddingRight: "15px",
        color: "white",
        backgroundColor: "black",
        borderRadius: "12px",
        height: "50px",
        alignItems: "center",
      }}
      className="flex justify-between gap-3 items-center"
      href="/pdf/FullStack_Dev_AbdulRehman_Resume.pdf"
      download="Malik_Abdul_Rehman_Resume.pdf"
    >
      <h2 className={syne.className}>Download My Resume</h2>
      <FontAwesomeIcon
        style={{ width: "18px" }}
        fade={true}
        icon={faDownload}
      />
    </a>
  );
};
export default BigButton;

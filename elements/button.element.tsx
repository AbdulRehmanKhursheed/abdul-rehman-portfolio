import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Fullstack_Dev_AbdulRehman_Resume.pdf";
    link.download = "Abdul_Rehman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3"
    >
      <span>Download My Resume</span>
      <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
    </button>
  );
};

export default DownloadResumeButton;

import BigButton from "../elements/button.element";
import FancyTexts from "./fancy-texts";

const DownloadMyResumeSection = () => {
    return (
      <div className="mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <FancyTexts boldText="3.5+" normalText=" years of experience" />
          <BigButton />
        </div>
      </div>
    );
  };
export default DownloadMyResumeSection;

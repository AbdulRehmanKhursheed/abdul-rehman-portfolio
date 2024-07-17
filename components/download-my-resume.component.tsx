import BigButton from "../elements/button.element";
import ExperienceYearsNumbers from "./experience-years-number.component";

const DownloadMyResumeSection = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-auto">
          <ExperienceYearsNumbers />
        </div>
        <div className="w-full lg:w-auto">
          <BigButton />
        </div>
      </div>
    </div>
  );
};
export default DownloadMyResumeSection;

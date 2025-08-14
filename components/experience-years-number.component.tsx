import FancyTexts from "../elements/fancy-texts-with-background";
import ShadowText from "../elements/shadow-text.component";

const ExperienceYearsNumbers = () => {
  const calculateExperience = () => {
    const startDate = new Date("2020-11-01");
    const currentDate = new Date();
    const diffInYears =
      (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25);
    return diffInYears.toFixed(1);
  };
  
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-2xl">
        {calculateExperience()}+
      </div>
      <span className="text-gray-600 font-medium text-lg">
        Years of Experience
      </span>
    </div>
  );
};

export default ExperienceYearsNumbers;

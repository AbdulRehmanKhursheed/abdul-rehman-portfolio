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
    <div className="flex gap-5">
      <FancyTexts
        boldText={calculateExperience()}
        normalText=" years of experience"
      />
      <ShadowText text="years of experience" />
    </div>
  );
};
export default ExperienceYearsNumbers;

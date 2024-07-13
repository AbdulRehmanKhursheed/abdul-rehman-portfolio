import FancyTexts from "../elements/fancy-texts-with-background";
import ShadowText from "../elements/shadow-text.component";

const ExperienceYearsNumbers = () => {
  return (
    <div className="flex">
      <FancyTexts boldText="3.5+" normalText=" years of experience" />
      <ShadowText text="years of experience" />
    </div>
  );
};
export default ExperienceYearsNumbers;

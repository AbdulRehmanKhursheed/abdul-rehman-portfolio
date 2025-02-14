import { calculateExperience } from "@/app/about-me/page";
import FancyTexts from "../elements/fancy-texts-with-background";
import ShadowText from "../elements/shadow-text.component";

const ExperienceYearsNumbers = () => {
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

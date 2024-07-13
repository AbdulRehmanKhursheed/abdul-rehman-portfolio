import { Syne } from "next/font/google";
import ShadowText from "./shadow-text.component";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const FancyTexts = (textToBeHighlighted: HighlightedTextProps) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <h1
          style={{
            backgroundColor: "rgb(255 182 70)",
          }}
          className={`${syne.className} text-[28px] p-5  border-0 rounded-full w-[50px] h-[60px] font-semibold`}
        >
          {" "}
          <span className="absolute left-[10px] top-[8px]">
            {textToBeHighlighted.boldText}
          </span>
        </h1>
      </div>
    </div>
  );
};
export default FancyTexts;

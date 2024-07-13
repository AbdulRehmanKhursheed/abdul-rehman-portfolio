import { Syne } from "next/font/google";
import ShadowText from "./shadow-text.component";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const FancyTexts = ({ boldText }: HighlightedTextProps) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <h1
          className={`${syne.className} text-[28px] p-3  border-0 rounded-full w-[40px] h-[60px] font-semibold`}
          style={{
            width: "50px",
            fontSize: "28px",
            backgroundColor: "rgb(255 182 70)",
          }}
        >
          {" "}
          <span className="absolute left-[10px] top-[8px]">{boldText}</span>
        </h1>
      </div>
    </div>
  );
};
export default FancyTexts;

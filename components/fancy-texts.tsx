import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const FancyTexts = (textToBeHighlighted: HighlightedTextProps) => {
  return (
    <div style={{ display: "flex", alignItems: "start" }}>
      <div style={{ display: "flex", position: "relative" }}>
        <h1
          className={syne.className}
          style={{
            fontSize: "28px",
            padding: "20px",
            backgroundColor: "rgb(255 182 70)",
            border: "0",
            borderRadius: "50%",
            width: "50px",
            height: "60px",
            fontWeight: "600",
          }}
        >
          {" "}
          <span style={{ position: "absolute", left: "10px", top: "8px" }}>
            {textToBeHighlighted.boldText}
          </span>
        </h1>
      </div>
      <h1
        style={{
          fontSize: "3rem",
          color: "rgb(255 255 255 )",
          fontWeight: "bolder",
          textShadow:
            "1px 1px 0 rgba(8, 8, 8, 0.4), -1px -1px 0 rgba(8, 8, 8, 0.4), 1px -1px 0 rgba(8, 8, 8, 0.4), -1px 1px 0 rgba(8, 8, 8, 0.4), 1px 1px 0 rgba(8, 8, 8, 0.4)",
        }}
        className={`${syne.className} ml-6`}
      >
        {textToBeHighlighted.normalText}
      </h1>
    </div>
  );
};
export default FancyTexts;

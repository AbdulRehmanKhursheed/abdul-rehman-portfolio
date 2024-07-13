import { Syne } from "next/font/google";
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
interface ShadowText {
  text: string;
}

const ShadowText = ({ text }: ShadowText) => {
  return (
    <h1
      style={{
        fontSize: "3rem",
        color:'white',
        textShadow:
          "1px 1px 0 rgba(8, 8, 8, 0.4), -1px -1px 0 rgba(8, 8, 8, 0.4), 1px -1px 0 rgba(8, 8, 8, 0.4), -1px 1px 0 rgba(8, 8, 8, 0.4), 1px 1px 0 rgba(8, 8, 8, 0.4);",
      }}
      className={`${syne.className} ml-6 text-white font-extrabold fancy-text-size`}
    >
      {text}
    </h1>
  );
};
export default ShadowText;

import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Heading = (props:any) => {
  return (
    <h3
      className={syne.className}
      style={{ fontSize: "64px", fontWeight: "bold" }}
    >
      {props.title}:
    </h3>
  );
};
export default Heading;

import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Heading = (props: HeadingProps) => {
  return (
    <h3 className={`${syne.className} heading-size font-bold`}>
      {props.title}:
    </h3>
  );
};
export default Heading;

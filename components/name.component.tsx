import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const NameComponent = () => {
  return (
    <h1
      className={`${syne.className} py-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl leading-tight`}
    >
      Malik Abdul Rehman Khursheed
    </h1>
  );
};
export default NameComponent;

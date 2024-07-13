import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const NameComponent = () => {
  return (
    <h1
      className={`${syne.className} py-6 text-[48px] sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl leading-tight font-bold`}
    >
      Malik Abdul Rehman Khursheed
    </h1>
  );
};
export default NameComponent;

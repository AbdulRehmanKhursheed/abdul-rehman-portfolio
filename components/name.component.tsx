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
      <span
        className={`${syne.className}  ps-3  border-0 rounded-full w-[20px] h-[60px] font-semibold`}
        style={{
          backgroundColor: "rgb(255 182 70)",
        }}
      >
        M
      </span>
      <span>alik Abdul Rehman Khursheed</span>
    </h1>
  );
};
export default NameComponent;

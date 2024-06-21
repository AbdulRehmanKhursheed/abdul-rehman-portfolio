import { syne } from "@/app/page";

const NameComponent = () => {
  return (
    <h1
      style={{
        // fontSize: "80px",
        // lineHeight: "80px",
      }}
      className={`${syne.className} py-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl leading-tight`}
    >
      Malik Abdul Rehman Khursheed
    </h1>
  );
};
export default NameComponent;

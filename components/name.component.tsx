import { syne } from "@/app/page";

const NameComponent = () => {
  return (
    <h1
      style={{
        fontSize: "80px",
        lineHeight: "80px",
      }}
      className={`${syne.className} py-6`}
    >
      Malik Abdul Rehman Khursheed
    </h1>
  );
};
export default NameComponent;

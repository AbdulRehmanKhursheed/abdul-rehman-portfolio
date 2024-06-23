import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const GreetingsComponent = () => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="2"
        viewBox="0 0 65 2"
        fill="none"
      >
        <path d="M0 1H65" stroke="#080808"></path>
      </svg>
      <h1 className={`ml-2 ${syne.className}`} style={{ fontSize: "32px" }}>
        Hello, I&apos;m ✌️
      </h1>
    </div>
  );
};

export default GreetingsComponent;

import { Syne } from "next/font/google";
import Image from "next/image";

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
      <span className={`ml-2 ${syne.className}`} style={{ fontSize: "32px" }}>
        Hello, I&apos;m{" "}
      </span>
      <span>
        <Image
          className="mx-2"
          src="https://www.hiveart.xyz/perez/assets/images/icon/victory.png"
          alt="Hand Image"
          width={20}
          height={20}
        />
      </span>
    </div>
  );
};

export default GreetingsComponent;

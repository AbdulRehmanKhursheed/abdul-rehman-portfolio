import Image from "next/image";
import { Syne } from "next/font/google";
import "@/../styles/page.scss";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="flex flex-row gap-3">
        <div className="w-3/5">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="2"
              viewBox="0 0 65 2"
              fill="none"
              className="mt-2"
            >
              <path d="M0 1H65" stroke="#080808"></path>
            </svg>
            <span
              className={`ml-2 ${syne.className}`}
              style={{ fontSize: "32px" }}
            >
              Hello, I'm{" "}
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
          <h1
            style={{
              fontSize: "80px",
            }}
            className={syne.className}
          >
            Malik Abdul Rehman Khursheed
          </h1>
        </div>

        <div className="w-2/5">
          <Image
            src="/abdulrehman.jpeg"
            height={770}
            width={450}
            alt="Display Picture"
          />
        </div>
      </div>

      <h1 className={syne.className} style={{fontSize:"40px"}}>My projects:</h1>
      <div className="projects">bazaartech.com</div>
      <div className="projects">bazaarpartnerportal.com</div>
      <div className="projects">orcalo.com</div>
    </main>
  );
}

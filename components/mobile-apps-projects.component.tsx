import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface MobileAppProjectProps {
  title: string;
  image: string;
}
const MobileAppsProjects = ({ title, image }: MobileAppProjectProps) => {
  return (
    <div className=" bg-gray-100 shadow rounded-lg p-5 w-full h-[250px]">
      <div className="flex flex-col items-center justify-center space-y-16">
        <Image
          src={`/images/${image} `}
          alt="My Animated GIF"
          width={100}
          height={100}
          className="rounded-full"
        />

        <div>
          <h2
            className={` ${syne.className} text-xl font-semibold`}
            style={{ color: "rgb(255 182 70)" }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default MobileAppsProjects;

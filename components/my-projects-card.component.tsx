import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Syne } from "next/font/google";
import { MyProjectsCardInput } from "../interfaces/card-props";
import Image from "next/image";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MyProjectsCard = (cardValues: MyProjectsCardInput) => {
  return (
    <Link
      href={cardValues.link}
      className=" shadow rounded-lg p-5 w-full bg-white  hover:cursor-pointer hover:bg-gray-100 "
    >
      <div className="flex flex-col justify-between ">
        <div className="flex justify-between">
          <div className="bg-gray-200 p-3 rounded-full flex items-center justify-center w-12 h-12 ">
            <FontAwesomeIcon
              style={{ width: "18px" }}
              fade={true}
              icon={cardValues.icon}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/images/maximize.gif"
              alt="Explore gif"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className={` ${syne.className} mt-24`}>
          <h2 className="text-xl font-semibold">{cardValues.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MyProjectsCard;

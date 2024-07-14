import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Syne } from "next/font/google";
import { CardInput } from "../interfaces/card-props";
import Image from "next/image";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Card = (cardValues: CardInput) => {
  return (
    <div className=" bg-white shadow rounded-lg p-5 w-full bg-gray-50">
      <div className="flex justify-between">
        <div className="bg-gray-200 p-3 rounded-full flex items-center justify-center w-12 h-12">
          <FontAwesomeIcon
            style={{ width: "18px" }}
            fade={true}
            icon={cardValues.icon}
          />
        </div>
        <div>
          <Image
            src="/images/maximize.gif"
            alt="My Animated GIF"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className={` ${syne.className} mt-4`}>
        <h2 className="text-xl font-semibold">{cardValues.title}</h2>
      </div>
    </div>
  );
};

export default Card;

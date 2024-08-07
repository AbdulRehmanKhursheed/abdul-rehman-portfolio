import Image from "next/image";
import DisplayPicture from "../public/abdulrehman.png";
const DisplayPictureComponent = () => {
  return (
    <div className="rounded-lg shadow-lg shadow-[rgba(0,0,0,0.2)5px_15px_10px]">
      <Image
        src={DisplayPicture}
        height={780}
        width={500}
        alt="Display Picture"
        priority
      />
    </div>
  );
};
export default DisplayPictureComponent;

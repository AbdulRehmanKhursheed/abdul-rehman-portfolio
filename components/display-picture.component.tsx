import Image from "next/image";
import DisplayPicture from "../public/abdulrehman.png";
const DisplayPictureComponent = () => {
  return (
    <div className="rounded-lg shadow-lg shadow-[rgba(0,0,0,0.2)5px_10px_6px]">
      <Image
        src={DisplayPicture}
        height={300}
        width={300}
        alt="Display Picture"
        priority
      />
    </div>
  );
};
export default DisplayPictureComponent;

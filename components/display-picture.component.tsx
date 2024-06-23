import Image from "next/image";
import DisplayPicture from "../public/abdulrehman.png";
const DisplayPictureComponent = () => {
  return (
    <Image
      src={DisplayPicture}
      height={770}
      width={450}
      alt="Display Picture"
      priority
    />
  );
};
export default DisplayPictureComponent;

import Image from "next/image";
import DisplayPicture from "../public/abdulrehman.png";
const DisplayPictureComponent = () => {
  return (
    <Image
      src={DisplayPicture}
      height={780}
      width={500}
      alt="Display Picture"
      priority
    />
  );
};
export default DisplayPictureComponent;

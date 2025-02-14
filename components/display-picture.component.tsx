import Image from "next/image";
const DisplayPictureComponent = () => {
  return (  
    <div className="rounded-lg shadow-sm shadow-[rgba(0,0,0,0.2)5px_10px_6px]">
      <Image
        src={"/abdulrehman.png"}
        height={300}
        width={300}
        alt="Display Picture"
        priority
      />
    </div>
  );
};
export default DisplayPictureComponent;

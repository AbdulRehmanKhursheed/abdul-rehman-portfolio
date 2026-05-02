"use client";

import Image from "next/image";

const DisplayPictureComponent = () => {
  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
      <Image
        src="/abdulrehman.png"
        alt="Abdul Rehman — Senior Frontend Engineer"
        fill
        className="object-cover rounded-full"
        priority
        sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
      />
    </div>
  );
};

export default DisplayPictureComponent;

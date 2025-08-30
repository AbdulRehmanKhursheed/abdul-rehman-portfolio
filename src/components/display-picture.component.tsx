'use client';

import Image from 'next/image';

const DisplayPictureComponent = () => {
  return (
    <div className="relative">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
        {/* Background gradient ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full blur-xl opacity-30" />
        
        {/* Main image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/abdulrehman.png"
            alt="Abdul Rehman - Full Stack Developer"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
          />
        </div>
        
        {/* Floating elements - smaller on mobile */}
        <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xs sm:text-sm">AR</span>
        </div>
        
        <div className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xs">JS</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayPictureComponent;

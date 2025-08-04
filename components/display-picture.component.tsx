'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DisplayPictureComponent = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
        {/* Background gradient ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full blur-xl opacity-30 animate-pulse" />
        
        {/* Main image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/abdulrehman.png"
            alt="Abdul Rehman - Full Stack Developer"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 320px, 384px"
          />
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-white font-bold text-sm">AR</span>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-white font-bold text-xs">JS</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DisplayPictureComponent;

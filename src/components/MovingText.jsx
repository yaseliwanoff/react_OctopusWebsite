import React from 'react';
import { motion } from 'framer-motion';
import LineLeft from "@assets/images/svg/line1.svg";

const MovingText = () => {
  return (
    <div>
      <div className="relative">
        <img className="z-10" src={LineLeft} alt="line" />
        <motion.span
          className="z-20 text-[64px] w-full text-white -rotate-[9deg] font-[ZenDots] absolute"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          One and Only Agency with Supero Powers
        </motion.span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MovingText;

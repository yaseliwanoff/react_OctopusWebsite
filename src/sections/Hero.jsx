import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HelloEmoji from "@assets/images/svg/emoji.svg";
import StaticButtons from "@components/Buttons/StaticButtons";
import JohnPeople from "@assets/images/png/john.png";
import MarcusPeople from "@assets/images/png/marcus.png";
import VioletPeople from "@assets/images/png/violet.png";
import Star from "@assets/images/svg/star.svg";

const Hero = () => {
  const { scrollY } = useScroll();
  
  const johnY = useTransform(scrollY, [0, 500], [0, -100]);
  const marcusY = useTransform(scrollY, [0, 500], [0, -150]);
  const violetY = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className="relative pt-20">
      <div className="hidden lg:flex">
        <motion.div style={{ y: johnY }} className="absolute left-[10%] bottom-0 top-[90%] mb-10 ml-10 z-0 flex flex-col items-center">
          <div className="flex items-start">
            <img src={Star} alt="star" className="absolute z-10 -top-[30px] -left-[10px]" />
            <img src={JohnPeople} alt="John" className="w-[119px] relative" />
          </div>
          <div className="mt-1 flex flex-col items-center text-center">
            <span className="font-[IndieFlower] text-[29px] text-[#7C7C7C] leading-tight">John O Brian</span>
            <span className="text-[17px] text-[#7C7C7C] font-[RobotoCondensed]">Brand Designer</span>
          </div>
        </motion.div>
        <motion.div style={{ y: marcusY }} className="absolute right-0 flex flex-col items-center bottom-0 top-[115%] mb-10 mr-[17%] z-0">
          <div className="flex items-start">
            <img src={Star} alt="star" className="absolute z-10 -top-[30px] -left-[10px]" />
            <img src={MarcusPeople} alt="Marcus" className="relative" />
          </div>
          <div className="mt-1 flex flex-col items-center text-center">
            <span className="font-[IndieFlower] text-[29px] text-[#7C7C7C] leading-tight">Marucus Linux</span>
            <span className="text-[17px] text-[#7C7C7C] font-[RobotoCondensed]">Web Developer</span>
          </div>
        </motion.div>
        <motion.div style={{ y: violetY }} className="absolute right-0 flex flex-col items-center top-[10%] mt-10 mr-[9%] z-0">
          <div className="flex items-start">
            <img src={Star} alt="star" className="absolute z-10 -top-[30px] -left-[10px]" />
            <img src={VioletPeople} alt="Violet" className="relative" />
          </div>
          <div className="mt-1 flex flex-col items-center text-center">
            <span className="font-[IndieFlower] text-[29px] text-[#ffffff] leading-tight">Violet Harrison</span>
            <span className="text-[17px] text-[#ffffff] font-[RobotoCondensed]">UI & UX Designer</span>
          </div>
        </motion.div>
      </div>
      <div className="z-10 relative container flex flex-col pt-[100px] justify-center items-center">
        <div className="flex gap-2 items-center">
          <img width={20} height={20} src={HelloEmoji} alt="Hello emoji" />
          <p className="text-[13px] md:text-[20px] font-normal">Hello, From Creative Agency</p>
          </div>
        <div className="mt-[17px] font-[ZenDots] flex flex-col items-center justify-center">
          <h1 className="mb-[29px] font-black text-[30px] md:text-[64px] text-center w-[340px] md:w-[814px] leading-tight">
            Digital Agency with Super Powers
          </h1>
          <StaticButtons
            textButton="Say Hello!"
            bgColor="#FFCF4E"
            textColor="#000000"
            paddingY="20px"
            paddingX="52px"
            aria-label="Say Hello"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

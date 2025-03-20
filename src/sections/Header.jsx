import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Logo from "@assets/images/svg/logo.svg";
import Menu from "@assets/images/svg/menu.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemRefs = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    gsap.to(menuItemRefs.current[index], {
      scale: 1.1,
      color: '#FFCF4E',
      duration: 0.3,
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(menuItemRefs.current[index], {
      scale: 1,
      color: 'white',
      duration: 0.3,
    });
  };

  return (
    <>
      <header className="pl-4 lg:fixed lg:w-full lg:pl-0 md:pl-6 bg-black/60 z-50 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <div>
            <img width={193} height={47} src={Logo} alt="logo" />
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="bg-[#FFCF4E] py-[22px] px-[19px] cursor-pointer hover:bg-[#af8e34] ease-in-out duration-300">
              <img src={Menu} alt="menu" />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl">
            &times;
          </button>
          <nav className="flex flex-col items-center">
            {['Section 1', 'Section 2', 'Section 3', 'Section 4'].map((section, index) => (
              <motion.a
                key={index}
                href={`#section${index + 1}`}
                ref={el => menuItemRefs.current[index] = el}
                className="text-white text-3xl mb-4"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {section}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}

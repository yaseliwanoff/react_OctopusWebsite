import React, { useEffect, useState } from 'react';
import Arrow from "@assets/images/svg/arrow.svg";
import Background from "@assets/images/png/background.png";
import StaticButtons from "@components/Buttons/StaticButtons";

function Templates() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.05}px, ${(mousePosition.y - window.innerHeight / 2) * 0.05}px)`,
  };

  return (
    <section className="mt-[10%] bg-[#2e2e2e]/40 py-[50px]">
      <div className="container">
        <div>
          <div>
            <div className="relative font-[ZenDots]">
              <h2 className="text-[43px] mb-5">Free Figma SaaS</h2>
              <div className="flex items-center">
                <span className="text-[20px] uppercase bg-[#41FF8D] text-[#000000] rounded-full py-4 px-6">145 Likes</span>
                <img className="absolute top-[90%] left-[20%] right-0" src={Arrow} alt="arrow" />
              </div>
            </div>
            <div className="opacity-50">
              <img
                className=""
                src={Background}
                alt="background image"
                style={parallaxStyle}
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col float-right gap-3">
          <div className="flex float-right">
            <p className="w-[349px]">There’s a new way to design for saas, and it’s called squid kit. Figma is a free online design tool that allows you to create and share your designs with others. With figma template, you can easily create a beautiful, responsive design for your saas product.</p>
          </div>
          <div className="uppercase flex float-right font-[ZenDots]">
            <StaticButtons
              textButton="Download"
              bgColor="#FFCF4E"
              textColor="#000000"
              paddingY="20px"
              paddingX="52px"
              aria-label="Say Hello"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;

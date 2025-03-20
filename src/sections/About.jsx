import React, { useState } from 'react';
import WhatWeCanDoIcon from "@assets/images/svg/icon.svg";
import Circle from "@components/Circle";

const Section = ({ items, onMouseEnter, onMouseMove, onMouseLeave }) => (
  <div className="flex justify-around items-center gap-2">
    {items.map(item => (
      <span
        key={item}
        className="text-white hover:text-[#785f1a] duration-300 cursor-pointer"
        data-text={item}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {item}
      </span>
    ))}
  </div>
);

export default function About() {
  const firstSection = ["Branding", "UX/UI", "Lottie"];
  const middleSection = ["WordPress", "Webflow"];
  const lastSection = ["Design", "Spline", "Laravel"];

  const [circleVisible, setCircleVisible] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setCircleVisible(true);
    setCirclePosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseLeave = () => {
    setCircleVisible(false);
  };

  return (
    <section className="container mt-[100px] mx-auto" style={{ cursor: circleVisible ? 'none' : 'default' }}>
      <div className="flex gap-2 items-center">
        <img src={WhatWeCanDoIcon} alt="icon" />
        <h2 className="text-outline" data-text="What We Can Do">What We Can Do</h2>
      </div>
      <div className="h-full mt-[50px] text-[65px] z-10 font-[ZenDots]" style={{ position: 'relative' }}>
        <Section items={firstSection} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
        <Section items={middleSection} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
        <Section items={lastSection} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
        <Circle isVisible={circleVisible} position={circlePosition} />
      </div>
    </section>
  );
}

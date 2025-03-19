import React, { useEffect, useRef } from "react";
import WorkImage1 from "@assets/images/jpg/1.webp";
import WorkImage2 from "@assets/images/jpg/2.webp";
import WorkImage3 from "@assets/images/jpg/3.webp";
import WorkImage4 from "@assets/images/jpg/4.webp";
import WorkImage5 from "@assets/images/jpg/5.webp";
import WorkImage6 from "@assets/images/jpg/6.webp";
import WorkImage7 from "@assets/images/jpg/7.webp";
import WorkImage8 from "@assets/images/jpg/8.webp";
import WorkImage9 from "@assets/images/jpg/9.webp";

const Works = () => {
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (firstContainerRef.current) {
        firstContainerRef.current.style.transform = `translateX(-${scrollY * 0.5}px)`;
      }

      if (secondContainerRef.current) {
        secondContainerRef.current.style.transform = `translateX(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="mt-[35%]">
      <div className="perspective" ref={firstContainerRef}>
        <div className="inline-flex gap-4 items-center">
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage1} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage2} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage3} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage4} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage5} alt="work" />
        </div>
      </div>
      <div className="mt-3 perspective" ref={secondContainerRef}>
        <div className="inline-flex gap-4 items-center">
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage6} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage7} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage8} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage9} alt="work" />
          <img className="transform -skew-x-12 perspective-image" width={406} height={254} src={WorkImage6} alt="work" />
        </div>
      </div>
    </section>
  );
};

export default Works;

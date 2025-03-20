import { useEffect, useState } from "react";
import Logo from "@assets/images/svg/logo-black.svg";
import LineLeft from "@assets/images/svg/line1.svg";
import RightLeft from "@assets/images/svg/line2.svg";

function Company() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getGradientText = () => {
    const percentage = Math.min(scrollY / 500, 1);
    return `linear-gradient(90deg, #808080 ${100 - percentage * 100}%, #ffffff ${percentage * 100}%)`;
  };

  return (
    <section className="mt-[10%]">
      <div className="container flex justify-between gap-20 items-center">
        <div className="flex flex-col font-[ZenDots] text-[101px]">
          <span className="pl-10">Who</span>
          <span className="bg-[#ffd04e] text-black py-4 px-4 flex gap-4 w-[450px] pl-10">
            We <img src={Logo} alt="logo" />
          </span>
          <span className="pl-10">Are</span>
        </div>
        <div>
          <p
            className="text-[35px]"
            style={{
              backgroundImage: getGradientText(),
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            We believe that with the right tools, everyone can achieve their dreams, no matter their background or situation. We strive to make sure everyone has access to the resources they need to make a difference in their communities and the world.
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="mt-[10%] relative z-10">
          <img src={LineLeft} alt="line" />
        </div>
        <div className="absolute z-0">
          <img src={RightLeft} alt="line" />
        </div>
      </div>
    </section>
  );
}

export default Company;

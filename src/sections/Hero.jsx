import HelloEmoji from "@assets/images/svg/emoji.svg";
import StaticButtons from "@components/Buttons/StaticButtons";
import JohnPeople from "@assets/images/png/john.png";
import MarcusPeople from "@assets/images/png/marcus.png";
import VioletPeople from "@assets/images/png/violet.png";

const Hero = () => {
  return (
    <section className="overflow-x-hidden relative">
      <div className="absolute left-0 bottom-0 mb-10 ml-10 z-0">
        <img src={JohnPeople} alt="John" className="w-[119px]" />
      </div>
      <div className="absolute right-0 bottom-0 mb-10 mr-10 z-0">
        <img src={MarcusPeople} alt="Marcus" className="w-52 h-auto" />
      </div>
      <div className="absolute right-0 top-0 mt-10 mr-10 z-0">
        <img src={VioletPeople} alt="Violet" className="w-36" />
      </div>
      <div className="z-10 relative container flex flex-col pt-[100px] justify-center items-center">
        <div className="flex gap-2 items-center">
          <img width={20} height={20} src={HelloEmoji} alt="Hello emoji" />
          <p className="text-[13px] md:text-[20px] font-normal">Hello, From Creative Agency</p>
        </div>
        <div className="mt-[17px] font-[ZenDots] flex flex-col items-center justify-center">
          <h1 className="mb-[29px] font-black text-[30px] md:text-[64px] text-center w-[340px] md:w-[814px] leading-tight">Digital Agency with Super Powers</h1>
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
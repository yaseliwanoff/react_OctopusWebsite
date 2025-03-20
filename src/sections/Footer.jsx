import Logo from "@assets/images/svg/logo.svg"

function Footer() {
  return (
    <footer className="w-full h-[50px] mt-[5%]">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="logo" />
        <span className="font-[ZenDots] text-[20px]">Octopus</span>
      </div>
    </footer>
  )
}

export default Footer;

import Logo from "@assets/images/svg/logo.svg"
import Menu from "@assets/images/svg/menu.svg"

export default function Header() {
  return (
    <header className="pl-0 md:pl-6 bg-black z-50">
      <div className="flex justify-between items-center">
        <div>
          <img width={193} height={47} src={Logo} alt="logo" />
        </div>
        <div className="">
          <button
          onClick={() => alert("click menu")}
          className="bg-[#FFCF4E] py-[22px] px-[19px] cursor-pointer hover:bg-[#af8e34] ease-in-out duration-300">
            <img src={Menu} alt="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

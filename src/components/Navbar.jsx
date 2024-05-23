import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMobile = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-[90%] mx-auto pt-6 text-sm relative">
      {/* Full Navigation */}.
      <div className="flex place-items-center justify-between">
        <div id="image" className="ml-4 md:ml-0">
          <a href="">
            <img className="h-[40px] w-[40px]" src={logo} alt="" />
          </a>
        </div>
        <hr className="flex-grow border-t border-gray-600 ml-8 -mr-8 hidden md:block" />

        <ul
          id="nav-items"
          className="flex place-items-center md:bg-white md:bg-opacity-15  px-14 md:space-x-6 lg:space-x-24 sm:-mr-[68px]"
        >
          <li>00 Home</li>
          <li>01 Destination</li>
          <li>02 Crew</li>
          <li>03 Technology</li>

          <button onClick={toggleMobile} className="block md:hidden">
            {open ? <img src={close} alt="" /> : <img src={hamburger} alt="" />}
          </button>
        </ul>
      </div>
      {/* Mobile Navigation */}
      {open && (
        <ul
          id="mobile"
          className="absolute md:hidden  top-[90px] flex flex-col space-y-12 pt-12 w-full home-height items-center shadow-xl bg-opacity-90 z-10 bg-gray-100 text-gray-800"
        >
          <li onClick={toggleMobile}>Home</li>
          <li onClick={toggleMobile}>Destination</li>
          <li onClick={toggleMobile}>Crew</li>
          <li onClick={toggleMobile}>Technology</li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;

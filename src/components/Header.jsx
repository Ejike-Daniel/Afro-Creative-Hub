import logo from "../assets/ACH.png";
import { Link } from "react-router-dom";
import Navlist from "./Navlist";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import ContactLink from "./ContactLink";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header className="w-full h-[10vh] px-8 lg:px-16 py-12 relative flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-20 lg:cursor-pointer" />
      </Link>
      <Navlist hideNav={isHidden} />
      <button className="text-3xl md:hidden" onClick={toggleMenu}>
        {isHidden ? <RiMenu4Fill /> : <RiCloseLine />}
      </button>
      <div className={"hidden md:block"}>
        <ContactLink />
      </div>
    </header>
  );
};

export default Header;

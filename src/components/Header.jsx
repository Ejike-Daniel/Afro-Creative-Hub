import logo from "../assets/ACH.png";
import { Link } from "react-router-dom";
import Navlist from "./Navlist";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import ContactLink from "./ContactLink";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[10vh] px-8 lg:px-16 py-12 flex items-center justify-between ${
        isFixed ? "md:fixed md:top-0 md:z-50 md:bg-white shadow-lg" : ""
      }`}
    >
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

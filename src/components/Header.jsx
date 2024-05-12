import logo from "../assets/ACH.png";
import { useState } from "react";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <header className=" w-full h-[10vh] flex justify-between px-8 lg:px-16 items-center py-12  relative">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-20 lg:cursor-pointer " />
      </Link>
      <button className=" text-3xl lg:hidden " onClick={handleClick}>
        {isHidden ? <RiMenu4Fill /> : <RiCloseLine />}
      </button>
    </header>
  );
};

export default Header;

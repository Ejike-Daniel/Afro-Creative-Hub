import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/ACH.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className=" flex flex-col-reverse lg:flex-col items-center py-8 gap-8 sha">
      <section className=" flex flex-col  gap-3">
        <p className=" font-roboto text-[14px] text-mountainMist text-center uppercase tracking-wide">
          upskill for a better future
        </p>
        <p className=" font-Abhaya font-bold  text-2xl md:text-4xl  text-midnight">
          Request More Information
        </p>
        <Link to={"contact"} className="flex items-center justify-center">
          <Button className={" font-medium shadow-lg bg-tealishGreen "}>Contact Us</Button>
        </Link>

        <span className="text-center text-sm font-bold text-midnight italic">
          &copy;2024 Afro Creative Hub
        </span>
      </section>
      <section className="flex flex-col justify-between items-center gap-12 lg:border-t-[1px] lg:flex-row w-[90%] py-8">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-20 lg:cursor-pointer " />
        </Link>

        <div className="flex gap-6">
          <Link
            to={"#"}
            className="border-[3px] border-mountainMist w-12 h-12 flex justify-center items-center lg:hover:bg-darkGreen lg:hover:border-tealishGreen rounded-full lg:hover:text-white"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            to={"#"}
            className="border-[3px] border-mountainMist w-12 h-12 flex justify-center items-center lg:hover:bg-darkGreen lg:hover:border-tealishGreen rounded-full lg:hover:text-white"
          >
            <FaFacebookF />
          </Link>

          <Link
            to={"#"}
            className="border-[3px] border-mountainMist w-12 h-12 flex justify-center items-center lg:hover:bg-darkGreen lg:hover:border-tealishGreen rounded-full lg:hover:text-white"
          >
            <FaInstagram />
          </Link>

          <Link
            to={"#"}
            className="border-[3px] border-mountainMist w-12 h-12 flex justify-center items-center lg:hover:bg-darkGreen lg:hover:border-tealishGreen rounded-full lg:hover:text-white"
          >
            <FaYoutube />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

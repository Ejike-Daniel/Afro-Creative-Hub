import { Link, NavLink } from "react-router-dom";

const ContactLink = () => {
  return (
    <div>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? " bg-duckyYellow text-midnight  px-6 py-3 md:py-10 lg:py-[2.35rem] whitespace-nowrap font-medium"
            : "bg-lightTan text-midnight px-6 py-3 md:py-10 lg:py-[2.35rem] whitespace-nowrap font-medium "
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default ContactLink;

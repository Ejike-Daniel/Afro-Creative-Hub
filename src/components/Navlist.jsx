import { NavLink } from "react-router-dom";
import ContactLink from "./ContactLink";

// eslint-disable-next-line react/prop-types
const Navlist = ({ hideNav }) => {
  const navlinks = [
    { name: "Explore", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav
      className={`${
        hideNav ? "hidden" : ""
      } absolute py-8 md:py-0 md:static md:block md:mx-0 top-16 gap-12 shadow-lg md:shadow-none right-0 left-0 flex justify-center z-20 w-full items-center  bg-white md:bg-transparent transition-all duration-500 transform origin-bottom `}
    >
      <ul className="flex flex-col gap-12 md:flex-row justify-center items-center font-medium text-mountainMist ">
        {navlinks.map(({ name, path }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? " md:bg-lightTan text-midnight px-6  md:py-[1.39rem] lg:py-[1.45rem] "
                  : " hover:text-midnight"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
        <div className="md:hidden">
          <ContactLink />
        </div>
      </ul>
    </nav>
  );
};

export default Navlist;

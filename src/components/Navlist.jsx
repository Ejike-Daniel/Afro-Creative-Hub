import { Link } from "react-router-dom";

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
      } absolute md:static md:block md:mx-0 top-24 gap-12 shadow-lg md:shadow-none right-0 left-0 flex justify-center z-20 w-full items-center py-10     bg-white md:bg-transparent`}
    >
      <ul className="flex flex-col gap-12 md:flex-row justify-center items-center ">
        {navlinks.map(({ name, path }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
        <Link
          to="/contact"
          className="bg-lightTan text-midnight px-6 py-3   md: whitespace-nowrap"
        >
          Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navlist;

//  <div className="font-medium text-mountainMist ">
//       <nav
//         className={`${
//           hideNav ? "hidden" : ""
//         } `}
//       >
//         <ul className="flex flex-col md:flex-row gap-8 md:gap-14 mt-0  ">
//           {navlinks.map(({ name, path }) => (
//             <li key={path}>
//               <Link to={path}>{name}</Link>
//             </li>
//           ))}
//         </ul>
//
//       </nav>
//     </div>

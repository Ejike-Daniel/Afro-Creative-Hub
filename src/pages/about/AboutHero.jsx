import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className=" bg-tealishGreen w-full px-12 lg:px-20 py-24 flex flex-col items-center gap-8 font-poppins text-sm text-earlyDawn">
      <div className="w-full whitespace-nowrap px-6 py-3 lg:py-0 rounded-l-sm lg:border-l-[4px]  border-duckyYellow">
        <h1 className="font-semibold text-3xl md:text-5xl leading-normal text-center lg:text-left ">
          What Is Afro <br /> <span>Creative Hub?</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8  items-center lg:items-start">
        <p className="text-center  lg:text-left  lg:pr-[16rem] capitalize text-lg">
          The meaning of production in carilo is the creation. development and
          the path is progress and the starting point to achive the goals that
          we all have in petroforce Brand, with over 20 years of experience in
          the oil and petrochemical indusrty.
        </p>
        <Link to={"/"}>
          <button className=" transition-all duration-300 ease-in-out px-8 py-3 rounded-md font-medium  bg-earlyDawn lg:hover:bg-duckyYellow text-midnight">
            Explore
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;

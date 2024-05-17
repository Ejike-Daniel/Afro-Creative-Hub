import car from "../../assets/car-img.png";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section className="w-full justify-between px-2 md:px-16 py-10 flex flex-col md:flex-row gap-6 lg:gap-12 items-center ">
      <div className=" w-full md:w-[90%] flex items-center ">
        <img src={car} alt={car} />
      </div>
      <Accordion />
    </section>
  );
};

export default FAQ;

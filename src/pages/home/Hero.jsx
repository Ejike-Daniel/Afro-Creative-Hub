import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import broImg from "../../assets/bro.png";
import panaImg from "../../assets/pana.png";

const Hero = () => {
  return (
    <section className="w-full pt-16 py-20 bg-duckyYellow  flex justify-center flex-col relative ">
      <div className="w-[23%] absolute top-12 left-0">
        <img src={broImg} alt={broImg} className=" hidden lg:block  " />
      </div>

      <div className=" flex flex-col justify-center items-center gap-6 py-3 md:py-10 font-poppins ">
        <h1 className=" text-4xl md:text-6xl font-bold text-center pb-8 ">
          Connect With <br />
          <span className="text-earlyDawn pb-6">Creative Minds</span>
          <br /> <span>Afro Creative Hub</span>
        </h1>
        <p className="  md:px-0 px-4 text-center text-blackCow font-medium pb-3 ">
          A comprehensive platform to help hirers and creators navigate the
          creative <br />
          world from discovering inspiration, to connecting with one another.
        </p>
        <Button className={"mb-7 bg-tealishGreen"}>Hire a Freelancer</Button>
      </div>
      <div className="w-[23%] absolute bottom-1 right-0 ">
        <img src={panaImg} alt={panaImg} className=" hidden lg:block  " />
      </div>

      <SearchBar />
    </section>
  );
};

export default Hero;

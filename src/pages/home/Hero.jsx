import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";

const Hero = () => {
  return (
    <section className="w-full pt-16 py-20 bg-duckyYellow heroBg   ">
      <div className=" flex flex-col justify-center items-center gap-6 py-16 ">
        <h1 className=" text-5xl md:text-6xl font-bold text-center pb-8 ">
          Connect With <br />
          <span className="text-earlyDawn pb-6">Creative Minds</span>
          <br /> <span>Afro Creative Hub</span>
        </h1>
        <p className=" px-12 text-center md:px-0 text-blackCow font-medium pb-3 ">
          A comprehensive platform to help hirers and creators navigate the
          creative <br />
          world from discovering inspiration, to connecting with one another.
        </p>
        <Button>Hire a Freelancer</Button>
      </div>
      <SearchBar className=' mx-auto' />
    </section>
  );
};

export default Hero;

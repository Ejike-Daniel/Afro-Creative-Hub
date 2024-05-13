import broImg from "../../assets/bro.png";
import panaImg from "../../assets/pana.png";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <section className="w-full py-12 pt-16 bg-duckyYellow relative  ">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={broImg} alt="img" className="h-[75%] left-0  md:bottom-6" />
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center leading-none ">
            Connect With <br />
            <span className="text-earlyDawn pb-6">Creative Minds</span>
            <br /> <span>Afro Creative Hub</span>
          </h1>
          <p></p>
          <Button>Hire a Freelancer</Button>
        </div>
        <img
          src={panaImg}
          alt="img"
          className=" absolute right-0 h-[75%] md:bottom-0"
        />
      </div>
    </section>
  );
};

export default Hero;

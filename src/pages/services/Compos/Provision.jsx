import { Link } from "react-router-dom";
const Provision = () => {
  return (
    <div className=" p-[1rem] lg:p-0 lg:flex mb-[1rem] lg:mb-[3rem]">
      <div className=" lg:w-[55%] p-[0.5rem] lg:p-[5rem] ">
        <h2 className="  pb-[1.5rem] text-5xl font-extrabold">
          As A Creative Hub...
        </h2>
        <p>
          We are an agency that believe in the power of digital to transform
          your business. Whether it be a new website, marketing campaign or
          productivity improving software, digital can transform and grow your
          business.
        </p>
      </div>
      <div className=" bg-duckyYellow rounded-[2rem] lg:rounded-bl-[8rem] lg:rounded-none flex flex-col md:w-[98%] md:mx-auto lg:w-[45%] p-[2rem] lg:p-[5rem] text-white leading-8  ">
        <h3>We Provide:</h3>
        <Link className=" font-bold">Video Editing</Link>
        <Link className=" font-bold">Graphic design</Link>
        <Link className=" font-bold">Illustration and Animation</Link>
        <Link className=" font-bold">Digital Marketing</Link>
        <Link className=" font-bold">Branding</Link>
        <Link className=" font-bold">Web and App Design/Dev</Link>
      </div>
    </div>
  );
};

export default Provision;

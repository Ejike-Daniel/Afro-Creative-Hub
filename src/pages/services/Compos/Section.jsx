import Images from "./Images";
import FstPic from "../../../assets/Frame 17.png";
import SndPic from "../../../assets/Frame 16.png";
import TrdPic from "../../../assets/Frame 10.png";
import FthPic from "../../../assets/Frame 4.png";
import FfthPic from "../../../assets/Frame 11.png";
import SthPic from "../../../assets/Frame 2.png";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className=" flex flex-col gap-6 lg:gap-[3rem] mb-[2rem] ">
      <div className=" px-[1rem] md:px-[2rem] lg:px-[4rem] flex  justify-between md:gap-[2rem]">
        <Images src={FstPic} />
        <Images src={SndPic} />
        <Images src={TrdPic} />
        <Images src={FthPic} />
      </div>

      <div className=" lg:flex gap-[7rem] lg:gap-[]">
        <div className=" flex flex-col bg-earlyDawn rounded-r-[3.5rem] p-[2rem] md:p-[4rem] w-[95%] md:w-full lg:w-[80%]">
            <h3 className=" text-duckyYellow font-extrabold text-4xl pb-[2rem]">
              360-degree Solution to your Business
            </h3>
          <div className=" flex flex-col">
          <Link className=" text-3xl">Website Development</Link>
          <Link className=" text-3xl">Content Creation</Link>
          <Link className=" text-3xl">Digital Art</Link>
          <Link className=" text-3xl">Graphic Design</Link>
          <Link className=" text-3xl">Brand Identity</Link>
          <Link className=" text-3xl">Digital Marketing</Link>
          </div>
        </div>
        <div
          className=" hidden lg:flex md:flex-col
         gap-8 mr-[3rem] "
        >
          <Images src={FfthPic} />
          <Images src={SthPic} />
        </div>
      </div>
    </div>
  );
};

export default Section;

import topimg from "../../../assets/Frame 5.png";
import FstPic from "../../../assets/Frame 17.png";
import halfimg from "../../../assets/Frame 8.png";
import lastimg from "../../../assets/Frame 1.png";
import Images from "./Images";
const Analysis = () => {
  return (

    <div className=" flex flex-col lg:flex-row lg:mb-[3rem] gap-[6rem] lg:gap-0  ">
      <div className=" px-4 py-[4rem] flex bg-earlyDawn rounded-r-[10rem] w-[95%] lg:w-[95%] md:px-[4rem] md:py-[8rem] lg:h-[30rem] justify-between my-auto ">
        <div className=" flex justify-between w-[100%] my-auto mx-auto ">
        <div className=" flex flex-col gap-4">
          <h3 className=" font-bold text-duckyYellow text-4xl text-center">7</h3>
          <p className=" text-[0.8rem] md:text-[2rem] text-center font-bold">Years of Service</p>
        </div>
        <div className=" flex flex-col gap-4">
        <h3  className=" font-bold text-duckyYellow text-4xl text-center">99%</h3>
          <p className=" text-[0.8rem] md:text-[2rem] text-center font-bold">Client Retention</p>
        </div>
        <div className=" flex flex-col gap-4">
        <h3  className=" font-bold text-duckyYellow text-4xl text-center">221+</h3>
          <p className=" text-[0.8rem] md:text-[2rem] text-center font-bold">Satisfied Clients</p>
        </div>
        </div>
        
      </div>
  
    <div className=" hidden lg:flex lg:flex-col px-[2rem] justify-between lg:gap-[3rem] lg:w-[25%]">
      <Images style={" lg:relative lg:right-[8rem] "} src={topimg}/>
      <Images style={"lg:flex lg:w-[12rem] lg:h-[26rem] lg:relative lg:left-[5rem]"} src={halfimg}/>
    
      <Images style={"lg:relative lg:right-[8rem]"} src={lastimg}/>
      </div>
    </div>
  );
};

export default Analysis;

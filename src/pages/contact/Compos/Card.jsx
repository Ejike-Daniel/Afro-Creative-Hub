import FormArea from "./Form";
import Inform from "./Inform";

const Card = () => {
  return (
    <div className=" mt-[6rem] md:p-3 md:w-full lg:w-fit flex flex-col md:mx-auto gap-10 rounded-[10px] md:mb-[5rem]  shadow-xl shadow-mountainMist lg:flex-row ">
      <Inform/>
      <FormArea />
    </div>
  );
};

export default Card;

import ReviewSlider from "./ReviewSlider";

const HappyClients = () => {
  return (
    <div className=" lg:ml-auto  lg:w-[70%]">
      <div className=" p-6">
        <h2 className=" text-center lg:text-right  text-tealishGreen text-5xl font-bold ">
          Happy Clients About Us
        </h2>
        <p className=" text-center lg:text-right font-extrabold ">
          We are happy to hear from you
        </p>
      </div>

      <div className=" bg-emerald-100 p-[1rem] md:py-12  lg:p-[4rem] lg:rounded-l-[5rem] mb-8">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default HappyClients;

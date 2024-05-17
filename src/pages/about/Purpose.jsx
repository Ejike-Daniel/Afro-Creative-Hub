import data from "./MissionData";
const Purpose = () => {
  return (
    <section className="bg-duckyYellow w-full py-12 px-6  flex flex-col items-center gap-12 font-roboto ">
      <div className=" w-full flex flex-col items-center gap-8">
        <h2 className=" text-midnight whitespace-nowrap text-2xl md:text-3xl font-semibold text-center">
          Our mission is to redefine the <br /> creative Community.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
          {data.map(({ amount, id, context }, index) => (
            <div key={index} className="w-full md:w-[50%] lg:w-[25%] ">
              <div className="h-[15rem] bg-earlyDawn flex items-start gap-3 lg:gap-5 flex-col px-6 py-6 rounded-lg">
                <p className="text-sunriseOrange text-2xl font-medium">
                  {amount}
                </p>
                <p className="text-midnight text-[18px] pr-20 capitalize font-medium">
                  {id}
                </p>
                <p className="text-midnight">{context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full lg:w-[80%] py-6 flex items-center gap-3 md:gap-7 flex-col  px-8  rounded-md text-center bg-tealishGreen text-earlyDawn font-poppins">
        <h2 className=" text-xl  md:text-5xl font-semibold  whitespace-nowrap">
          Our Vision <br /> As A Creative Community
        </h2>
        <p className=" md:px-28 lg:px-36">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          provident, possimus accusamus eaque quod in!
        </p>
        <p className=" md:px-28 lg:px-36 pb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          sequi blanditiis labore ratione voluptatibus. Dolorem esse
          accusantium, soluta quae aut architecto molestias, minus quis
          reprehenderit iste suscipit. Id, eum incidunt.
        </p>
      </div>
    </section>
  );
};

export default Purpose;

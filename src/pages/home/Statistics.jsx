import Card from "../../components/Card";

const Statistics = () => {
  return (
    <section className="bg-duckyYellow py-8 md:h-[15rem] relative  font-poppins text-earlyDawn">
      <div className="flex  flex-col md:flex-row justify-center items-center gap-12">
        <Card className={"md:absolute -top-16 left-28  lg:left-[23rem]"}>
          <h1 className=" font-extrabold text-6xl whitespace-nowrap md:pb-3 pb-6">
            700 +
          </h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur Okay come lemme show u sth.
          </p>
        </Card>
        <Card className={"md:absolute -top-16 right-28  lg:right-[23rem]"}>
          <h1 className="font-extrabold text-6xl whitespace-nowrap pb-6 md:pb-3">
            700 +
          </h1>
          <p className="text-center  ">
            Lorem ipsum dolor sit amet consectetur Okay come lemme show u sth.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Statistics;

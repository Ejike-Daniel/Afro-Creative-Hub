import Card from "../../components/Card";
import data from "./StatsData";

const Statistics = () => {
  return (
    <section className="bg-duckyYellow py-8 md:h-[15rem] relative  font-poppins text-earlyDawn">
      <div className="flex  flex-col md:flex-row justify-center items-center gap-12">
        {data.map(({ stats, context }, index) => (
          <Card
            key={index}
            style={{
              position: "absolute",
              top: `${index * 59}rem`,
              left: `${index * 34}px`,
            }}
          >
            <h1 className="font-extrabold text-6xl whitespace-nowrap">
              {stats}
            </h1>
            <p className="text-center  ">{context}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

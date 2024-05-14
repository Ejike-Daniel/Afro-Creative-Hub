import Card from "../../components/Card";
import data from "./StatsData";

const Statistics = () => {
  return (
    <section className="bg-duckyYellow py-8 font-poppins text-earlyDawn">
      <div className="flex justify-center items-center gap-10 relative">
        {data.map(({ stats, context }, index) => (
          <Card key={index} className="px-36 py-6 flex flex-col items-center">
            <h1 className="font-extrabold text-6xl whitespace-nowrap">{stats}</h1>
            <p className="text-left px-20 ">{context}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

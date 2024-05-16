import { AiFillLike } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import data from "../home/GalleryData";
import Button from "../../components/Button";

const ImageCard = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-8">
      <section className="grid  grid-cols-3 grid-rows-4 gap-6">
        {data.map(({ img, id, likes, views }, index) => (
          <div key={index}>
            <div className="flex flex-col gap-6 items-center justify-center py-2 ">
              <img src={img} alt={id} />
              <div className="flex flex-col md:flex-row justify-between gap-5 items-center lg:gap-20 md:gap-16">
                <p className='w-full '>{id}</p>
                <div className="flex  justify-between items-center gap-4 md:gap-6">
                  <div className="flex justify-between items-center gap-1 md:gap-2">
                    <button className=" text-mountainMist font-bold">
                      <AiFillLike />
                    </button>
                    <p>{likes}</p>
                  </div>
                  <div className="flex  justify-between items-center gap-2">
                    <button className="text-mountainMist">
                      <AiFillEye />
                    </button>
                    <p>{views}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Button className={"bg-duckyYellow"}>Browse More</Button>
    </div>
  );
};

export default ImageCard;

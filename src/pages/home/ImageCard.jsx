import { AiFillLike } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import data from "../home/GalleryData";
import Button from "../../components/Button";
import { useState } from "react";

const ImageCard = () => {
  const [isBrowseMore, setIsBrowseMore] = useState(false);

  const handleClick = () => {
    setIsBrowseMore(!isBrowseMore);
  };

  const reversedData = [...data].reverse();

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <section className="grid grid-cols-3 grid-rows-4 gap-6">
        {!isBrowseMore &&
          data.slice(12).map(({ img, id, likes, views }, index) => (
            <div key={index}>
              <div className="flex flex-col gap-6 items-center justify-center py-2">
                <div className="w-full">
                  <img src={img} alt={id} />
                </div>
                <div className="flex flex-col md:flex-row font-medium font-normaljustify-between md:whitespace-nowrap gap-4 items-center text-[12px] md:text-sm md:gap-8">
                  <p className="w-full">{id}</p>
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex justify-between items-center gap-1 md:gap-2">
                      <button className="text-mountainMist font-bold">
                        <AiFillLike />
                      </button>
                      <p>{likes}</p>
                    </div>
                    <div className="flex justify-between items-center gap-2">
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

        {isBrowseMore &&
          reversedData.map(({ img, id, likes, views }, index) => (
            <div key={index}>
              <div className="flex flex-col gap-6 items-center justify-center py-2">
                <div className="w-full">
                  <img src={img} alt={id} />
                </div>
                <div className="flex flex-col md:flex-row font-medium font-normaljustify-between md:whitespace-nowrap gap-4 items-center text-[12px] md:text-sm md:gap-8">
                  <p className="w-full">{id}</p>
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex justify-between items-center gap-1 md:gap-2">
                      <button className="text-mountainMist font-bold">
                        <AiFillLike />
                      </button>
                      <p>{likes}</p>
                    </div>
                    <div className="flex justify-between items-center gap-2">
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
      <Button className={"bg-duckyYellow"} onClick={handleClick}>
        {isBrowseMore ? "Show Less" : "Browse More"}
      </Button>
    </div>
  );
};

export default ImageCard;

import { AiOutlineLike } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import data from "../home/GalleryData";
const ImageCard = () => {
  return (
    <section className="  grid-cols-3 grid-rows-4 gap-4">
      {data.map(({ img, id, likes, views }, index) => (
        <div key={index}>
          <div className="flex flex-col gap-6 items-center justify-center">
            <img src={img} alt={id} />
            <div className="flex justify-between items-center gap-28">
              <p>{id}</p>
              <div className="flex  justify-between items-center gap-6">
                <div className="flex  justify-between items-center gap-2">
                  <AiOutlineLike className="text-mountainMist" />
                  <p>{likes}</p>
                </div>
                <div className="flex  justify-between items-center gap-2">
                  <FiEye className="text-mountainMist" />
                  <p>{views}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageCard;

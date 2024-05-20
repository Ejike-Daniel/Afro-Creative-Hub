import { FaStar } from "react-icons/fa";
import data from "./ReviewData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper/modules";
import "swiper/css/virtual";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { A11y, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useState } from "react";

const ReviewSlider = () => {
  const [revPerPage, setRevPerPage] = useState(1);

  return (
    <section>
      <Swiper
        className="w-full mySwiper"
        spaceBetween={20}
        slidesPerView={revPerPage}
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map(({ context, name, position, rating }, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col-reverse lg:flex-row items-center gap-7"
          >
            <div className=" w-full p-[2rem] rounded-[2rem] md:rounded-[1rem] bg-tealishGreen md:w-[80%] md:py-16 lg:py-6 lg:w-[45%] mb-3">
              <p className="">{context}</p>
            </div>
            <div>
              <div className="flex flex-col gap-5 w-full ">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < rating
                          ? "text-duckyYellow text-3xl outline-none"
                          : "text-smokeyGrey text-3xl outline-none"
                      }
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-2 lg:pb-20">
                  <span className="font-medium text-2xl">{name}</span>
                  <span className="font-thin text-center lg:text-left">
                    {position}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSlider;

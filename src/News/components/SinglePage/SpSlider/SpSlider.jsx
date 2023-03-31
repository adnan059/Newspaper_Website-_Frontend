import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { popular } from "../../../dummyData";
import { truncate } from "../../../utils/truncate";

const SpSlider = () => {
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 4,
            },
          }}
          className="spSliderContainer"
        >
          {popular.map((pop, i) => {
            return (
              <SwiperSlide className="box" key={i}>
                <img src={pop.cover} alt="" />
                <p>{truncate(pop.title, 25)}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SpSlider;

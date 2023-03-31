import React from "react";

import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";

import { popular } from "../../../../dummyData";
import { truncate } from "../../../../utils/truncate";
import "./Popular.css";

const Popular = () => {
  return (
    <>
      <section className="popular">
        <div className="heading">
          <span>Popular</span>
        </div>

        <Swiper
          className="popularContainer"
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            1050: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          grid={{
            rows: 4,
            fill: "row",
          }}
          modules={[Grid]}
        >
          {popular.map((pop, i) => {
            return (
              <SwiperSlide className="box">
                <div className="cat">{pop.catgeory}</div>
                <img src={pop.cover} alt="" />

                <div className="content">
                  <h2 className="title">{truncate(pop.title, 25)}</h2>
                  <div className="date">
                    <i className="fa-sharp fa-solid fa-calendar-days"></i>
                    {pop.date}
                  </div>
                  <div className="comments">
                    <i className="fa-solid fa-comment"></i>
                    {pop.comments}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Popular;

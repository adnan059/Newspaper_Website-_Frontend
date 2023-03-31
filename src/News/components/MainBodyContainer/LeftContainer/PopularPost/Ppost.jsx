import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ppost } from "../../../../dummyData";

import "./Ppost.css";

import { truncate } from "../../../../utils/truncate";

const Ppost = () => {
  return (
    <>
      <section className="ppost">
        <div className="heading">
          <span>Popular Posts</span>
        </div>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            850: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="ppostContainer"
        >
          {ppost.map((pp, i) => {
            return (
              <SwiperSlide className="box" key={i}>
                <div className="cat">{pp.catgeory}</div>
                <img src={pp.cover} alt="" />
                <h2>{truncate(pp.title, 25)}</h2>
                <p>
                  <i className="fa-sharp fa-solid fa-calendar-days"></i>
                  {pp.date}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Ppost;

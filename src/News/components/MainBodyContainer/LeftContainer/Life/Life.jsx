import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { lifestyle } from "../../../../dummyData";
import { truncate } from "../../../../utils/truncate";
import "./Life.css";

const Life = () => {
  return (
    <>
      <section className="life">
        <div className="heading">
          <span>Life Style</span>
        </div>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="lifeContainer"
        >
          {lifestyle.map((life, i) => {
            return (
              <SwiperSlide className="box" key={i}>
                <div className="cat">{life.catgeory}</div>
                <img src={life.cover} alt="" />
                <h2>{truncate(life.title, 25)}</h2>
                <p>
                  <i className="fa-sharp fa-solid fa-calendar-days"></i>
                  {life.date}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Life;

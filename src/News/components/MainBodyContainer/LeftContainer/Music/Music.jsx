import React from "react";
import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { popular } from "../../../../dummyData";
import { truncate } from "../../../../utils/truncate";
import "./Music.css";

const Music = () => {
  return (
    <>
      <section className="music">
        <div className="heading">
          <span>Music</span>
        </div>

        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          grid={{
            rows: 2,
            fill: "row",
          }}
          modules={[Grid]}
          className="musicContainer"
        >
          {popular
            .filter((pop, i) => pop.catgeory === "fun")
            .map((pop, i) => {
              return (
                <SwiperSlide className="box" key={i}>
                  <div className="cat">{pop.catgeory}</div>
                  <img src={pop.cover} alt="" />
                  <div className="content">
                    <h2>{truncate(pop.title, 50)}</h2>
                    <p className="date">
                      <i className="fa-sharp fa-solid fa-calendar-days"></i>
                      {pop.date}
                    </p>
                    <p className="desc">{truncate(pop.desc, 120)}</p>
                    <div className="sc">
                      <span>
                        <i className="fa-solid fa-share"></i>12 Shares
                      </span>
                      <span>
                        <i className="fa-solid fa-comment"></i>35 Comments
                      </span>
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

export default Music;

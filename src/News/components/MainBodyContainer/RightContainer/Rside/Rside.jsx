import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { gallery, tpost } from "../../../../dummyData";
import Smedia from "../Smedia/Smedia";
import "./Rside.css";

//<i class="fa-solid fa-paper-plane"></i>

const categories = [
  "world",
  "travel",
  "sports",
  "fun",
  "health",
  "fashion",
  "business",
  "technology",
];

const Rside = () => {
  const truncate = (txt, num) => {
    const newTxt = txt.length > num ? txt.slice(0, num) + "..." : txt;
    return newTxt;
  };

  return (
    <>
      <section className="rside">
        <div className="heading rs">
          <span>Stay Connected</span>
        </div>
        <Smedia />

        <div className="heading rs">
          <span>Subscribe</span>
        </div>
        <form className="subscribe">
          <h2>Subscribe to our new Stories</h2>
          <input type="email" placeholder="Email" />
          <button>
            <i className="fa-solid fa-paper-plane"></i>Subscribe
          </button>
        </form>

        <div className="heading rs">
          <span>Tiktok Post</span>
        </div>
        <div className="tpostContainer">
          {tpost.map((tp, i) => {
            return (
              <div className="box" key={i}>
                <img src={tp.cover} alt="" />
                <div className="content">
                  <div className="title">{truncate(tp.title, 30)}</div>
                  <p className="date">1 year ago</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="heading rs">
          <span>Categories</span>
        </div>
        <div className="catContainer">
          {categories.map((cat, i) => {
            return (
              <div className="cat" key={i}>
                <div className="trn"></div>
                <span>{cat}</span>
              </div>
            );
          })}
        </div>

        <div className="heading rs">
          <span>Gallery</span>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={20}
          className="galleryContainer"
        >
          {gallery.map((gal, i) => {
            return (
              <SwiperSlide className="gal" key={i}>
                <img src={gal.cover} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Rside;

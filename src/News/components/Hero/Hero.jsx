import React from "react";
import { NavLink } from "react-router-dom";
import { hero } from "./../../dummyData";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroContainer">
          {hero.map((h, i) => {
            return (
              <div className="box" key={i}>
                <img src={h.cover} alt="" />
                <div className="content">
                  <div className="category">{h.category}</div>
                  <NavLink to={`/news/${h.id}`} state={{ ...h }}>
                    <div className="title">{h.title}</div>
                  </NavLink>
                  <div className="smallinfo">
                    <span>{h.authorName}</span>
                    <span>{h.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;

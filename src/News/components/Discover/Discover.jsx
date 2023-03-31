import React from "react";
import { discover } from "../../dummyData";
import "./Discover.css";

const Discover = () => {
  return (
    <>
      <section className="discover">
        <div className="container">
          <div className="heading">
            <span>Discover</span>
          </div>
          <div className="discoverContainer">
            {discover.map((disc, i) => {
              return (
                <div className="box" key={i}>
                  <img src={disc.cover} alt="" />
                  <h2>{disc.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;

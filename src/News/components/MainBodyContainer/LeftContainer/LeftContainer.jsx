import React from "react";
import "./LeftContainer.css";
import Life from "./Life/Life";
import Music from "./Music/Music";
import Popular from "./Popular/Popular";
import Ppost from "./PopularPost/Ppost";

const LeftContainer = () => {
  return (
    <>
      <div className="leftContainer">
        <Popular />
        <Ppost />
        <Life />
        <Music />
      </div>
    </>
  );
};

export default LeftContainer;

import React from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import "./MainBodyContainer.css";
import RightContainer from "./RightContainer/RightContainer";

const MainBodyContainer = () => {
  return (
    <>
      <section className="mainBodyContainer">
        <div className="container">
          <div className="row">
            <LeftContainer />
            <RightContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBodyContainer;

import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightContainer from "./../MainBodyContainer/RightContainer/RightContainer";
import "./SinglePage.css";
import SpMain from "./SpMain/SpMain";
import SpSlider from "./SpSlider/SpSlider";

const SinglePage = () => {
  const location = useLocation();
  const h = location.state;

  return (
    <>
      <section className="singlePage">
        <Header />
        <Navbar />
        <SpSlider />
        <div className="container">
          <div className="row">
            <SpMain h={h} />
            <RightContainer />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default SinglePage;

import React from "react";
import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MainBodyContainer from "../MainBodyContainer/MainBodyContainer";
import Navbar from "../Navbar/Navbar";
import Header from "./../Header/Header";
import "./HomeContainer.css";

const HomeContainer = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <MainBodyContainer />
      <Discover />
      <Footer />
    </>
  );
};

export default HomeContainer;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import SinglePage from "./components/SinglePage/SinglePage";
import "./News.css";

const News = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/news/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default News;

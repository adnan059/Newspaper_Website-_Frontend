import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const getFullDate = () => {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const fullDate = `${dd}-${mm}-${yyyy}`;
    return fullDate;
  };
  return (
    <>
      <header className="header container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" className="logoImg" />
          </NavLink>
        </div>

        <div className="otherInfo">
          <div className="cont1">
            <button className="btn">E - Paper</button>
            <button className="btn">Today's News</button>
            <button className="btn">বাংলা</button>
          </div>
          <div className="cont2">{getFullDate()}</div>
        </div>
      </header>
    </>
  );
};

export default Header;

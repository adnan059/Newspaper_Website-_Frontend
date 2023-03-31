import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <i
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`menu-bar fa-solid ${
              isNavOpen ? "fa-times" : "fa-bars"
            }`}
          ></i>
          <div className={`${isNavOpen ? "navbar active" : "navbar"}`}>
            <NavLink>Home</NavLink>
            <NavLink>National</NavLink>
            <NavLink>International</NavLink>
            <NavLink>Politics</NavLink>
            <NavLink>Economics</NavLink>
            <NavLink>Sports</NavLink>
            <NavLink>Culture</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

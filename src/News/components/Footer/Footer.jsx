import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row1">
            <div className="lsf">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
              <p>
                Editor: Mr. John Doe, published by chairman, editorial board ASM
                Mark Howard on behalf of The Nation
              </p>
              <p>Address: 23/5 Park Street, ABC Town, TX, USA</p>
              <p>Fax: +021459 XXX YYYY</p>
              <p>Email: tnation@ymail.com</p>
            </div>
            <div className="rsf">
              <div className="quickLinks">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/feedback">Feedback</NavLink>
                <NavLink to="/archive">Archive</NavLink>
                <NavLink to="/old-archive">Old Archive</NavLink>
                <NavLink to="/disclaimer">Disclaimer & Privacy Policy</NavLink>
              </div>

              <div className="socials">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  instagram
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  youtube
                </a>
              </div>

              <div className="impLinks">
                <NavLink to="/advertisement">Advertisement</NavLink>
                <NavLink to="/writers">Writer's List</NavLink>
                <NavLink to="/comment-policy">Comments Policy</NavLink>
                <NavLink to="/t-c">terms & conditions</NavLink>
              </div>
            </div>
          </div>
          <p className="credit">
            Developed by <span>Md Adnan Faruk</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;

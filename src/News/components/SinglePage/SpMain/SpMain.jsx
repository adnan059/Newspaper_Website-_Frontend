import React from "react";
import "./SpMain.css";

const SpMain = ({ h }) => {
  const {
    cover,

    title,
    authorName,
    authorImg,
    time,
    desc,
    details,
  } = h;

  return (
    <div className="spMain">
      <h1 className="title">{title}</h1>

      <div className="authorDate">
        by <img src={authorImg} alt="" /> {authorName} on <span>{time}</span>
      </div>

      <div className="socials">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.reddit.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-reddit"></i>
        </a>
      </div>

      <p className="para1">{desc[0].para1}</p>
      <p className="para2">{desc[1].para2}</p>

      <img src={cover} alt="" className="cover" />

      <p className="para3">{desc[2].para3}</p>

      <div className="details">
        <h1 className="detTitle">{details[0].title}</h1>
        <p className="detPara1">{details[1].para1}</p>

        <div className="quote">
          <i className="fa fa-quote-left"></i>
          <p>{details[2].quote}</p>
        </div>

        <p className="detPara2">{details[3].para2}</p>
        <p className="detPara3">{details[4].para3}</p>
      </div>
    </div>
  );
};

export default SpMain;

import React from "react";
import "./Hero.css";
import icon from "../../assets/images/student_store_icon.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1> <br />
          <h1>Find Your Merch!</h1>
        </div>
        <div className="media">
          <img className="hero-img" src={icon}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;

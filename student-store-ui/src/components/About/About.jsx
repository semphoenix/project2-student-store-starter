import React from "react";
import "./About.css";
import logo from "../../assets/images/codepath.svg";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="content">
        <h3>About</h3>
        <div className="summary">
          <div className="text">
            <p>
              The codepath student store offers great products at great prices
              from a great team and for a great cause.
            </p>
            <p>
              We've searched far and wide for items that perk the interests of
              even the most eccentric students and decided to offer them all
              here in one place.
            </p>
            <p>
              All proceeds go towards bringing high quality CS education to
              college students around the country.
            </p>
          </div>
          <div className="media">
            <img src={logo} alt="codepath large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

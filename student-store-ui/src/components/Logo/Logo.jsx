import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/codepath.svg";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo}></img>
      </Link>
    </div>
  );
};

export default Logo;

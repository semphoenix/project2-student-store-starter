import React, { useState } from "react";
import "./Category.css";

const Category = ({ catName, isActive = false, handleClick }) => {
  return (
    <li className={isActive ? "is-active" : ""}>
      <button onClick={handleClick}>{catName}</button>
    </li>
  );
};

export default Category;

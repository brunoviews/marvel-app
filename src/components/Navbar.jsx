import React from "react";
import "./Navbar.css";
import MarvelIcon from "../icons/MarvelIcon";
import HeartIcon from "../icons/HeartIcon";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="icono">
        <MarvelIcon />
      </div>

      <div className="fav">
        {" "}
        <HeartIcon width="24" height="21.68" />{" "}
        <span className="fav-counter">5</span>
      </div>
      
    </div>
  );
}

export default Navbar;

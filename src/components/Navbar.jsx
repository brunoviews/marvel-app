import React from "react";
import "./Navbar.css";
import MarvelIcon from "../icons/MarvelIcon";
import HeartIcon from "../icons/HeartIcon";

function Navbar({ likesCount, onFavClick, favActive, onAllCharactersClick }) {

  return (
    <div className="navbar-container">
      <div className="icono" style={{ cursor: "pointer" }} onClick={onAllCharactersClick}>
        <MarvelIcon />
      </div>
      <div className="fav" style={{ cursor: "pointer" }} onClick={onFavClick}>
        <HeartIcon
          width="24"
          height="21.68"/>
        <span className="fav-counter">{likesCount}</span>
      </div>
    </div>
  );
}

export default Navbar;


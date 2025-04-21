import React from "react";
import "./Navbar.css";
import MarvelIcon from "../icons/MarvelIcon";
import HeartIcon from "../icons/HeartIcon";
import { Link } from "react-router-dom";

function Navbar({ likesCount, onFavClick, favActive, onAllCharactersClick }) {
  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <div className="icono" style={{ cursor: "pointer" }} onClick={onAllCharactersClick}>
          <MarvelIcon />
        </div>
      </Link>
      <div
        className={`fav${favActive ? " fav-active" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={onFavClick}
      >
        <HeartIcon
          width="24"
          height="21.68"
          fill={favActive ? "#fff" : "#EC1D24"}
        />
        <span className="fav-counter">{likesCount}</span>
      </div>
    </div>
  );
}

export default Navbar;


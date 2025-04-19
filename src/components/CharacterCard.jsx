import React from "react";
import CardHeart from "../icons/CardHeart";
import "./CharacterCard.css";

function CharacterCard({ character }) {
  return (
    <>
    
    <div className="marvel-card">
      <img src={`${character.path}`} alt={character.name} />
      <div className="character-info">
        <p className="character-name">{character.name}</p>
        <CardHeart width="12" height="10.84"/>
      </div>
      <div className="cut-white"></div>
    </div>
    
    </>
  );
}

export default CharacterCard;

import React from "react";
import "./CharacterDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UnlikedHeart from "../icons/UnlikedHeart";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://68012ab881c7e9fbcc41be05.mockapi.io/api/v1/characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
      });
  }, [id]);

  if (!character) return null;

  return (
    <>
      {" "}
      <div className="character-detail-header-background">
        <div className="character-detail">
          <img src={character.path} alt={character.name} />
          <div className="character-detail-header">
            <div className="character-detail-header-title">
              <h2>{character.name}</h2>
              <UnlikedHeart width="24" height="22" />
            </div>
            <div className="character-description">
              <p>{character.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="comic-section">
        <h2>Comics</h2>
        <div className="comic-list">
          {character.comics.map((comic) => (
            <div key={comic.id} className="comic-item">
              <img src={comic.path} alt={comic.title} />
              <h3>{comic.title}</h3>
              <h5>{comic.date ? comic.date.slice(0, 4) : ""}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;

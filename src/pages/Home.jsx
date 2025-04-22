import "./Home.css";
import SearchIcon from "../icons/SearchIcon";
import CharacterList from "../components/CharacterList";
import { useEffect, useState } from "react";

function Home({
  likedCharacters,
  setLikedCharacters,
  showOnlyLiked,
  setShowOnlyLiked,
}) {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchCharacter.toLowerCase())
  );

  const displayedCharacters = showOnlyLiked
    ? filteredCharacters.filter((character) =>
        likedCharacters.includes(character.id)
      )
    : filteredCharacters;

  const [resultsCounter, setResultsCounter] = useState();
  useEffect(() => {
    setResultsCounter(displayedCharacters.length);
  }, [displayedCharacters]);

  useEffect(() => {
    fetch("https://68012ab881c7e9fbcc41be05.mockapi.io/api/v1/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="search-bar-container">
          <div className="search-bar">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="SEARCH A CHARACTER..."
              onChange={(e) => setSearchCharacter(e.target.value)}
            />
          </div>
          <span className="results-counter">{resultsCounter} Results</span>
        </div>
        <div className="character-list-container">
          <CharacterList
            characters={displayedCharacters}
            likedCharacters={likedCharacters}
            setLikedCharacters={setLikedCharacters}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

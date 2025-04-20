import "./CharacterList.css";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters, likedCharacters, setLikedCharacters }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character} 
          likedCharacters={likedCharacters}
          setLikedCharacters={setLikedCharacters}
        />
      ))}
    </div>
  );
}

export default CharacterList;

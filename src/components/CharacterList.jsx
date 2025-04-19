
import "./CharacterList.css";
import CharacterCard from "./CharacterCard";

function CharacterList({characters}) {
 
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;

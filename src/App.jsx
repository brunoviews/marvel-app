import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  // Añadido estado para personajes favoritos
  const [likedCharacters, setLikedCharacters] = useState([]);

  return (
    <>
      <div className="main">
        <Home 
          likedCharacters={likedCharacters}
          setLikedCharacters={setLikedCharacters}
        />
      </div>
    </>
  );
}

export default App;

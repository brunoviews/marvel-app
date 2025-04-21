import "./App.css";
import Home from "./pages/Home";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [likedCharacters, setLikedCharacters] = useState([]);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  const handleFavClick = () => setShowOnlyLiked((prev) => !prev);
  const handleAllCharactersClick = () => setShowOnlyLiked(false);

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar
          likesCount={likedCharacters.length}
          onFavClick={handleFavClick}
          favActive={showOnlyLiked}
          onAllCharactersClick={handleAllCharactersClick}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  likedCharacters={likedCharacters}
                  setLikedCharacters={setLikedCharacters}
                  showOnlyLiked={showOnlyLiked}
                  setShowOnlyLiked={setShowOnlyLiked}
                />
              }
            />
            <Route
              path="/character/:id"
              element={
                <CharacterDetail
                  likedCharacters={likedCharacters}
                  setLikedCharacters={setLikedCharacters}
                />
              }
            />
          </Routes>
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;
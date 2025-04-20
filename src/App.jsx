import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  // Añadido estado para personajes favoritos
  const [likedCharacters, setLikedCharacters] = useState([]);

  return (
    <>
      <div className="main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Home
            likedCharacters={likedCharacters}
            setLikedCharacters={setLikedCharacters}
          />
        </motion.div>
      </div>
    </>
  );
}

export default App;

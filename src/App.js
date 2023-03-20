import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NewCharacterForm from "./NewCharacter";
import AddRace from "./AddRace";
import Menu from "./Menu";
import Home from "./Home";

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const handleAddingCharacterToList = (newCharacter) => {
    const newCharacterList = characterList.concat(newCharacter);
    setCharacterList(newCharacterList);
    console.log(characterList, "characterList");
  };
  const newCharacter = characterList[0];
  return (
    <div className="App">
      <Box>
        <Typography>Character Sheet</Typography>
        <Menu />
      </Box>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/new"
          element={
            <NewCharacterForm
              handleAddingCharacterToList={handleAddingCharacterToList}
              characterList={characterList}
            />
          }
        />
        <Route
          exact
          path="/addRaceDetails"
          element={<AddRace character={newCharacter} />}
        />
      </Routes>
    </div>
  );
}

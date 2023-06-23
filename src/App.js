import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
// import { NewCharacterForm } from "./CharacterCreationModule/NewCharacter";
import { CreateNewCharacterPage } from './CharacterCreation/CreateNewCharacter';
import Menu from "./Menu";
import Home from "./Home";
import NPC from "./Components/NPCs";

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const handleAddingCharacterToList = (newCharacter) => {
    const newCharacterList = characterList.concat(newCharacter);
    setCharacterList(newCharacterList);
    console.log(characterList, "characterList");
  };
  // const updateCharacter = (editedCharacter) => {
  //   const newCharacterList = characterList.map((character) => {
  //     if(character.characterId === editedCharacter.characterId) {
        
  //     }
  //   }
    
  // }
 
  return (
    <div className="App">
      <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems:'center'}}>
        <Typography>Character Sheet</Typography>
        <Menu />
      </Box>
      <Routes>
        <Route
          exact
          path="/new"
          element={
            <CreateNewCharacterPage handleAddingCharacterToList={handleAddingCharacterToList} characterList={characterList} />
          }
        />
        <Route
          exact
          path="/npc"
          element={
            <NPC />
          }
        />
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

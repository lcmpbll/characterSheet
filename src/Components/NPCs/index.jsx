import React, { useState } from 'react';
import NPCDetails from './NPCdetails';
import creatureList from '../../data/creatures.json';
import LargeCharacterDetails from './LargeCharacterDetails';

import { Box } from '@mui/material';

 const RegularList = ({
  items, 
  resourceName, 
  itemComponent: ItemComponent,

  
}) => {

  return(
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{[resourceName]: item}} />
       
      ))}
    </>
  );
}

const NPC = () => {
 const [selectedCharacter, setSelectedCharacter] = useState(creatureList[0]);
 console.log(selectedCharacter)

  return (
    <>
      <Box sx={{widht: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly', flex: 6, padding: '10px'}}>
        <Box sx={{flex: 2}}>
          <RegularList items={creatureList} resourceName='NPC' itemComponent={NPCDetails} />
        </Box>
        <Box sx={{flex: 4}}>
          {selectedCharacter === null ? 
            <p>Select Character</p> :
            <LargeCharacterDetails npc={selectedCharacter}/> 
          }
        </Box>
      </Box>
    </>
  )
}

export default NPC


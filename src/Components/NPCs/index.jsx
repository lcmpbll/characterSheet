import React from 'react';
import NPCDetails from './NPCdetails';
import creatureList from '../../data/creatures.json';

import { Box } from '@mui/material';

 const RegularList = ({
  items, 
  resourceName, 
  itemComponent: ItemComponent
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
 
  return (
    <>
      <div>NPC</div>
    
      <Box>
        <RegularList items={creatureList} resourceName='NPC' itemComponent={NPCDetails}/>
        
      </Box>
  
    </>
  )
}

export default NPC


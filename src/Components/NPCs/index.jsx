import React, { useState } from 'react';
import SmallDetailItem from '../Lists/SmallDetailItem';
import creatureList from '../../data/creatures.json';
import { LargeCharacterDetails } from './LargeCharacterDetails';
import { RegularList } from '../Lists';
import { Box } from '@mui/material';
import { SplitScreen } from '../Divisions/SplitScreen';




export const NPC  = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(creatureList[0]);

  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <RegularList items={creatureList} resourceName='Item' itemComponent={SmallDetailItem} />
      <LargeCharacterDetails npc={selectedCharacter}/> 
    </SplitScreen>
  )
}





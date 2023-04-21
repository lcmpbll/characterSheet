import React from 'react';
import { Box } from '@mui/material';
import { SkillBadge } from './SkillBadge'

export const ItemList = () => {
  const skillsList = [
    { 
     name: 'Strength',
     amount: 20,
     plus: 4
    },
    { 
     name: 'Dexterity',
     amount: 13,
     plus: 1
    },
    { 
     name: 'Constitution',
     amount: 10,
     plus: 0
    },
    { 
     name: 'Intelligence',
     amount: 18,
     plus: 4
    },
    { 
     name: 'Wisdom',
     amount: 8,
     plus: -1
    },
    { 
     name: 'Chararisma',
     amount: 14,
     plus: 0
    },
   ]
   return (
    <>
      {skillsList.map((skill, index) => 
        <Box key={index}>
          <SkillBadge skill={skill}/>
        </Box> 
      )}
    </>
   );
}
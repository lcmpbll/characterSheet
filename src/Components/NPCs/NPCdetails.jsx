import React from 'react'
import Loading from '../loading';
import { Box } from '@mui/material';

const SmallDetailNPC = ({NPC}) => {
  if(!NPC){
    return <Loading/>
  }
  const {name, sub_type} = NPC;

  return (
    <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
      <p>{name} - {sub_type}</p>
    </Box>
  )
}

export default SmallDetailNPC;
import React from 'react';
import Loading from '../loading';
import { Box } from '@mui/material'

const LargeCharacterDetails = ({npc}) => {
  console.log(npc,'ln 6')
  if (!npc){
    return <Loading/>
  }
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', flex: 11}}>
      <Box sx={{flex: 11}}>
        <CharacterHeader name={npc.name} type={npc.type} sub_type={npc.sub_type}/>
      </Box>
    </Box>
  )
}

export default LargeCharacterDetails

const CharacterHeader = (props) => {
  const {name, type, sub_type} = props;
  return (
    <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between',flex: 5, border: '3px solid black', width: '100%', padding: '1rem'}}>
      <Box sx={{display: 'flex', flex: 2, flexDirection: 'column', border: '4px solid grey'}}>
        <h1>{name}</h1>
        <h4>Character Name</h4>
      </Box>
      <Box sx={{flex: 3}}>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '1rem'}}>
         <h3>Type: </h3><p> {type}</p>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '1rem'}}>
          <h3>Sub Type: </h3>
          <p> {sub_type}</p>
        </Box>
      </Box>
    </Box>
  )
  
}
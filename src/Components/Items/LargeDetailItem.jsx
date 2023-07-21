import React from 'react';
import { Box } from '@mui/material';
import Loading from '../loading';
import { DetailsHeader, ActionsBox, OtherAbilities } from '../NPCs/LargeCharacterDetails'

const LargeDetailItem = ({item}) => {
  if(!item) return <Loading/>
  console.log(item);
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', padding: '1rem'}}>
      <Box>
        <DetailsHeader name={item.name} type={item.type} sub_type={item.sub_type} desc={item.description} resource={item.type}/>
      </Box>
      <Box>
        <ActionsBox actions={item.abilities}/>
      </Box>
      <Box>
        {item.abilities?.special_ability ? 
          <OtherAbilities ability={item.abilities?.special_ability} /> :
        null }
      </Box>
    </Box>
  )
}

export default LargeDetailItem
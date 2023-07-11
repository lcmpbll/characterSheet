import React from 'react'
import Loading from '../loading';
import { Box } from '@mui/material';

const SmallDetailItem = ({Item}) => {
  if(!Item){
    return <Loading/>
  };

  const {name, sub_type} = Item;
  
  
  return (
    <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
      <p>{name} {sub_type ? "-" + sub_type : null}</p>
    </Box>
  )
}

export default SmallDetailItem;

export const SmallClickableDetailItem = ({Item}) => {
  if(!Item){
    return <Loading/>;
  }


  const {name, index, url} = Item;
  return (
    <Box sx={{display: 'flex', alignItems: 'flex-end', cursor: 'pointer'}}>
      <p>{name}</p>
    </Box>
  )
}

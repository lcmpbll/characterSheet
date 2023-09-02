import React from 'react'
import Loading from '../loading';
import { Box } from '@mui/material';

const SmallDetailItem = ({Item}) => {
  if(!Item){
    return <Loading/>
  };

    const {name, sub_type, desc} = Item;
    

  console.log(Item, 'small detail')

  return (
    <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
      <p>{name? name: Item} {sub_type ? "-" + sub_type : null}</p>
    </Box>
  )
}

export default SmallDetailItem;

export const SmallClickableDetailItem = ({Item, handleItemClick}) => {
  if(!Item){
    return <Loading/>;
  }
  const {name, index, url} = Item;
  const handleClick = () => {
    if(handleItemClick){

      handleItemClick(url);
    }
  }
 
  return (
    <Box onClick={handleClick} sx={{display: 'flex', alignItems: 'flex-end', cursor: 'pointer'}}>
      <p>{name}</p>
    </Box>
  )
}

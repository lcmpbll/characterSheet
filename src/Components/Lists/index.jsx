import React from 'react';
import Loading from '../loading';
import { Box } from '@mui/material';
import InputField from '../../FormFields/InputField';


export const RegularList = ({
  items, 
  resourceName, 
  itemComponent: ItemComponent,
  handleItemClick
}) => {
  return(
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{[resourceName]: item}}  handleItemClick={handleItemClick}/>
      ))}
    </>
  );
}

export const Sorter = ({list}) => {
  return (
    <Box>
      <Box>
        {/* <InputField name={'search'} label={'search'} fullWidth/> */}
        
      </Box>
    </Box>
  )
}

export const ApiList = ({
  data,
  resourceName,
  itemComponent: ItemComponent,
  handleItemClick
}) => {
  const {
  results,

  } = data || {};


  return data ? (
    <Box sx={{height: '1750px', overflowY: 'auto'}}>
      <Sorter list={results}/>
      <Box sx={{height: '100%'}}>
        {results.map((item, index) => (
          <ItemComponent key={index} {...{[resourceName]: item}} handleItemClick={handleItemClick} />
        ))}
      </Box>
    </Box>
  ) : <Loading/> ;
}

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return(
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3> <ItemComponent key={index} {...{[resourceName]: item}} />
        </>
      ))}
    </>
  )
}





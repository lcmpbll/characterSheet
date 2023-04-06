import React, { useState } from 'react';
import {Box, Typography} from '@mui/material'


const Loading = () => {
  const [isFilled, setIsFilled] = useState([true, false, false]);
  setTimeout(() => {
    let newIsFilled = [];
    if(isFilled[0] === true){
      newIsFilled = [false, true, false];
    } else if (isFilled[1] === true ){
      newIsFilled = [false, false, true];
    } else {
      newIsFilled = [true, false, false];
    }
    setIsFilled(newIsFilled)
  }, 2000);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      border: '2px transparent',
      justifyContent: 'space-between',
      width: '200px',
      
    }}>
      <Dot isFilled={isFilled[0]} />
      <Dot isFilled={isFilled[1]}/>
      <Dot isFilled={isFilled[2]}/>
      <Typography>Loading</Typography>
        
    </Box>
  );
}

export default Loading;


const Dot = (props) => {
  return (
    <Box sx={{
      border: '2px #0E86D4',
      borderRadius: '50%',
      background: props.isFilled ? '#055C9D' : '#D3D3D3',
      height: '20px',
      width: '20px'
    }}/>
  );
}
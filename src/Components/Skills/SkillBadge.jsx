import React from 'react';
import { Box, Typography } from '@mui/material'

export const SkillBadge = ({skill}) => {
  return (
    <Box sx={{ border: '5px solid grey', borderRadius: '8%'}}>
      <Box>
        <Typography>{skill?.name}</Typography>
      </Box>
      <Box>
        <Typography>{skill?.amount}</Typography>
      </Box>
      <Box sx={{ border: '2px solid grey', width: '50%', borderRadius: '40%', margin: '0 auto' }}><Typography>{skill.plus >= 0 ? '+' : null} {skill?.plus}</Typography></Box>
    </Box>
  );
}


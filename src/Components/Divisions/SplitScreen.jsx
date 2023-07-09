import { Box } from '@mui/material';
import React from 'react';

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Box sx={{display: 'flex'}}>
      < Box flex={leftWeight}>
        {left}
      </Box>
      <Box flex={rightWeight}>
        {right}
      </Box>
    </Box>
  );
}
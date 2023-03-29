import React from 'react';
import { Box, Typography } from '@mui/material';

const FormHeader = (props) => {
  const {formTitle} = props;
  return (
    <Box m={'10px'}>
      <Typography>{formTitle}</Typography>
    </Box>
  );
}

export default FormHeader;
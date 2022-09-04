import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function GitApp() {
  function  inputValue(text){
    console.log(text)
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {  m:3, width: '125ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e) => inputValue(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}

import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

function UseState() {


  return (
    <Box>
      <Typography variant="h5">Eliminar UseState</Typography>

      <Typography variant="body1">
        Por favor, escribe el código de seguridad.
      </Typography>

      <TextField
        id="security-code"
        label="Código de seguridad"
        variant="outlined"
        placeholder="Código de seguridad"
      />

      <Button variant="contained">
        Comprobar
      </Button>
    </Box>
  );
}

export { UseState };
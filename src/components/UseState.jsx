import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

function UseState() {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if(loading) {
        console.log('Haciendo la validación');
        setLoading(false);
        console.log('Terminando la validación');
      }
    }, 3000)
  }, [loading]);
  
  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Eliminar UseState</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Por favor, escribe el código de seguridad.
          </Typography>
        </Grid>
        {error && (
          <Grid item xs={12}>
          <Typography variant="caption" color="error">
            Error: Código incorrecto
          </Typography>
          </Grid>
        )}
        {loading && (
          <Grid item xs={12}>
          <Typography variant="caption" color="info">
            Cargando...
          </Typography>
          </Grid>
        )}
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            id="security-code"
            label="Código de seguridad"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button 
            variant="contained" 
            fullWidth sx={{ height: '100%' }} 
            style={{ backgroundColor: '#AEC6CF', color: '#FFF' }}
            onClick={() => setLoading(!loading)}
          >
            Comprobar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export { UseState };
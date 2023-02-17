import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

const SECURITY_CODE = 'contraseña';

function UseState() {
  const [value, setValue] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if(loading) {
        console.log('Haciendo la validación');
        if(value === SECURITY_CODE){
          setLoading(false);
          setError(false);
        }else{
          setError(true);
          setLoading(false);
        }
        console.log('Terminando la validación');
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {(error && !loading ) && (
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
            value={value}
            onChange={ (event) => {
              setValue(event.target.value)
            }}
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
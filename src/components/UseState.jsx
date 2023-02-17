import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

const SECURITY_CODE = 'contraseña';

function UseState() {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false
  });

  // const [value, setValue] = React.useState('');
  // // eslint-disable-next-line no-unused-vars
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if(state.loading) {
        console.log('Haciendo la validación');
        if(state.value === SECURITY_CODE){
          setState({
            ...state,
            loading: false,
            error: false
          });
          // setLoading(false);
          // setError(false);
        }else{
          setState({            
            ...state,
            loading: false,
            error: true
          });
          // setError(true);
          // setLoading(false);
        }
        console.log('Terminando la validación');
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);
  
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
        {(state.error && !state.loading ) && (
          <Grid item xs={12}>
          <Typography variant="caption" color="error">
            Error: Código incorrecto
          </Typography>
          </Grid>
        )}
        {state.loading && (
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
            value={state.value}
            onChange={ (event) => {
              setState({...state, value: event.target.value});
              // setValue(event.target.value)
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button 
            variant="contained" 
            fullWidth sx={{ height: '100%' }} 
            style={{ backgroundColor: '#AEC6CF', color: '#FFF' }}
            onClick={() => 
              setState({ ...state, loading: true })
              }
            >
            Comprobar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export { UseState };
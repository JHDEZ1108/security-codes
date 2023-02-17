import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

const SECURITY_CODE = 'contraseña';

function UseState() {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
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
            error: false,
            confirmed: true
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
  
  if(!state.deleted && !state.confirmed){
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
  } else if(!!state.confirmed && !state.deleted){
    return(
      <React.Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          sx={{pt: 5}}
        >
          <Grid item>
            <Typography variant="h5">
              Necesitamos confirmar. ¿Estás seguro?
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    setState({
                      ...state,
                      deleted: true,
                      value:''
                    });
                  }}
                >
                  Si, eliminar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#AEC6CF', color: '#FFF' }}
                  onClick={() => {
                    setState({
                      ...state,
                      confirmed: false,
                      value:''
                    });
                  }}
                >
                  No, me arrepentí
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } else{
    return(
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        sx={{pt: 5}}
      >
        <Grid item>
          <Typography variant="h5">
            Eliminado con éxito
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: '#AEC6CF', color: '#FFF' }}
            onClick={() => {
              setState({
                ...state,
                confirmed: false,
                deleted: false,
                value:''
              });
            }}
          >
            Resetear, volver atrás
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }
}

export { UseState };
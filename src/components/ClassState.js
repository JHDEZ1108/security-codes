import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

class ClassState extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      error: false,
    }
  }

  render() {
    return (
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Eliminar ClassState</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Por favor, escribe el código de seguridad.
            </Typography>
          </Grid>
          {this.state.error && (
          <Grid item xs={12}>
          <Typography variant="caption" color="error">
            Error: Código incorrecto
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
            variant="contained" fullWidth 
            sx={{ height: '100%' }} 
            style={{ backgroundColor: '#AEC6CF', color: '#FFF' }}
            onClick={() => 
                      this.setState(prevState => ({ error: !prevState.error }))
                    }
          >
            Comprobar
          </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export { ClassState };

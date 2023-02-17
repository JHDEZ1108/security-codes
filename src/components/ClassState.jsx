import React from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';
import { Loading } from './Loading';

const SECURITY_CODE = 'contraseña';
class ClassState extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      value:'',
      error: false,
      loading: false,
    }
  }
  
  componentDidUpdate(){
    
    console.log('Actualización');
    
    if(!!this.state.loading){
      setTimeout(() => {
      if(this.state.loading) {
        console.log('Haciendo la validación');
        if(SECURITY_CODE === this.state.value){
          this.setState({loading: false, error: false});
        }else{
          this.setState({loading: false, error: true});
        }
        console.log('Terminando la validación');
      }
      }, 3000);
    }
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  

  render() {
    const { error, loading, value } = this.state;
    
    
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
          {(error && !loading) && (
          <Grid item xs={12}>
          <Typography variant="caption" color="error">
            Error: Código incorrecto
          </Typography>
          </Grid>
        )}
        {loading && (
          <Loading />
        )}
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              id="security-code"
              label="Código de seguridad"
              variant="outlined"
              value={ value }
              onChange={(event) => {
                this.setState({ value: event.target.value })
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button 
            variant="contained" fullWidth 
            sx={{ height: '100%' }} 
            style={{ backgroundColor: '#AEC6CF', color: '#FFF' }}
            onClick={ () => this.setState({ loading: true }) }
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

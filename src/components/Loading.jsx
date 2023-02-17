import React from 'react';
import { Typography, Grid} from '@mui/material';

class Loading extends React.Component {
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  

  render() {
    return (
      <Grid item xs={12}>
        <Typography variant="caption" color="info">
          Cargando...
        </Typography>
      </Grid>
    );
  }
}

export { Loading };

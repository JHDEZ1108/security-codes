import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Security Code
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <UseState />
          </Grid>
          <Divider sx={{ height: 32 }} />
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ClassState />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
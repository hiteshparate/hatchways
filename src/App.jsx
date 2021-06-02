import './App.css';
import '@fontsource/raleway';
import Student from './components/Student';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container>
      <Grid item sm={3}></Grid>
      <Grid item sm={6}>
        <Student></Student>
      </Grid>
      <Grid item sm={3}></Grid>
    </Grid>
  );
}

export default App;

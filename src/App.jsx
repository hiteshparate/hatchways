import './App.css';
import '@fontsource/raleway';
import Student from './components/Student';
import { Card, ThemeProvider } from '@material-ui/core';
import { theme } from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card className='card' id='studentCard'>
        <Student></Student>
      </Card>
    </ThemeProvider>
  );
}

export default App;

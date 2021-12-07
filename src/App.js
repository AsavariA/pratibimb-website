import './sass/index.css';
import './index.css';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: "'Readex Pro', sans-serif"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;

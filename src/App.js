import './sass/index.css';
import './index.css';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AboutUsHome from './components/AboutUsHome';

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
        <AboutUsHome />
      </div>
    </ThemeProvider>
  );
}

export default App;

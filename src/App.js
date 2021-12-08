import "./sass/index.css";
import "./index.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Hero from "./components/Hero";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutUsHome from "./components/AboutUsHome";
import IlluminatiHome from "./components/IlluminatiHome";
import Footer from "./components/Footer";
// import Spons from "./components/Sponsors";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Readex Pro', sans-serif",
  },
});

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <AboutUsHome />
      <IlluminatiHome />
    </div>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "sponsors", element: <Spons /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <App />
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default AppWrapper;

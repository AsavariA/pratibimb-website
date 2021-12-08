import "./sass/index.css";
import "./index.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroCommon from "./components/HeroCommon";
import AboutUsHome from "./components/AboutUsHome";
import Spons from "./components/Sponsors";

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
      <HeroCommon
        title="PRATIBIMB VJTI"
        subtitle="THE CULTURAL EXTRAVAGANZA OF VJTI, MUMBAI"
        imgClass="hero-home"
      />
      <AboutUsHome />
    </div>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sponsors", element: <Spons /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  );
};

export default AppWrapper;

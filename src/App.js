import "./sass/index.css";
import "./index.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutUsHome from "./components/AboutUsHome";
import IlluminatiHome from "./components/IlluminatiHome";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import HeroCommon from "./components/HeroCommon";
import EventsHome from "./components/EventsHome";

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
      <IlluminatiHome />
      <EventsHome />
    </div>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sponsors", element: <Sponsors /> },
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

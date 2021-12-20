import React, { useEffect } from "react";
import "./sass/index.css";
import "./index.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import BounceLoader from "react-spinners/BounceLoader";
import AboutUsHome from "./components/AboutUsHome";
import IlluminatiHome from "./components/IlluminatiHome";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import HeroCommon from "./components/HeroCommon";
import EventsHome from "./components/EventsHome";
import HallOfFame from "./components/HallOfFame";
import About from "./components/About";
import Illuminati from "./components/Illuminati";
import Events from "./components/Events";
import AOS from "aos";
import "aos/dist/aos.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Readex Pro', sans-serif",
  },
});

const Home = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <div className="load-div">
          <BounceLoader
            className="loader"
            color={"#1256A4"}
            loading={loading}
            size={60}
          />
        </div>
      ) : ( */}
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
      {/* )} */}
    </>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sponsors", element: <Sponsors /> },
    { path: "/halloffame", element: <HallOfFame /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/about", element: <About /> },
    { path: "/illuminati", element: <Illuminati /> },
    { path: "/events", element: <Events /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

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

import React, { useState } from "react";
import { Box, Link, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/prati-white.png";

const Navbar = () => {
  const navchange = useMediaQuery("(min-width:1300px)");

  const Navlinks = ({ fd }) => {
    return (
      <div className="nav-links">
        <Box display="flex" flexDirection={fd} justifyContent="flex-end">
          <Box p={3}>
            <Link underline="none" href="/" color="inherit">
              <p>Home</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="#" color="inherit">
              <p>About</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="#" color="inherit">
              <p>Events</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="#" color="inherit">
              <p>Illuminati</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/sponsors" color="inherit">
              <p>Sponsors</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="/halloffame" color="inherit">
              <p>Hall of Fame</p>
            </Link>
          </Box>
          <Box p={3}>
            <Link underline="none" href="#" color="inherit">
              <p>Gallery</p>
            </Link>
          </Box>
        </Box>
      </div>
    );
  };

  const [navopen, setNavopen] = useState(false);

  const toggleDrawer = (navopen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setNavopen(navopen);
  };

  return (
    <div className="nav-wrapper">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Link href="/" underline="none" color="inherit">
          <img src={logo} alt="logo" />
        </Link>
      </Box>

      {navchange ? (
        <>
          <Navlinks fd="row" />
          <div></div>
        </>
      ) : (
        <>
          <IconButton aria-label="close" onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer anchor="right" open={navopen} onClose={toggleDrawer(false)}>
            <IconButton aria-label="close" onClick={toggleDrawer(false)}>
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
            <Navlinks fd="column" />
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Navbar;

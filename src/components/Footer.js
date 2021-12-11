import React from "react";
import { Grid, Box, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <div className="footer-prati">
              <h3>PRATIBIMB VJTI</h3>
              <br />
              <Box
                className="social-icons"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                maxWidth="300px"
              >
                <Box>
                  <a href="https://www.instagram.com/pratibimbvjti/">
                    <FontAwesomeIcon
                      className="social-link"
                      icon={faInstagram}
                    />
                  </a>
                </Box>
                <Box>
                  <a href="https://twitter.com/pratibimbvjti">
                    <FontAwesomeIcon className="social-link" icon={faTwitter} />
                  </a>
                </Box>
                <Box>
                  <a href="https://www.facebook.com/pratibimbvjti/">
                    <FontAwesomeIcon
                      className="social-link"
                      icon={faFacebook}
                    />
                  </a>
                </Box>
                <Box>
                  <a href="https://www.linkedin.com/company/pratibimb-vjti/mycompany/">
                    <FontAwesomeIcon
                      className="social-link"
                      icon={faLinkedin}
                    />
                  </a>
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <br />
              <Link href="/" underline="none" color="inherit">
                <p>Home</p>
              </Link>
              <Link href="About" underline="none" color="inherit">
                <p>About</p>
              </Link>
              <Link href="/hallOfFame" underline="none" color="inherit" >
                <p>Hall of Fame</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <br />
              <Link href="/illuminati" underline="none" color="inherit">
                <p>Illuminati</p>
              </Link>
              <Link href="/Sponsors" underline="none" color="inherit">
                <p>Sponsors</p>
              </Link>
              <Link href="/Events" underline="none" color="inherit">
                <p>Events</p>
              </Link>
              <Link href="Gallery" underline="none" color="inherit">
                <p>Gallery</p>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

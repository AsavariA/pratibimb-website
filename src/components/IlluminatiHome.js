import React from "react";
import { Grid } from "@mui/material";
import NeonButton from "./NeonButton";

const IlluminatiHome = () => {
  return (
    <div className="illuminati-home">
      <div className="content">
        <h2>ILLUMINATI</h2>
        <div className="illuminati-home-embed">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/ng-6OGP3l5s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div>
                <p style={{ fontSize: "20px" }}>
                  Illuminati, The Battle of Branches
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
                <br />
                <div className="neon-ill">
                  <NeonButton>Delve Deeper!</NeonButton>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="gradient" />
    </div>
  );
};

export default IlluminatiHome;

import React from "react";
import { Grid } from "@mui/material";
import NeonButton from "./NeonButton";

const AboutUsHome = () => {
  return (
    <div className="aboutus-home">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6}>
          <div className="content">
            <h2>ABOUT US</h2>
            <p style={{ fontSize: "20px" }}>Pratibimb means Reflection</p>
            <br />
            <p>
              A reflection of pulsating energy, infectious enthusiasm,
              heartwarming fellowship, winning attitudes, crazy moments, and
              wonderful times!
            </p>
            <p>
              Pratibimb is made out of the innovative, fresh, and ever-buzzing
              minds of the students of VJTI, who not only invest time into the
              festival but also their hearts. Spanning three fun-filled days of
              the festival, there are contests and workshops, encompassing
              everything from art to music and dance.
            </p>
            <p>
              Pratibimb is the annual national-level cultural extravaganza of
              VJTI Mumbai, which musters a huge enthusiastic crowd every year.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="header-grid">
            <div id="b1" className="block"></div>
            <div id="b2" className="block"></div>
            <div id="b3" className="block"></div>
            <div id="b4" className="block"></div>
          </div>
        </Grid>
      </Grid>
      <div style={{ margin: "auto", marginTop: "3rem", width: "fit-content" }}>
        <NeonButton>Know More!</NeonButton>
      </div>
    </div>
  );
};

export default AboutUsHome;

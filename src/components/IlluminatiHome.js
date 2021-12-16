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
                  Illuminati is the inter branch competition at Pratibimb VJTI.
                  All the branches engage in a fierce battle against each other
                  via tasks alloted to them during the course of the year. These
                  tasks span over a variety of genres. Right from art and craft
                  to singing, dancing, drama, quizes and many many more. All the
                  students zealously participate in all these events to bag
                  points for their branch and the branch with the most points at
                  the end of the 4 day cultural festival wins the prestigious
                  Illuminati Cup. This years theme for Illuminati is 'Through a
                  Pixelated Glass.' To know more about it, join us on this crazy,
                  fun and exciting journey and explore this magical world which
                  is Illuminati.
                </p>
                <br />
                <div className="neon-ill">
                  <NeonButton href="/illuminati">Delve Deeper!</NeonButton>
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

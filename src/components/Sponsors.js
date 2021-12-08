import React from "react";
import HeroCommon from "./HeroCommon";
import SponsItem from "./SponsItem";
import sponsors from "../content/sponsors";
import sponsgrid1 from "../assets/sponsors/spons-grid.webp";
import sponsgrid2 from "../assets/sponsors/spons-grid-vert.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

const SponsList = () => {
  return (
    <Grid container spacing={2}>
      {sponsors.map((sp) => {
        return (
          <Grid item xs={6} sm={6} md={3}>
            <SponsItem
              name={sp.name}
              image={sp.logo}
              link={sp.link}
            ></SponsItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

const SponsContent = () => {
  const vert = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div className="past-spons">
        <h2>PAST SPONSORS</h2>
        <SponsList />
        <br />
        <br />
        {vert ? (
          <img src={sponsgrid1} alt="" width="100%" height="auto"></img>
        ) : (
          <img src={sponsgrid2} alt="" width="100%" height="auto"></img>
        )}
      </div>
    </>
  );
};

const Sponsors = () => {
  return (
    <div>
      <HeroCommon
        imgClass="hero-spons"
        title="PRATIBIMB'S SPONSORS"
        subtitle="THE SPONSORSHIP SECTOR - THE HEART OF PRATIBIMB"
      ></HeroCommon>
      <SponsContent />
    </div>
  );
};

export default Sponsors;

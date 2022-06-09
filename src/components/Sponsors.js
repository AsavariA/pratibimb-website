import React, { useState, useEffect } from "react";
import HeroCommon from "./HeroCommon";
import SponsItem from "./SponsItem";
import sponsgrid1 from "../assets/spons-grid.webp";
import sponsgrid2 from "../assets/spons-grid-vert.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

import fire from "../fire";
import { collection, getDocs } from "firebase/firestore/lite";

const SponsList = () => {
  const [info, setInfo] = useState([]);

  async function getEvents(db) {
    const events_col = collection(db, "Sponsors");
    const events_snapshot = await getDocs(events_col);
    const events_list = events_snapshot.docs.map((doc) => doc.data());
    console.log(events_list);
    setInfo(events_list);
  }

  useEffect(() => {
    getEvents(fire);
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {info.map((sp, a) => {
        return sp.logo !== "" ? (
          <Grid item data-aos="fade-up" xs={12} sm={6} md={6} lg={3} key={a}>
            <SponsItem
              name={sp.company}
              image={sp.logo}
              link={sp.website}
              partner={sp.partner}
            ></SponsItem>
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

const SponsContent = () => {
  const vert = useMediaQuery("(min-width:600px)");

  return (
    <>
      <div className="past-spons">
        <h2 data-aos="fade-up">Our Sponsors</h2>
        <SponsList />
      </div>
      <div className="past-spons">
        <h2 data-aos="fade-up">Past Sponsors</h2>
        {vert ? (
          <img
            src={sponsgrid1}
            alt=""
            width="100%"
            height="auto"
            loading="lazy"
            data-aos="fade-up"
          ></img>
        ) : (
          <img
            src={sponsgrid2}
            alt=""
            width="100%"
            height="auto"
            loading="lazy"
            data-aos="fade-up"
          ></img>
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

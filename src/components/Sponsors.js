import React from "react";
import HeroCommon from "./HeroCommon";
import SponsItem from "./SponsItem";
import sponsors from "../content/sponsors";
import sponsgrid from "../assets/sponsors/spons-grid.png";

const SponsList = () => {
  return sponsors.map((sp) => {
    return (
      <SponsItem name={sp.name} image={sp.logo} link={sp.link}></SponsItem>
    );
  });
};

const SponsContent = () => {
  return (
    // <SponsList />
    <div className="past-spons">
      <h2>PAST SPONSORS</h2>
      <img src={sponsgrid} alt="" width="100%" height="auto"></img>
    </div>
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

import React from "react";
import HeroCommon from "./HeroCommon";
import SponsContent from "./SponsorsContent";

const Spons = () => {
  return (
    <div>
      <HeroCommon
        imgClass="hero-spons"
        title="PRATIBIMB'S SPONSORS"
        subtitle="All the sponsors that Pratibimb has had over the years..."
      ></HeroCommon>
      <SponsContent />
    </div>
  );
};

export default Spons;

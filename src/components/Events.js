import React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";
// import { past_events } from "../content/past_events";
// import Carousel from "./Carousel";
// import { CarouselItem } from "./Carousel";
// import EventCard from "./EventCard";
import illuminati_events from "../content/illuminati_events";
import IlluminatiCard from "./IlluminatiCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const IlluminatiList = () => {
  const justify = useMediaQuery("(min-width:700px)");

  return (
    <div>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {illuminati_events.map((il, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <IlluminatiCard className="illuminati-card-main"
                name={il.name}
                poster={il.poster}
                results={il.results}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};//

const Events = () => {
  return (
    <div>
      <HeroCommon
        imgClass="hero-events"
        title="PRATIBIMB EVENTS"
        subtitle="AN ENTHRALLING RIDE FULL OF FUN AND EXPERIENCE"
      ></HeroCommon>
         <div style={{ background: "black" }}>
        <div className="illuminati-theme">
          <h2>PERFORMING ARTS</h2>
          <br />
          <p>
            The theme of this year's Illuminati is 'Through a Pixelated Glass.'
            This idea brings to life the plethora of games and cartoons we all
            enjoyed as kids. Be it the light-hearted cartoon 'Popeye the Sailor'
            or the soul-crushing anime 'Your Lie in April', these brilliant
            pieces of art are bound to take us on a magic carpet ride into the
            world of pixels and animation.
          </p>
          <p>
            Speaking of pixels, one never fails to see the tremendous evolution
            of games from the classics like 'Pacman' to the modern-day
            'Valorant'!
          </p>
          <p>
            It is amazing to live in an era where cartoons and games have not
            lost their charm and are still enjoyed by people all around the
            world. This year's topic for Illuminati aims to delve deeper into
            this fantasy world and step into the shoes of the thousands of
            characters it encompasses. So join us on this adventure as we step
            into yet another year of Pratibimb and Illuminati.
          </p>
          <br />
          <br />
       
        </div>
      </div>
      <div className="illuminati-events-wrapper">
        <div className="illuminati-events">
          <h2>Events of 2021</h2>
          <IlluminatiList />
        </div>
      </div>
    </div>
  );
};

export default Events;

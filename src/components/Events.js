import React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";
import past_events from "../content/past_events";
import current_events from "../content/current_events";
import EventCard from "./EventCard";
import useMediaQuery from "@mui/material/useMediaQuery";
// import IlluminatiCard from "./IlluminatiCard";

const EventListPast = () => {
  const justify = useMediaQuery("(min-width:700px)");
  return (
    <div>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {past_events.map((il, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <EventCard 
                name={il.name}
                image={il.image}
                desc={il.desc}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};//

const EventListCurrent = () => {
  const justify = useMediaQuery("(min-width:700px)");
  return (
    <div>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {current_events.map((il, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <EventCard 
                name={il.name}
                image={il.image}
                desc={il.desc}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};//

const Events = () => {
  const justify = useMediaQuery("(min-width:700px)");
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
      <div className="pratibimb-events-wrapper">
        <div className="pratibimb-events">
          <h2>Events of 2021</h2>
          <EventListCurrent/>
        </div>
      </div>
      
      <div className="pratibimb-events-wrapper">
        <div className="pratibimb-events">
          <h2>Events of 2019</h2>
          <EventListPast />
        </div>
      </div>
     
    </div>
  );
};
//
export default Events;

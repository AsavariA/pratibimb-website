import React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";
import past_events from "../content/past_events";
import current_events from "../content/current_events";
import CommonCard from "./CommonCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const EventListPast = () => {
  const justify1 = useMediaQuery("(min-width:1000px)");
  const justify2 = useMediaQuery("(min-width:600px)");

  return (
    <ImageList sx={{ width: '100%' }} cols={justify2 ? justify1 ? 6 : 4 : 2} gap={10}>
      {past_events.map((item) => (
        <ImageListItem key={item.name}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
          />
        </ImageListItem>
      )).reverse()}
    </ImageList>
  );
}

const EventListCurrent = () => {
  const justify = useMediaQuery("(min-width:700px)");
  return (
    <div style={{ margin: "6rem 0 2rem 0" }}>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {current_events.map((il, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <CommonCard
                name={il.name}
                image={il.image}
                desc={il.desc}
                type="pa"
              />
              <br />
              <br />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}; //

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

      <div className="illuminati-events-wrapper pa-background">
        <div className="illuminati-events">
          <h2 style={{color: 'black'}}>Events of 2021</h2>
          <EventListCurrent />
        </div>
      </div>

      <div className="illuminati-events-wrapper" style={{background: 'linear-gradient(180deg, rgba(35,31,42,1) 0%, rgba(145,130,172,1) 100%)'}}>
        <div className="illuminati-events">
          <h2>Past Events</h2>
          <EventListPast />
        </div>
      </div>
    </div>
  );
};
//
export default Events;

import React from "react";
import { past_events } from "../content/past_events";
import Carousel from "./Carousel";
import { CarouselItem } from "./Carousel";
import EventCard from "./EventCard";
import NeonButton from "./NeonButton";

const EventsHome = () => {
  return (
    <div className="events-home">
      <div className="content">
        <h2>EVENTS</h2>
        <div>
          {past_events ? (
            <Carousel>
              {past_events.slice(0, 12).map((e, key) => {
                return (
                  <CarouselItem key={key}>
                    <EventCard name={e.name} image={e.image} />
                  </CarouselItem>
                );
              })}
            </Carousel>
          ) : null}
        </div>
        <NeonButton href="/Events">See All Events</NeonButton>
        <br />
      </div>
    </div>
  );
};

export default EventsHome;

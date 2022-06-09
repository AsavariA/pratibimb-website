import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HeroCommon from "./HeroCommon";
import CommonCard from "./CommonCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import NeonButton from "./NeonButton";
import fire from "../fire";
import { collection, getDocs } from "firebase/firestore/lite";
import IlluminatiWinners from "./IlluminatiWinners";

const IlluminatiList = () => {
  const justify = useMediaQuery("(min-width:700px)");

  const [info, setInfo] = useState([]);

  async function getEvents(db) {
    const events_col = collection(db, "Illuminati_Events");
    const events_snapshot = await getDocs(events_col);
    const events_list = events_snapshot.docs.map((doc) => doc.data());
    setInfo(events_list);
  }

  useEffect(() => {
    getEvents(fire);
    console.log(info)
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ margin: "6rem 0 2rem 0" }}>
      <Grid container spacing={5} justifyContent={justify ? "start" : "center"}>
        {info.map((il, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={index}
              data-aos="fade-up"
            >
              <CommonCard
                name={il.name}
                image={il.poster}
                results={il.result}
                type="ill"
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

const Illuminati = () => {
  
  return (
    <div>
      <HeroCommon
        imgClass="hero-illuminati"
        title="ILLUMINATI"
        subtitle="WHERE BRANCHES ENGAGE IN A FIERCE BATTLE TO WIN THE GLORIOUS ILLUMINATI CUP"
      ></HeroCommon>
      <div style={{ background: "black" }}>
        <div className="illuminati-theme">
          <h2 data-aos="fade-up">THROUGH A PIXELATED GLASS</h2>
          <br />
          <p data-aos="fade-up">
            The theme of this year's Illuminati is 'Through a Pixelated Glass.'
            This idea brings to life the plethora of games and cartoons we all
            enjoyed as kids. Be it the light-hearted cartoon 'Popeye the Sailor'
            or the soul-crushing anime 'Your Lie in April', these brilliant
            pieces of art are bound to take us on a magic carpet ride into the
            world of pixels and animation.
          </p>
          <p data-aos="fade-up">
            Speaking of pixels, one never fails to see the tremendous evolution
            of games from the classics like 'Pacman' to the modern-day
            'Valorant'!
          </p>
          <p data-aos="fade-up">
            It is amazing to live in an era where cartoons and games have not
            lost their charm and are still enjoyed by people all around the
            world. This year's topic for Illuminati aims to delve deeper into
            this fantasy world and step into the shoes of the thousands of
            characters it encompasses. So join us on this adventure as we step
            into yet another year of Pratibimb and Illuminati.
          </p>
          <br />
          <br />
          <div
            data-aos="fade-up"
            style={{ width: "fit-content", margin: "auto" }}
          >
            <NeonButton href="https://www.youtube.com/watch?v=ng-6OGP3l5s">
              Watch The Theme Video
            </NeonButton>
          </div>
        </div>
      </div>
      <div className="illuminati-events-wrapper ill-background">
        <div className="illuminati-events">
          <h2 data-aos="fade-up">Events of 2021-2022</h2>
          <IlluminatiList />
        </div>
      </div>
      <div style={{ background: "black" }}>
        <div className="past-winners">
          <h2 data-aos="fade-up">Illuminati Winners 2022</h2>
          <IlluminatiWinners />
        </div>
      </div>
    </div>
  );
};
//
export default Illuminati;

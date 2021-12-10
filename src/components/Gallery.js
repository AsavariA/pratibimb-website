import * as React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../assets/gallery", false, /\.(png|jpg|JPG|jpe?g|svg)$/)
);

var imageNames = Object.keys(images);

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

imageNames = shuffle(imageNames);

export default function Gallery() {
  const [state, setState] = React.useState("-1");

  const opacityStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
    width: "99vw",
    zIndex: `${state}`,
    backgroundColor: "#000000bf",
  };

  return (
    <div className="gallery">
      <HeroCommon
        imgClass="hero-gallery"
        title="GALLERY"
        subtitle="ALL THE BEST MOMENTS, CAPTURED"
      ></HeroCommon>
      <div className="wrapper">
        <div></div>
        <Grid container spacing={2} style={{ maxWidth: "inherit" }}>
          <Grid
            item
            xs={9}
            sm={9}
            md={9}
            style={{ maxWidth: "inherit", margin: "auto" }}
          >
            <div id="gallery">
              {imageNames.map((i_name, key) => {
                return (
                  <div>
                    <img
                      className="card img-responsive"
                      src={images[i_name]["default"]}
                      alt="Pratibimb"
                      // onMouseOver={opaq}
                      // onMouseDown={normal}
                      onMouseEnter={() => setState("9")}
                      onMouseLeave={() => setState("-1")}
                      key={key}
                    ></img>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

import * as React from "react";
import HeroCommon from "./HeroCommon";
import { Grid } from "@mui/material";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
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

const opacity = document.getElementsByClassName("opacity")[0];

function opaq() {
  opacity.style.zIndex = "9";
}
function normal() {
  opacity.style.zIndex = "-1";
}

function GalleryItem() {
  return imageNames.map((i_name, key) => {
    return (
      <img
        className="card img-responsive"
        src={images[i_name]["default"]}
        alt="Pratibimb Photo"
        key={key}
      ></img>
    );
  });
}

function ImageList() {
  return (
    <Grid container spacing={2} style={{ maxWidth: "inherit" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        style={{ maxWidth: "inherit", margin: "auto" }}
      >
        <div id="gallery">
          <GalleryItem></GalleryItem>
        </div>
      </Grid>
    </Grid>
  );
}

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="opacity" style={{ zIndex: "-1" }}></div>
      <div className="wrapper">
        <HeroCommon
          imgClass="hero-gallery"
          title="GALLERY"
          subtitle="ALL THE BEST MOMENTS, CAPTURED"
        ></HeroCommon>
        <ImageList />
      </div>
    </div>
  );
}

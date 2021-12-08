import React from "react";
import { Grid } from "@mui/material";

const SponsItem = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <div class="spons-item">
        <div class="item clean">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img
              src={props.image}
              style={{ height: "auto", width: "100%" }}
              alt=".."
            />
            <div class="overlay">
              <span></span>
              <span>{props.name}</span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    </Grid>
  );
};

export default SponsItem;

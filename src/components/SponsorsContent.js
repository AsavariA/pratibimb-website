import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import SponsItem from "./SponsItem";
import sponsors from "../content/sponsors";

const SponsList = () => {
  return sponsors.map((sp) => {
    return (
      <SponsItem name={sp.name} image={sp.logo} link={sp.link}></SponsItem>
    );
  });
};

const SponsContent = () => {
  return (
    <div className="spons-content">
      <Grid container spacing={3}>
        <Grid>
          <div className="content">
            <h2>
              <Box sx={{ textAlign: "center", m: 1 }}>
                <Typography variant="h3" component="div" gutterBottom>
                  Sponsors are the heart of PRATIBIMB
                </Typography>
              </Box>
            </h2>
            <br />
            <p style={{ fontSize: "20px", textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad
              exercitationem, soluta saepe quam quidem minus facere, commodi
              ipsum accusamus cumque voluptate rerum itaque, iste tempore
              repudiandae perferendis autem corporis!Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. At ad exercitationem, soluta saepe
              quam quidem minus facere, commodi ipsum accusamus cumque voluptate
              rerum itaque, iste tempore repudiandae perferendis autem corporis!
            </p>
          </div>
        </Grid>
      </Grid>
      <Container maxWidth="md">
        <SponsList />
      </Container>
    </div>
  );
};

export default SponsContent;

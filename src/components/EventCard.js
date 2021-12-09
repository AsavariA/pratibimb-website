import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const EventCard = ({ name, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <h3 style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
            {name}
          </h3>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;

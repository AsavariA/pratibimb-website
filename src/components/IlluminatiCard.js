import * as React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";

// import { makeStyles } from "@mui/styles";

// const useCardStyles = makeStyles({
//   root: {
//     background: "#191919",
//     opacity:'0.92'
//   },
// });

// const IlluminatiCard = ({ name, poster, results }) => {
//   const classes = useCardStyles();
//   return (
//     <Card classes={{ root: classes.root }}>
//       <CardHeader subheader={name} />
//       <CardMedia
//         component="img"
//         height="350"
//         image={poster}
//         alt="Paella dish"
//       />
//       <CardContent>
//         <p>{`1st Place - ${results[0]}`}</p>
//         <p>{`2nd Place - ${results[1]}`}</p>
//         <p>{`3rd Place - ${results[2]}`}</p>
//       </CardContent>
//     </Card>
//   );
// };

const IlluminatiCard = ({name, poster, results}) => {
  return(
    <div className="card-illuminati">
      <div className="imgbox">
        <img src={poster} alt='' loading="lazy"/>
      </div>
      <div className="content">
        <p>{`1st Place - ${results[0]}`}</p>
        <p>{`2nd Place - ${results[1]}`}</p>
        <p>{`3rd Place - ${results[2]}`}</p>
        <h2>{name}</h2>
      </div>
  </div>
  );
};

export default IlluminatiCard;

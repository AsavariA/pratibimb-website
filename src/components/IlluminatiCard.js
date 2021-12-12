import * as React from "react";

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

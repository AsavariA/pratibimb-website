import React from "react";

const SponsItem = (props) => {
  return (
    <div class="spons-item">
      <div class="item clean">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img
            src={props.image}
            style={{ height: "160px", width: "300px", objectFit: 'contain' }}
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
  );
};

export default SponsItem;

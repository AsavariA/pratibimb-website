import React from "react";
import { Link } from "@mui/material";

const SponsItem = (props) => {
  return (
    <Link href={props.link} underline="none">
      <div className="spons-item">
        <div
          className="item clean"
          style={{
            height: "160px",
            width: "300px",
            borderRadius: '10px',
            padding: '15px 10px',
          }}
        >
          <img
            src={props.image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            alt=".."
          />
          <div className="overlay">
            <span></span>
            <span>{props.name}</span>
          </div>
          {/* </a> */}
        </div>
      </div>
      <i><p style={{textAlign: "center", fontSize: "14px"}}>{props.partner}</p></i>
    </Link>
  );
};

export default SponsItem;

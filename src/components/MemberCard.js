import React from "react";

const MemberCard = ({ color, img, name, post }) => {
  return (
    <div className={`member-card ${color}`}>
      <img src={img} alt="" loading='lazy' />
      <b>{name}</b>
      <p>{post}</p>
    </div>
  );
};

export default MemberCard;

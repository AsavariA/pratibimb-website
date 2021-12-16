import React from "react";
import Team1 from "./Team1";
import Team2 from "./Team2";
import Team3 from "./Team3";
import WebDevTeam from "./WebDevTeam";

const Team = () => {
  return (
    <div>
      <div className="team">
        <h2>THE TORCHBEARERS</h2>
        <div className="team-sec1">
          <h3>The Big Three</h3>
          <Team1 />
        </div>
        <br />
        <br />
        <div className="team-sec1">
          <h3>The Pillars</h3>
          <Team2 />
        </div>
        <br />
        <br />
        <div className="team-sec1">
          <h3>The Right Brain</h3>
          <Team3 />
        </div>
      </div>
      <div className="web-dev">
        <div className="team-sec1">
          <h3>The Web Dev Team</h3>
          <br />
          <WebDevTeam />
        </div>
      </div>
    </div>
  );
};

export default Team;

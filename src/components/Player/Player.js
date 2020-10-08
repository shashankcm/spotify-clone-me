import React from "react";

import Sidebar from "../Siderbar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import "./Player.css";

const Player = ({ spotifyApi }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotifyApi={spotifyApi} />
      </div>

      <Footer spotifyApi={spotifyApi} />
    </div>
  );
};

export default Player;

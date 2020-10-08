import React from "react";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Header from "./Header/Header";
import SongRow from "./SongRow/SongRow";

import { useStoreProviderValue } from "../../store/DataLayer";
import actions from "../../store/types";

import "./Body.css";

function Body({ spotifyApi }) {
  const [{ discover_weekly }, dispatch] = useStoreProviderValue();

  const playPlaylist = (id) => {
    spotifyApi
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotifyApi.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: actions.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: actions.SET_PLAYING,
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotifyApi
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotifyApi.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: actions.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: actions.SET_PLAYING,
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

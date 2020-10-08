import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getResponseToken } from "./container/spotify";

import { useStoreProviderValue } from "./store/DataLayer";
import actions from "./store/types";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStoreProviderValue();

  useEffect(() => {
    const responseToken = getResponseToken();
    window.location.hash = "";

    if (responseToken) {
      const { access_token } = responseToken;

      spotifyApi.setAccessToken(access_token);

      dispatch({
        type: actions.SET_TOKEN,
        token: access_token,
      });

      spotifyApi.getMe().then((user) =>
        dispatch({
          type: actions.SET_USER,
          user,
        })
      );

      spotifyApi.getUserPlaylists().then((playlist) =>
        dispatch({
          type: actions.SET_PLAYLIST,
          playlist,
        })
      );

      spotifyApi.getPlaylist("37i9dQZEVXcPY0wyDMXEC1").then((response) =>
        dispatch({
          type: actions.SET_DISOVER_WEEKLY,
          discover_weekly: response,
        })
      );

      spotifyApi.getMyTopArtists().then((response) =>
        dispatch({
          type: actions.SET_TOP_ARTISTS,
          top_artists: response,
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token && <Player spotifyApi={spotifyApi} />}
      {!token && <Login />}
    </div>
  );
}

export default App;

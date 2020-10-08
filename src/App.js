import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getResponseToken } from "./container/spotify";

import { useStoreProviderValue } from "./store/DataLayer";
import actions from "./store/types";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStoreProviderValue();

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

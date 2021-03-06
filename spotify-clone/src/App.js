import React, { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player/Player';
import { useDataLayerValue } from './Datalayer';

// creating an instance of spotify inside of the app.
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);

  // to pull info from datalayer, put inside of the object {}
  // need dispatch to change and update datalayer
  const [{ user, token }, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    // to hide access token from url
    window.location.hash= "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      // setToken(_token);
      // giving access token to spotify api
      spotify.setAccessToken(_token);

      // getting user's info
      spotify.getMe().then((user) => {
        // console.log(user);

        dispatch({
          type: "SET_USER",
          user:user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => {
        dispatch({
          type: "SET_DISCOVER_SEEKLY",
          discover_weekly: response,
        })
      })
    }

    // if you want this to run only once, leave [] as blank. if you put a variable, it will run whenever that variable changes ex [name]
  }, []);


  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);


  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    // to hide access token from url
    window.location.hash= "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log('I have a token: ', _token)

    // if you want this to run only once, leave [] as blank. if you put a variable, it will run whenever that variable changes ex [name]
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I'm logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;

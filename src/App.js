import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { getResponseToken } from "./container/spotify";

function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    const responseToken = getResponseToken();
    window.location.hash = "";
    if (responseToken) {
      setToken(responseToken.access_token);
    }
  }, []);

  return (
    <div className="app">{token ? <h1>I'm Logged In</h1> : <Login />}</div>
  );
}

export default App;

import React from "react";
import Button from "@material-ui/core/Button";
var scopes = ["user-read-email", "user-read-private", "playlist-modify-public"];

function Login() {
  return (
    <header className="App-header Landing Cover">
      <div className="app-description">
        <h1 className="app-title">Soundtrackify</h1>
        <p className="tagline">every moment deserves the perfect soundtrack </p>
      </div>
      <div className="login-menu">
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&scope=${scopes}`}
        >
          <Button variant="contained" className="login-button" size="large">
            Create Yours With Spotify
          </Button>
        </a>
      </div>
    </header>
  );
}

export default Login;

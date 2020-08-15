import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//material ui things that will be moved later
import SearchBar from "material-ui-search-bar";

// ____________________________________________

import Spotify from "spotify-web-api-js";
let spotifyApi = new Spotify();

//Put this into a util file
/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function Intro() {
  let tokens = getHashParams();
  console.log(tokens);
  spotifyApi.setAccessToken(tokens.access_token);
  console.log(spotifyApi.getAccessToken());

  return (
    <div className="Search">
      Hello, you logged in!
      <h2> Search For A Fucking Song</h2>
      <SearchBar 
      onChange={() => console.log('onChange')}
      onRequestSearch={(text) => {
        console.log(text);
        console.log(spotifyApi.searchTracks(text))
      }}
      style={{
        margin: '0 auto',
        maxWidth: 1000
      }}/>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/callback" component={Intro} />
            {/* <Route path="/callback">
              <Redirect to="/home" />
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

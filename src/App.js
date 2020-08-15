import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//imports that will be moved later

//import { debounce } from "lodash";

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


function Search() {
  let tokens = getHashParams();
  //console.log(tokens);
  spotifyApi.setAccessToken(tokens.access_token);
  //console.log(spotifyApi.getAccessToken());

  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([
    {
      name: "American Girl",
      artist: ["Tom Petty and the Heartbreakers"],
      songID: "7MRyJPksH3G2cXHN8UKYzP",
    },
    {
      name: "American Kids",
      artist: ["Kenny Chesney"],
      songID: "1dgWTMoHwTUnQhOQ8SR5fV",
    },
    {
      name: "American Boy",
      artist: ["Estelle", "Kanye West"],
      songID: "22UDw8rSfLbUsaAGTXQ4Z8",
    },
  ]);

  let searchSongs = (search) => {
    const songs = [];
    if (search) {
      spotifyApi.searchTracks(search, { limit: 10 }).then((data) => {
        data.tracks.items.map((track) => {
          return songs.push({
            name: track.name,
            artist: track.artists.map((a) => a.name),
            id: track.id,
          });
        });
      });
    }

    return songs;
  };

  useEffect(() => {
    setTracks(searchSongs(search));
    
  }, [search]);

  
  return (
    <div className="Search">
      Hello, you logged in!
      <h2> Search For A Fucking Song</h2>
      <input
        className="search-bar"
        type="text"
        placeholder="Define Your Moment"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      <SearchResults results={tracks} />
    </div>
  );
}

let SearchResults = ({ results }) => {
  //console.log(results);
  return (
    <div>
      <h2>Search Results</h2>
      {results.map((result, i) => (
        <div key={i}>
          <li>
            {result.name} by {result.artist.join(", ")}
          </li>
        </div>
      ))}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/callback" component={Search} />
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

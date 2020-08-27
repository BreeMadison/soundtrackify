import React from "react";
import "./Main.css";
import SearchBar from "./SearchBar";

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
  
  let token = getHashParams().access_token;
  

const Main = () => {
  return (
    <div className="main-app">
      <h1 className="title">Build Your Soundtrack</h1>
      <h3>Choose 5 Songs And We Will Do The Rest</h3>
      <SearchBar token={token} />
    </div>
  );
};

export default Main;

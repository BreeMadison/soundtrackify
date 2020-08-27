import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/callback" component={Main} />
            {/* <Route path="/callback">
              <Redirect to="/home" />
            </Route> */}
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

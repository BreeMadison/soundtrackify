import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Logged in!</p>
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
            <Route exact path="/home" component={Home} />
            <Route path="/callback">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

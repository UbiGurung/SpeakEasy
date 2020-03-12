import React, { Component } from "react";
import AccountHome from "./containers/AccountHome";
import LandingPage from "./containers/LandingPage";
import RoomView from "./containers/RoomView";
import Login from "./containers/Login";
import Register from "./containers/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/account">
            <AccountHome />
          </Route>
          <Route path="/activeRoom/:id">
            <RoomView />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

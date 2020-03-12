import React, { Component } from "react";
import Home from "./containers/Home";
import RoomView from "./containers/RoomView";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/activeRoom">
            <RoomView />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

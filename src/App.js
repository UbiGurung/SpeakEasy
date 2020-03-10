import React, {Component} from 'react';
import Home from './components/Home/index';
import List from './components/List';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todo">
            <List />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
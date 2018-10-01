import React, { Component } from 'react';
import Home from './Home';
import { Route, BrowserRouter, Switch, NavLink} from 'react-router-dom';
import History from './History';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavLink exact to="/"> Home </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

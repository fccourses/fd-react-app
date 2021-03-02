import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import HomePage from './pages/Home';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} />
          {/* <Route path='/sign-up' component={} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

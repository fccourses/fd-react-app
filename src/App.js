import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignIn from './pages/SignIn';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={SignIn} />
          {/* <Route path='/sign-up' component={} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

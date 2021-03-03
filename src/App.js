import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

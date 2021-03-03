import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { UserContext, ThemeContext } from './contexts';

const App = props => {
  const themeState = useState('white');

  const userState = useState({
    id: 1,
    name: 'John Smith',
  });

  return (
    <ThemeContext.Provider value={themeState}>
      <UserContext.Provider value={userState}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'pages/Home';
import SignUpPage from 'pages/SignUp';
import { ThemeContext } from 'contexts';
import { THEMES } from 'constants.js';

const App = props => {
  const themeState = useState(THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={themeState}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/sign-up' component={SignUpPage} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'pages/Home';
import SignUpPage from 'pages/SignUp';
import ChatPage from 'pages/Chat';
import { ThemeContext } from 'contexts';
import { THEMES } from 'constants.js';
import NavMenu from 'components/NavMenu';
import ToDoPage from 'pages/ToDo';

const App = props => {
  const themeState = useState(THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={themeState}>
      <BrowserRouter>
        
        <NavMenu />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/sign-up' component={SignUpPage} />
          <Route path='/chat' component={ChatPage} />
          <Route path='/todo' component={ToDoPage} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;

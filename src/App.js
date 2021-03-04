import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import { ThemeContext } from 'contexts';
import { THEMES } from 'constants.js';

const App = props => {
  const themeState = useState(THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={themeState}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;

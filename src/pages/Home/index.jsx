import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts';
import { THEMES } from '../../constants';

const stylesMap = {
  [THEMES.LIGHT]: {
    backgroundColor: 'white',
    color: 'black',
    height: '100vh',
  },
  [THEMES.DARK]: {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
  },
};

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);

  const [theme, setTheme] = useContext(ThemeContext);

  const handleSwitch = () => setIsVisible(!isVisible);
  const themeSwitcher = () =>
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);

  return (
    <div style={stylesMap[theme]}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, error!
      </p>
      <button onClick={handleSwitch}>Switch Visibility</button>
      <button onClick={themeSwitcher}>Switch Theme</button>
    </div>
  );
};

export default Home;

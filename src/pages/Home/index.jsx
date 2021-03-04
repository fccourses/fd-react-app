import React, { useState, useContext, useEffect, useCallback } from 'react';
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
  const [value, setValue] = useState(1);
  const [theme, setTheme] = useContext(ThemeContext);

  // const logValue = () => console.log(value);

  const logValue = useCallback(() => {
    console.log(value);
  }, [value]);

  const handleChange = useCallback(
    ({ target: { value } }) => setValue(Number(value)),
    []
  );

  const themeSwitcher = useCallback(
    () =>
      setTheme(theme => (theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)),
    []
  );

  return (
    <div style={stylesMap[theme]}>
      <h1>{value}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, error!
      </p>
      <input type='number' value={value} onChange={handleChange} />
      <button onClick={logValue}>Log value</button>
      <br />
      <button onClick={themeSwitcher}>Switch Theme</button>
    </div>
  );
};

export default Home;

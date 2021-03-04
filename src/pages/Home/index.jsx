import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { ThemeContext } from '../../contexts';
import { THEMES } from '../../constants';
import Loader from 'components/FuncLoader';

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

function computeValue (num) {
  let i = 0;

  for (let j = 0; j < 400000000; j++) {
    i += j;
  }

  return num ** 3;
}

const Home = props => {
  const [value, setValue] = useState(1);
  const [theme, setTheme] = useContext(ThemeContext);

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

  const layoutValue = useMemo(() => computeValue(value), [value]);

  return (
    <div style={stylesMap[theme]}>
      <h1>{layoutValue}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, error!
      </p>
      <input type='number' value={value} onChange={handleChange} />
      <button onClick={logValue}>Log value</button>
      <br />
      <button onClick={themeSwitcher}>Switch Theme</button>
      <br />
      <Loader />
    </div>
  );
};

export default Home;

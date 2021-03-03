import React, { useState, useContext } from 'react';
import { UserContext, ThemeContext } from '../../contexts';
import cx from 'classnames';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);
  const [user, setUser] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  console.log(user);

  const classNames = cx({
    [styles.lightTheme]: ...,
    [styles.darkTheme]: ...,

  });

  /* >> ThemeSwitcher << */

  return (
    <div className={classNames}>
      <h1>Home page</h1>
      <p>
        <span>ID: {user.id}</span>
        <br />
        <span>Name: {user.name}</span>
      </p>
      <button onClick={() => setIsVisible(!isVisible)}>Switch</button>
    </div>
  );
};

export default Home;

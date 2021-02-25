import React, { Component } from 'react';
import cx from 'classnames';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import constants from '../../constants';
import styles from './Header.module.scss';
import { withUser, withTheme } from '../HOCs';

class Header extends Component {
  render () {
    const { user, theme, setTheme } = this.props;
    console.log(this.props);
    console.log(user);
    const classNames = cx(styles.container, {
      [styles.lightTheme]: theme === constants.LIGHT_THEME,
      [styles.darkTheme]: theme === constants.DARK_THEME,
    });

    return (
      <div className={classNames}>
        <div>
          <div
            onClick={() => {
              const nextTheme =
                theme === constants.LIGHT_THEME
                  ? constants.DARK_THEME
                  : constants.LIGHT_THEME;

              setTheme(nextTheme);
            }}
          >
            {theme === constants.LIGHT_THEME ? (
              <WbSunnyIcon />
            ) : (
              <Brightness3Icon />
            )}
          </div>

          {user?.firstName}
        </div>
        <img src={user?.imageSrc} alt='jason' />
      </div>
    );
  }
}

export default withUser(withTheme(Header));

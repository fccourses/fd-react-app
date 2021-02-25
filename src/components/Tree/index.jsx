import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import { UserContext, ThemeContext } from '../../contexts';
import constants from '../../constants';

const Tree = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const classNames = cx(styles.container, {
          [styles.lightTheme]: theme === constants.LIGHT_THEME,
          [styles.darkTheme]: theme === constants.DARK_THEME,
        });
        return (
          <div className={classNames}>
            <div>TREE</div>
            <Parent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Tree;

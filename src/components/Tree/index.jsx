import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import { UserContext, ThemeContext } from '../../contexts';
import constants from '../../constants';
import { withTheme } from '../HOCs';

const Tree = props => {
  const { theme } = props;

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
};

export default withTheme(Tree);

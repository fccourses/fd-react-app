import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import { UserContext, ThemeContext } from '../../contexts';
import constants from '../../constants';

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

/* const TreeWithTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <Tree theme={theme} />}
    </ThemeContext.Consumer>
  );
};
 */
const withTheme = Component => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <Component theme={theme} />}
    </ThemeContext.Consumer>
  );
};

const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;

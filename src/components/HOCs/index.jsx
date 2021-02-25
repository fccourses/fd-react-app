import { ThemeContext } from '../../contexts';

const withTheme = Component => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <Component theme={theme} />}
    </ThemeContext.Consumer>
  );
};

export default withTheme;

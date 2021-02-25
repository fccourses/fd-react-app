import React, { Component } from 'react';
import { ThemeContext, UserContext } from '../../contexts';

export function withTheme (WrappedComponent) {
  return class WrappedComponentWithTheme extends Component {
    render () {
      return (
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <WrappedComponent
              theme={theme}
              setTheme={setTheme}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  };
}

export function withUser (WrappedComponent) {
  return class extends Component {
    render () {
      return (
        <UserContext.Consumer>
          {user => <WrappedComponent user={user} {...this.props} />}
        </UserContext.Consumer>
      );
    }
  };
}

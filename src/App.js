import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Tree from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import constants from './constants';

/* 
  1. Создание контекста - createContext()
  2. Предоставление даных контекста - Provider
  3. Чтение данных из контекста - Consumer
*/

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      theme: constants.LIGHT_THEME,
      user: {
        id: 10,
        firstName: 'John',
        lastName: 'Doe',
        imageSrc:
          'https://i.pinimg.com/originals/5e/13/b3/5e13b316f3437e78886c831cd3964cf5.jpg',
      },
    };
  }

  setTheme = theme => this.setState({ theme });

  render () {
    const { user, theme } = this.state;

    const themeContextValue = {
      theme,
      setTheme: this.setTheme,
    };

    return (
      <ThemeContext.Provider value={themeContextValue}>
        <UserContext.Provider value={user}>
          <div>
            <Header />
            <Tree />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
export default App;

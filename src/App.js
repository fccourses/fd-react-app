import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Tree from './components/Tree';
import { UserContext } from './contexts';

/* 
  1. Создание контекста - createContext()
  2. Предоставление даных контекста - Provider
  3. Чтение данных из контекста - Consumer
*/

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 10,
        firstName: 'John',
        lastName: 'Doe',
        imageSrc:
          'https://i.pinimg.com/originals/5e/13/b3/5e13b316f3437e78886c831cd3964cf5.jpg',
      },
    };
  }

  render () {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        <div>
          APP
          <Tree />
        </div>
      </UserContext.Provider>
    );
  }
}
export default App;

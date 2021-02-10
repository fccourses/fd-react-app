import React, { Component } from 'react';
import './App.css';
import Aloha from './components/Greeting';

class App extends Component {
  render() {
    const user = {
      firstName: 'John',
      url: 'http://localhost:3000/favicon.ico',
    };
    return (
      <>
        <Aloha name={user.firstName} photo={user.url} isGreeting />
        <Aloha name='Eugene' photo={user.url} />
        <Aloha name='Masha' photo={user.url} isGreeting />
      </>
    );
  }
}

export default App;

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
      <div>
        <Aloha name={user.firstName} photo={user.url} isGreeting={true} />
        <Aloha name='Eugene' photo={user.url} isGreeting={false} />
        <Aloha name='Masha' photo={user.url} isGreeting={true} />
      </div>
    );
  }
}

export default App;

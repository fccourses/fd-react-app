import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    const user = {
      firstName: 'John',
      url: 'http://localhost:3000/favicon.ico',
    };
    return (
      <div>
        <Greeting name={user.firstName} photo={user.url} />
        <Greeting name='Eugene' photo={user.url} />
        <Greeting name='Masha' photo={user.url} />
      </div>
    );
  }
}

export default App;

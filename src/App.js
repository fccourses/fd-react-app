import React, { Component } from 'react';
import './App.css';
import Aloha from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      url: 'http://localhost:3000/favicon.ico',
    };
  }

  render() {
    const { firstName, lastName, url } = this.state;
    
    return (
      <>
        <Aloha name={firstName} photo={url} />
        <Aloha name='Eugene' photo={url} />
        <Aloha name='Masha' photo={url} />
      </>
    );
  }
}

export default App;

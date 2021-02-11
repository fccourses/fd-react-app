import React, { Component } from 'react';
import './App.css';
import AlohaDashboard from './components/AlohaDashboard';
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
        <Aloha name='test' />
        <AlohaDashboard firstName={firstName} lastName={lastName} url={url} />
      </>
    );
  }
}

export default App;

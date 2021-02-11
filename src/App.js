import React, { Component } from 'react';
import './App.css';
import AlohaDashboard from './components/AlohaDashboard';
import Aloha from './components/Aloha';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          id: 2,
          firstName: 'Test',
          lastName: 'Doe',
        },
        {
          id: 3,
          firstName: 'Masha',
          lastName: 'Doe',
        },
        {
          id: 4,
          firstName: 'Sasha',
          lastName: 'Doe',
        },
        {
          id: 5,
          firstName: 'Dasha',
          lastName: 'Doe',
        },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <AlohaDashboard users={users} />
      </>
    );
  }
}

export default App;

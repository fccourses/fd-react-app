import React, { Component } from 'react';
import './App.css';
import AlohaDashboard from './components/AlohaDashboard';

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
      isDirectOrder: true,
    };
  }

  sortUsers = () => {
    const { users, isDirectOrder } = this.state;
    // const usersCopy = [...users];
    const usersCopy = JSON.parse(JSON.stringify(users));
    this.setState({
      isDirectOrder: !isDirectOrder,
      users: usersCopy.sort((a, b) => {
        if (isDirectOrder) {
          return b.id - a.id;
        }
        return a.id - b.id;
      }),
    });
  };

  render() {
    const { users, isDirectOrder } = this.state;

    return (
      <>
        Порядок сортировки по id: {isDirectOrder?'Прямой': 'Реверс'}
        <AlohaDashboard users={users} />
        <button onClick={this.sortUsers}>SORT</button>
      </>
    );
  }
}

export default App;

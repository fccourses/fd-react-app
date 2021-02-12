import React, { Component } from 'react';
import UserCard from './UserCard';

const userDB = [
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
];
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  mapUsers = (user) => {
    return (
    <UserCard 
      key={user.id} 
      user={user} 
      isSelected={user.isSelected} 
    />
    );
  };
  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}
export default UserList;

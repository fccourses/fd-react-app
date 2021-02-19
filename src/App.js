import React from 'react';
import SignInForm from './components/SignInForm';
import AlohaDashboard from './components/AlohaDashboard';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import Aloha from './components/Aloha';
import UserCard from './components/UserList/UserCard';
import UserList from './components/UserList';

function App (props) {
  const users = [
    {
      id: 1,
      firstName: 'tete',
      lastName: 'Doe'
    },
    {
      id: 2,
      firstName: 'tete',
      lastName: 'Doe'
    }
  ];

  return <UserList users={users} />;
}

export default App;

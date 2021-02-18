import React from 'react';
import SignInForm from './components/SignInForm';
import AlohaDashboard from './components/AlohaDashboard';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import Aloha from './components/Aloha';
import UserCard from './components/UserList/UserCard';

function App (props) {
  const user = {
    id: 1,
    firstName: 'tete',
    lastName: 'Doe',
  };

  return <UserCard user={user} />;
}

export default App;

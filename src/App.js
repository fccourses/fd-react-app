import React from 'react';
// import ImageWrapper from './components/ImageWrapper';
// import NamedList from './components/NamedList';
// import SignInForm from './components/SignInForm';
// import AlohaDashboard from './components/AlohaDashboard';
// import Aloha from './components/Aloha';
// import UserList from './components/UserList';
// import UserCard from './components/UserList/UserCard';
// import Counter from './components/Counter';
// import Calendar from './components/Calendar';
import UsersLoader from './components/UsersLoader';

const App = props => {
  return (
    <>
      <button
        onClick={() => {
          window.close();
        }}
      >
        Terminate application
      </button>
      <button
        onClick={() => {
          window.open('https://wikipedia.org');
        }}
      >
        Open application
      </button>
      <br />
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      <button
        onClick={() => {
          window.location.assign('https://wikipedia.org');
        }}
      >
        Assign new page
      </button>
      <button
        onClick={() => {
          window.location.replace('https://wikipedia.org');
        }}
      >
        Replace page
      </button>
      <UsersLoader />
    </>
  );
};

export default App;

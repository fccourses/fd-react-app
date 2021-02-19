import React from 'react';
import ImageWrapper from './components/ImageWrapper';
import NamedList from './components/NamedList';
// import SignInForm from './components/SignInForm';
// import AlohaDashboard from './components/AlohaDashboard';
// import Aloha from './components/Aloha';
// import UserList from './components/UserList';
// import UserCard from './components/UserList/UserCard';
// import Counter from './components/Counter';
// import Calendar from './components/Calendar';

const App = props => {
  return (
    <>
      <ImageWrapper
        width='500px'
        height='500px'
        style={{border: '2px solid red'}}
        onClick={alert}
        title='test'
      >
        <img
          src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
          alt=''
        />
      </ImageWrapper>
    </>
  );
};

export default App;

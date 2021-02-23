import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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
import WindowSizes from './components/WindowSizes';

const App = props => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/info'>Info</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/users-loader'>User Loader</Link>
          </li>
          <li>
            <Link to='/window'>Window Sizes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/contacts'>
          <Contacts />
        </Route>

        <Route path='/users-loader'>
          <UsersLoader />
        </Route>

        <Route path={['/about', '/info']} component={About} />

        <Route path='/window'>
          <WindowSizes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const Home = () => {
  return <div>HOME PAGE</div>;
};

const Contacts = () => {
  return <div>Contacts PAGE</div>;
};

const About = props => {
  console.log(props);
  return <div>About PAGE</div>;
};

export default App;

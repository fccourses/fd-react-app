import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CounterPage from './pages/Counter';
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
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/users-loader' component={UsersLoader} />
        <Route path='/about' component={About} />
        <Route path='/window' component={WindowSizes} />
        <Route path='/count' component={CounterPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const NotFound = () => <div>404: page not found</div>;
const Home = () => <div>HOME PAGE</div>;
const Contacts = () => <div>Contacts PAGE</div>;
const About = props => <div>About PAGE</div>;

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignUpForm from './components/forms/SignUpForm';

class App extends Component {
  render () {
    return (
      <>
        <SignUpForm />
      </>
    );
  }
}
export default App;

import React, { Component } from 'react';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type='email' name='email' />
        <input type='password' name='password' />
        <input type='submit' />
      </form>
    );
  }
}

export default SignInForm;

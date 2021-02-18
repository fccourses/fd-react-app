import React, { Component } from 'react';
import styles from './SignInForm.module.scss';
import cx from 'classnames';

const initialState = {
  email: '',
  password: '',
  isemailValid: true,
  ispasswordValid: true,
};

class SignInForm extends Component {
  constructor (props) {
    super(props);
    this.state = { ...initialState };
  }

  handleChange = ({ target: { value, name } }) => {
    if (value.includes(' ')) {
      this.setState({
        [`is${name}Valid`]: false,
      });
    } else {
      this.setState({
        [`is${name}Valid`]: true,
      });
    }
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ ...initialState });
  };

  render () {
    const { email, password, isPasswordValid, isemailValid } = this.state;

    const emailClassNames = cx(styles.input, {
      [styles.invalidInput]: !isemailValid,
    });
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input /* Управляемый компонент */
          onChange={this.handleChange}
          value={email}
          className={emailClassNames}
          placeholder='Email'
          type='email'
          name='email'
        />
        <input /* Управляемый компонент */
          onChange={this.handleChange}
          value={password}
          className={styles.input}
          placeholder='Password'
          type='password'
          name='password'
        />
        <input
          className={styles.input}
          type='submit' /* НЕуправляемый компонент */
        />
      </form>
    );
  }
}

export default SignInForm;

/* const myClassNames = styleObject => {
  return Object.entries(styleObject)
    .filter(([className, isAdd]) => isAdd)
    .map(([className, isAdd]) => className)
    .join(' ');
}; */

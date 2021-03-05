import React, { useState, useReducer } from 'react';
import reducer from './reducer';

const SignUpForm = props => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    tel: '',
    birthday: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const action = {
      name,
      value,
    };

    dispatch(action);
  };

  return (
    <form>
      <input
        onChange={handleChange}
        value={state.firstName}
        type='text'
        name='firstName'
      />
      <input
        onChange={handleChange}
        value={state.lastName}
        type='text'
        name='lastName'
      />
      <input
        onChange={handleChange}
        value={state.email}
        type='email'
        name='email'
      />
      <input
        onChange={handleChange}
        value={state.password}
        type='password'
        name='password'
      />
      <input onChange={handleChange} value={state.tel} type='text' name='tel' />
      <input
        onChange={handleChange}
        value={state.birthday}
        type='date'
        name='birthday'
      />
    </form>
  );
};

export default SignUpForm;

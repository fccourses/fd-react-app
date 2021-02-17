import React from 'react';
import SignInForm from './components/SignInForm';
import AlohaDashboard from './components/AlohaDashboard'

function App(props) {
  const step = 10;
  return (
    <>
      <Counter step={step} />
    </>
  );
}

export default App;

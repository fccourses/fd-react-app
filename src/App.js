import React, { Component, useState } from 'react';
import StopWatch from './components/StopWatch';
import Aloha from './components/Aloha';

function App(props) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        SHOW\HIDE STOPWATCH
      </button>
      <Aloha name='Aloha' />
      {isVisible ? <StopWatch /> : null}
    </>
  );
}

export default App;

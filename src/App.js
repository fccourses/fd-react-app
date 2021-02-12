import React, { Component, useState } from 'react';
import './App.css';
import StopWatch from './components/StopWatch';

function App(props) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible ? <StopWatch /> : null}
      <button onClick={()=>{setIsVisible(!isVisible)}}>SHOW\HIDE STOPWATCH</button>
    </>
  );
}

export default App;

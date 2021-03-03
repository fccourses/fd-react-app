import React, { useState } from 'react';
import FuncStopWatch from './../../components/FuncStopWatch';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Switch</button>
      {isVisible && <FuncStopWatch />}
    </div>
  );
};

export default Home;

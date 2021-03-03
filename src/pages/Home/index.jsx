import React, { useState } from 'react';
import FuncCounter from './../../components/FuncCounter';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Switch</button>
      {isVisible && <FuncCounter />}
    </div>
  );
};

export default Home;

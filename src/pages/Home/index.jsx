import React, { useState } from 'react';
import FuncCounter from './../../components/FuncCounter';

const Home = props => {
  const [state, setState] = useState(true);
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => setState(!state)}>Change</button>
      {state && <FuncCounter />}
    </div>
  );
};

export default Home;

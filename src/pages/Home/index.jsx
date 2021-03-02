import React, { useState } from 'react';

const Home = props => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const onChange = ({ target: { value } }) => setStep(Number(value));
  const btnClick = () => setCount(count + step);

  console.log('function');

  return (
    <div>
      <h1>Home page</h1>
      <h2>Current Value: {count}</h2>

      <input type='number' name='step' value={step} onChange={onChange} />

      <button onClick={btnClick}>Increment</button>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';

const FuncCounter = props => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const stepHandler = ({ target: { value } }) => {
    setStep(Number(value));
  };

  useEffect(() => {
    const mouseHandler = () => {
      setCount(prevCount => prevCount + step);
    };
    document.body.addEventListener('mousemove', mouseHandler);
    console.log('повесили обработчик');

    return function () {
      document.body.removeEventListener('mousemove', mouseHandler);
      console.log('сняли обработчик');
    };
  }, [step]);

  return (
    <div>
      <input type='number' value={step} onChange={stepHandler} />
      <h1>You clicked: {count}</h1>
    </div>
  );
};

export default FuncCounter;

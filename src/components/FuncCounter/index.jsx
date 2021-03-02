import React, { useState, useEffect } from 'react';

const FuncCounter = props => {
  const [count, setCount] = useState(0);

  const clickHandler = () => setCount(count + 1);

  useEffect(() => {
    console.log('OUTER');
    document.body.addEventListener('click', clickHandler);

    return function () {
      console.log('INNER');
      document.body.removeEventListener('click', clickHandler);
    };
  });

  return (
    <h1
      onClick={() => {
        setCount(count + 1);
      }}
    >
      You clicked: {count}
    </h1>
  );
};

export default FuncCounter;

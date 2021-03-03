import React, { useState, useEffect } from 'react';
import { format, addMilliseconds } from 'date-fns';

const StopWatch = props => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const switchStopWatch = () => setIsRunning(!isRunning);

  const reset = () => setTime(new Date(0, 0, 0, 0, 0));

  useEffect(() => {
    console.log('effect');
    if (isRunning) {
      const timeoutId = setTimeout(() => {
        setTime(prevTime => addMilliseconds(prevTime, 1000));
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, time]);

  return (
    <div>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={switchStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StopWatch;

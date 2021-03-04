import { useState, useEffect } from 'react';

export default function useClicker () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => setCount(v => v + 1);

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return count;
}

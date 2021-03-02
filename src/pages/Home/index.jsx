import React, { useState } from 'react';

const Home = props => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const [list, setList] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ]);

  const handleMouseMove = event =>
    setState({
      x: event.clientX,
      y: event.clientY,
    });

  const onClick = () => setCount(count + 1);

  const renderUsers = () =>
    list.map(u => <li key={u.id}>{JSON.stringify(u)}</li>);

  return (
    <div
      style={{ height: '100vh', border: '1px solid black' }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <h1>Home page</h1>
      <h1>
        X: {state.x}
        <br />
        Y: {state.y}
        <br />
        You clicked: {count}
      </h1>
      <div>{renderUsers()}</div>
    </div>
  );
};

export default Home;

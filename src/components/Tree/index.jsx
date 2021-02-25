import React from 'react';
import Parent from './Parent';

const Tree = props => {
  const styles = {
    border: '2px solid',
    padding: '20px',
  };
  return (
    <div style={styles}>
      <div>TREE</div>
      <Parent />
    </div>
  );
};

export default Tree;

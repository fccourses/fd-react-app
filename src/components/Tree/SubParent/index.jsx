import React from 'react';
import Child from '../Child';

const SubParent = props => {
  const styles = {
    border: '2px solid',
    padding: '20px',
  };
  return (
    <div style={styles}>
      <div>SUB_PARENT</div>
      <Child  />
    </div>
  );
};

export default SubParent;

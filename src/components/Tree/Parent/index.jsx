import React from 'react';
import SubParent from '../SubParent';

const Parent = props => {
  const styles = {
    border: '2px solid',
    padding: '20px',
  };
  return (
    <div style={styles}>
      <div>PARENT</div>
      <SubParent  />
    </div>
  );
};

export default Parent;

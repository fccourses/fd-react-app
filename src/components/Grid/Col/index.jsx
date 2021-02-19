import React from 'react';

const Col = props => {
  const { col, chdilren } = props;
  return <div className={`col-${col}`}>{chdilren}</div>;
};

export default Col;

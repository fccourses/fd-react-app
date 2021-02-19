import React from 'react';

const Row = props => {
  const { children } = props;

  return <div className="bootstrap-row">{children}</div>;
};

export default Row;

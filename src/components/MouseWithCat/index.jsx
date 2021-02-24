import React, { Component } from 'react';

function MouseWithCat (props) {
  const { x, y } = props;
  return (
    <img
      style={{
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
      }}
      src='https://image.shutterstock.com/image-photo/fast-cat-running-across-field-260nw-1108867955.jpg'
      alt='cat'
    />
  );
}

export default MouseWithCat;

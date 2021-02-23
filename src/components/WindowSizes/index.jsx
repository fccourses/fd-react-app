import React, { Component } from 'react';

class WindowSizes extends Component {
  render() {
    return (
      <div>
          Current window sizes are:
           x - {1920}
           y - {900}
      </div>
    );
  }
}

export default WindowSizes;

/* 

Методы жизненного цикла
событие resize
state: {x, y}

window.innerHeight
window.innerWidth

*/
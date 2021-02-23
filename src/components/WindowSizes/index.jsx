import React, { Component } from 'react';

class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      y: window.innerHeight,
      x: window.innerWidth,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  render () {
    const { x, y } = this.state;
    return (
      <div>
        Current window sizes are: x - {x}y - {y}
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

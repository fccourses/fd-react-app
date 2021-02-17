import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
      isRight: true,
      coordinate: 0,
    };
  }

  render () {
    const numberToRender = this.state.count; // smell code

    const { count, isRight } = this.state; // fresh code

    return (
      <div>
        <div>ТЕКУЩИЙ СЧЁТ: {count}</div>
        <button>ДОБАВИТЬ</button>
      </div>
    );
  }
}

export default Counter;

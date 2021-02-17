import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  render () {
    const { count } = this.state;

    return (
      <div>
        <div>ТЕКУЩИЙ СЧЁТ: {count}</div>
        <button onClick={this.handleClick}>ДОБАВИТЬ</button>
      </div>
    );
  }
}

export default Counter;

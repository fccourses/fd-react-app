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
    const { step } = this.props;

    const newCount = count + step;
    
    this.setState({
      count: newCount,
    });
  };

  render () {
    const { count } = this.state;
    const { step } = this.props;

    return (
      <div>
        <div>ТЕКУЩИЙ СЧЁТ: {count}</div>
        <div>ДОБАВИТЬ: {step}</div>
        <button onClick={this.handleClick}>ДОБАВИТЬ</button>
      </div>
    );
  }
}

export default Counter;

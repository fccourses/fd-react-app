import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      if (state.isAdd) {
        const newCount = state.count + props.step;
        return {
          count: newCount,
        };
      } else {
        const newCount = state.count - props.step;
        return {
          count: newCount,
        };
      }
    });
  };

  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  };

  render () {
    const { count, isAdd } = this.state;
    const { step } = this.props;

    return (
      <div>
        <div>ТЕКУЩИЙ СЧЁТ: {count}</div>
        <div>ШАГ: {step}</div>
        <button onClick={this.handleClick}>
          {isAdd ? 'ДОБАВИТЬ' : 'ОТНЯТЬ'}
        </button>
        <button onClick={this.changeMode}>ИЗМЕНИТЬ РЕЖИМ</button>
      </div>
    );
  }
}

export default Counter;

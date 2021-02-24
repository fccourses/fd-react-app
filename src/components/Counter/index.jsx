import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

/* 
1. Не сложное состояние(без объектов)
2. Все пропсы и состояние влияют на рендер
*/

class Counter extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  increment = () =>
    this.setState((state, props) => ({ value: state.value + props.step }));
  decrement = () =>
    this.setState((state, props) => ({ value: state.value - props.step }));

  render () {
    const { value } = this.state;
    const { step } = this.props;
    console.log('RENDER COUNTER');
    
    return (
      <div className={styles.wrapper}>
        <div>{value}</div>
        <div>STEP: {step}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  step: 10,
};

Counter.propTypes = {
  step: PropTypes.number,
};

export default Counter;

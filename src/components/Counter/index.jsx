import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.step !== this.props.step) {
      return false;
    }
    return true
  }

  increment = () =>
    this.setState((state, props) => ({ value: state.value + props.step }));
  decrement = () =>
    this.setState((state, props) => ({ value: state.value - props.step }));

  render () {
    const { value } = this.state;
    console.log('RENDER COUNTER');

    return (
      <div className={styles.wrapper}>
        <div>{value}</div>
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

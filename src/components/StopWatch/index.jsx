import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      count: 0,
    };
    console.log('constructor');
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  start = () => {
    this.intervalId = setInterval(this.tick, 1000);
  };
  /* 
    AFTER FIRST RENDER
  */
  componentDidMount() {
    console.log('componentDidMount');
    this.start();
  }

  /* 
    AFTER EACH RENDER
  */
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  /* 
    BEFORE UNMOUNT
  */
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    console.log('render');
    return (
      <article>
        <h1>{this.state.count}</h1>
      </article>
    );
  }
}

export default StopWatch;

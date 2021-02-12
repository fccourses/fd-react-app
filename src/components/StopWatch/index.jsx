import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  };
  /* 
    AFTER FIRST RENDER
  */
  componentDidMount() {
    this.start();
  }

  /* 
    AFTER EACH RENDER
  */
  componentDidUpdate() {}

  /* 
    BEFORE UNMOUNT
  */
  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (
      <article>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.start();
          }}
        >
          START
        </button>
        <button
          onClick={() => {
            this.stop();
          }}
        >
          STOP
        </button>
        <button
          onClick={() => {
            this.reset();
          }}
        >
          RESET
        </button>
      </article>
    );
  }
}

export default StopWatch;

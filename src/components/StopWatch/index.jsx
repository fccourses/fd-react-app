import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  tick = () => {
    const { time } = this.state;
    time.setSeconds(time.getSeconds() + 1);
    this.setState({ time });
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
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
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
    const { time } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString('it-IT')}</h1>
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

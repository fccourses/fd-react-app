import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;

    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.state.isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  };

  stop = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {
    this.start();
  }
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

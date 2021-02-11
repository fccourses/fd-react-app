import React, { Component } from 'react';
import './App.css';
import AlohaDashboard from './components/AlohaDashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExciting: true,
    };
  }
  render() {
    return (
      <>
        <AlohaDashboard isExciting={this.state.isExciting} />
        {/* <GoodbyeList /> */}
      </>
    );
  }
}

export default App;

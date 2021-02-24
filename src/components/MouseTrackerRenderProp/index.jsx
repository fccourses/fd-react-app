import React, { Component } from 'react';

class MouseTrackerRenderProp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = event =>
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });

  render () {
    const { children } = this.props;
    return (
      <div onMouseMove={this.handleMouseMove}>
        {children(this.state)}
      </div>
    );
  }
}

export default MouseTrackerRenderProp;

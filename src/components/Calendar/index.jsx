import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDay: new Date(),
    };
  }

  render () {
    return (
      <div>
        <CurrentDay currentDay={this.state.currentDay} />
        <CalendarBody currentDay={this.state.currentDay} />
      </div>
    );
  }
}

export default Calendar;

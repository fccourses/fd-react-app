import React, { Component } from 'react';
import { addDays, addWeeks, addYears, format, getWeeksInMonth } from 'date-fns';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      day: new Date(),
    };
  }

  render () {
    const { day } = this.state;
    return (
      <div>
        <div>{format(day, 'MMMM yyyy')}</div>
        <div>AMOUNT OF WEEKS IN MONTH : {getWeeksInMonth(day)}</div>
        <button
          onClick={() => {
            const { day } = this.state;

            const newDay = addDays(day, 1);

            this.setState({
              day: newDay,
            });
          }}
        >
          Add day
        </button>
        <button
          onClick={() => {
            const { day } = this.state;

            const newDay = addWeeks(day, -1);

            this.setState({
              day: newDay,
            });
          }}
        >
          Add Week
        </button>
        <button
          onClick={() => {
            const { day } = this.state;

            const newDay = addYears(day, 1);

            this.setState({
              day: newDay,
            });
          }}
        >
          Add Year
        </button>
      </div>
    );
  }
}

export default Calendar;

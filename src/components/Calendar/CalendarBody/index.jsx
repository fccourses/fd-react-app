import React from 'react';
import { getWeek, parse } from 'date-fns';
import Week from '../Week';
import Month from '../Month';

const WeekDays = () => {
  return (
    <tr>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
    </tr>
  );
};

const CalendarBody = props => {
  const { currentDay } = props; // ОБъект Date

  console.log(getWeek(currentDay)); // Определяет число недели в году

  return (
    <div>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          <Month year={2021} month={2} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;

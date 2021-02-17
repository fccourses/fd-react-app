import React, { Component } from 'react';
import { format } from 'date-fns';

const CurrentDay = props => {
  const { currentDay } = props; // ОБъект Date
  return (
    <div>
      <div>{format(currentDay, 'EEEE')}</div>
      <div>{format(currentDay, 'd')}</div>
    </div>
  );
};

export default CurrentDay;

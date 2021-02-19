import React from 'react';
import Week from '../Week';
import PropTypes from 'prop-types';
import { parse, getWeek, addWeeks, getYear, getWeeksInMonth } from 'date-fns';

const Month = props => {
  const { year, month } = props;

  const startOfMonth = parse(`${year} ${month}`, 'Y M', new Date());
  const weekAmount = getWeeksInMonth(startOfMonth);

  const weekArray = [];

  for (let i = 0; i < weekAmount; i++) {
    const startOfWeek = addWeeks(startOfMonth, i);
    weekArray.push(
      <Week
        key={`${year}-${month}-${i}`}
        year={getYear(startOfWeek)}
        week={getWeek(startOfWeek)}
      />
    );
  }

  return <>{[weekArray]}</>;
};

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
};

export default Month;

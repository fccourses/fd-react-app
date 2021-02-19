import React from 'react';
import { format, isToday, isThisMonth, isSameMonth } from 'date-fns';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Day.module.scss';

const Day = props => {
  const { day, currentDay } = props;

  const classNames = cx(styles.day, {
    [styles.currentMonthDay]: isSameMonth(day, currentDay),
    [styles.currentDay]: isToday(day),
  });

  return <td className={classNames}>{format(day, 'd')}</td>;
};

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  currentDay: PropTypes.instanceOf(Date).isRequired,
};

export default Day;

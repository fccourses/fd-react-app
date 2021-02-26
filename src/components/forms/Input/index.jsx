import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Field, ErrorMessage } from 'formik';
import styles from './Input.module.scss';

const Input = props => {
  console.log(props);
  const { field, meta, form, ...rest } = props;

  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });

  return (
    <>
      <label className={styles.container}>
        <input {...field} type='text' className={classNames} {...rest} />
        <ErrorMessage component='span' name={field.name} />
      </label>
    </>
  );
};

export default Input;

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Task = props => {
  const { onSubmit } = props;
  const initialValues = { todoBody: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikBag) => {
        onSubmit(values);
        formikBag.resetForm();
      }}
    >
      <Form>
        <Field name='todoBody' />
        <ErrorMessage name='todoBody' component='div' />
      </Form>
    </Formik>
  );
};

export default Task;

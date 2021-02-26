import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';

const SignInForm = props => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {formProps => {
        return (
          <Form>
            <Field name='email' />
            <ErrorMessage component='span' name='email' />

            <Field type='password' name='password' />
            <ErrorMessage component='span' name='password' className='test' />

            <Field type='submit' value='Submit' disabled={!formProps.isValid} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;

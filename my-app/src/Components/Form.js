import React from "react";

import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";

const Form = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      render={props => (
        <FormikForm>
          <label htmlFor="name">Name: </label>
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <br />
          <label htmlFor="email">Email: </label>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <br />
          <label htmlFor="password">Password: </label>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <br />
          <label htmlFor="terms">Terms: </label>
          <Field name="terms" type="checkbox" placeholder="Terms" value="1" />
          <ErrorMessage name="terms" component="div" />
          <br />
          <button type="submit">Submit</button>
        </FormikForm>
      )}
    />
  );
};

export default Form;

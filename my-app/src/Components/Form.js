import React from "react";
import axios from "axios";

import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";

const Form = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      render={props => (
        <FormikForm>
          <Field type="text" name="name" placeholder="Name" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="Password" name="Password" placeholder="password" />
          <Field type="checkbox" name="" placeholder="Terms of Service" />
          <button>Submit!</button>
        </FormikForm>
      )}
    />
  );
};

export default Form;

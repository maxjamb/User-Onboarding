import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as yup from "yup";
import Form from "./Components/Form";
import axios from "axios";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  terms: ""
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Must type a name"),
  email: yup
    .string()
    .email()
    .required("Must type an email"),
  password: yup
    .string()
    .required("Must type a password with 6+ characters")
    .length(6),
  terms: yup.boolean().required("Must Accept Terms and Conditions")
});

function App() {
  const addPerson = form => {
    axios
      .post("https://reqres.in/api/users_")
      .then(res => {
        console.log(res);
        form.resetForm();
      })
      .catch(error => {
        console.error(error.message);
      });
  };
  return (
    <div className="App">
      <Form
        onSubmit={addPerson}
        initialValues={initialFormState}
        validationSchema={validationSchema}
      />
    </div>
  );
}

export default App;

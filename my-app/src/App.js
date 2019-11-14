import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as yup from "yup";
import Form from "./Components/Form";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  terms: ""
};

const validationSchema = yup.object.shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
  terms: yup.boolean().required()
});

function App() {
  const addPerson = form => {};
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

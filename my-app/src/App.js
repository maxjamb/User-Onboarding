import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as yup from "yup";
import Form from "./Components/Form";
import axios from "axios";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  terms: false
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
    .min(6),
  terms: yup
    .boolean()
    .required("Must Accept Terms and Conditions")
    .oneOf([true], "Must Accept Terms and Conditions")
});

function App() {
  const [users, setUsers] = useState([]);
  const addPerson = (forValues, form) => {
    axios
      .post("https://reqres.in/api/users_", forValues)
      .then(res => {
        console.log(res);
        setUsers([...users, res.data]);
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
        users={users}
      />
    </div>
  );
}

export default App;

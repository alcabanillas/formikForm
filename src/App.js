import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  const validateEmail = (email) => {
    if (!email) return { emailField : 'Field required'};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return { emailField : 'Username should be and email'};
    return {};
  }

  const validatePassword = (password) => {
    if (!password) return { pswField: 'Field required'};
    return {};
  }

  const validateFields = (values) => {
    let errors = {}

    errors = {...validateEmail(values.emailField)};
    errors = {...errors, ...validatePassword(values.pswField)};

    return errors;
  }

  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik ({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      if (!formik.isValidating && formik.isSubmitting) {
      alert("Login Successful");
      }
    },
    validate: values => {
      return validateFields(values);
    }
  });

  return (
    <div>
      <form onSubmit = {formik.handleSubmit}>
        <div>Email</div>
        <input type="text" name="emailField" id="emailField" onChange={formik.handleChange}></input>        
        {formik.errors.emailField ? <div style={{ color : 'red'}}>{formik.errors.emailField}</div> : null}
        <div>Password</div>
        <input type="text" name="pswField" id="pswField" onChange={formik.handleChange}></input>
        {formik.errors.pswField ? <div style={{ color : 'red'}}>{formik.errors.pswField}</div> : null}
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;

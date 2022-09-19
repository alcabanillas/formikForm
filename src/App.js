import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  const validateEmail = (email) => {
    const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return email.match(regexp) ? true : false;
  }
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik ({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};

      if (!values.emailField) {
        errors = {...errors,  emailField : 'Field required' };
      } else {
        if (!validateEmail(values.emailField)){
          errors = {...errors, emailField: 'Username should be an email'}
        }
      }

      if (!values.pswField) errors = {...errors,  pswField : 'Field required' }

      return errors;
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

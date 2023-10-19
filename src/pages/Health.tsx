import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

function Health(){
  const [name, setName] = useState("");

  return (
    <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
    }}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
  
    <Form className="quote-form">
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="Jane" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
      />
      <button type="submit">Submit</button>
    </Form>
  </Formik>)
} 


export default Health;
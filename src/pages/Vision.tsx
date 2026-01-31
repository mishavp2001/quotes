import React from "react";
import { Formik, Field, Form } from 'formik';

function Vision(){
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Vision Insurance</h1>
        <p>Protect your eyesight with comprehensive vision coverage</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span className="icon-emoji">👓</span>
          <h3>Eye Exams</h3>
          <p>Annual comprehensive eye exams covered</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">🕶️</span>
          <h3>Eyewear Discounts</h3>
          <p>Save on glasses, contacts, and designer frames</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">👁️</span>
          <h3>LASIK Savings</h3>
          <p>Discounts on laser vision correction procedures</p>
        </div>
      </div>

      <div className="page-content">
        <h2>Request Your Vision Insurance Quote</h2>
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
            <button type="submit">Get Quote</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Vision;
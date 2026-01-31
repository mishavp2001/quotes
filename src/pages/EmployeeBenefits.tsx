import React from "react";

function EmployeeBenefits(){
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Employee Benefits</h1>
        <p>Comprehensive group insurance solutions for your business</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span className="icon-emoji">🏢</span>
          <h3>Group Health Plans</h3>
          <p>Competitive health insurance packages for your employees</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">🦷</span>
          <h3>Dental & Vision</h3>
          <p>Comprehensive dental and vision coverage options</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">💼</span>
          <h3>Life & Disability</h3>
          <p>Protect your team with life and disability insurance</p>
        </div>
      </div>

      <div className="iframe-wrapper">
        <h2>Request Employee Benefits Information</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScHz_DbgK5DsQRRsgydO122xOHWaGuAfCw5BHZV2WFY9S5ELw/viewform?embedded=true"
          className="iframe-page"
          title="Employee Benefits"
          width="100%"
          height="5354"
          style={{border: 'none'}}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default EmployeeBenefits;


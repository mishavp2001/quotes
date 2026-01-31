import React from "react";

function Health(){
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Health Insurance</h1>
        <p>Affordable coverage for your needs</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span className="icon-emoji">🏥</span>
          <h3>Coverage</h3>
          <p>Quality providers nationwide</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">💰</span>
          <h3>Best Rates</h3>
          <p>Compare and save</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">👨‍👩‍👧‍👦</span>
          <h3>Family Plans</h3>
          <p>Individual & family options</p>
        </div>
      </div>

      <div className="iframe-wrapper">
        <h2>Get Your Quote</h2>
        <iframe src="https://main.d3nntd1im20t3c.amplifyapp.com/" className="iframe-page" title="Health Insurance Quote" />
      </div>
    </div>
   )
}

export default Health;
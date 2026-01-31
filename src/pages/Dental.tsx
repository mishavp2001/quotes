import React, { useState } from "react";

function Dental(){
  const [zipCode, setZipCode] = useState("95746");

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Dental Insurance</h1>
        <p>Affordable dental coverage for preventive care and major procedures</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span className="icon-emoji">🦷</span>
          <h3>Preventive Care</h3>
          <p>Regular cleanings, exams, and X-rays covered at 100%</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">💵</span>
          <h3>Affordable Rates</h3>
          <p>Low monthly premiums with comprehensive coverage options</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">👨‍⚕️</span>
          <h3>Wide Network</h3>
          <p>Access to thousands of dentists nationwide</p>
        </div>
      </div>

      <div className="page-content">
        <h2>Get Your Dental Insurance Quote</h2>
        <form className="quote-form">
          <label htmlFor="zipcode">Enter your ZIP code:</label>
          <input
            id="zipcode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter ZIP code"
          />
          <button type="submit">Get Quote</button>
        </form>
      </div>
    </div>
 )
}

export default Dental;
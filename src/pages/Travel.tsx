import React from "react";

function Travel(){
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Travel Insurance</h1>
        <p>Protect your trip with comprehensive travel medical insurance</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span className="icon-emoji">✈️</span>
          <h3>Trip Protection</h3>
          <p>Coverage for trip cancellations, delays, and interruptions</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">🏥</span>
          <h3>Medical Coverage</h3>
          <p>Emergency medical and dental coverage while traveling abroad</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">🧳</span>
          <h3>Baggage Protection</h3>
          <p>Coverage for lost, stolen, or delayed baggage</p>
        </div>
      </div>

      <div className="iframe-wrapper">
        <h2>Get Travel Insurance Quote</h2>
        <iframe src="https://insurancecenterhelp.brokersnexus.com/" className="iframe-page" title="Travel Insurance" />
      </div>
    </div>
 )
}

export default Travel;
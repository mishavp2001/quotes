import React from "react";

function Medicare(){
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Medicare Insurance</h1>
        <p>Advantage, Supplement & Part D plans</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <span className="icon-emoji">🩺</span>
          <h3>Advantage</h3>
          <p>All-in-one coverage</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">💊</span>
          <h3>Part D</h3>
          <p>Prescription coverage</p>
        </div>
        <div className="feature-card">
          <span className="icon-emoji">📋</span>
          <h3>Supplement</h3>
          <p>Medigap coverage</p>
        </div>
      </div>

      <div className="iframe-wrapper">
        <h2>Compare Plans</h2>
        <iframe src="https://www.planenroll.com/?purl=uxFUtqio" className="iframe-page medicare" title="Medicare Plans" />
      </div>
    </div>
 )
}

export default Medicare;
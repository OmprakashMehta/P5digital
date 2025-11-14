import React from "react";

const BusinessCTA = () => {
  return (
    <section className="business-cta-section">
      <div className="cta-content">
        <h2 className="section-title">
          GROW YOUR <span className="highlight">BUSINESS</span> NOW
        </h2>
        <p>
          Get In Touch With Us To Spread Your Business All Around The World.
        </p>

        <div className="button-wrapper">
          <div className="button-double-layer">
            <div className="button-back-layer"></div>

            <a href="/contact" className="button-front-layer">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCTA;

import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaLock, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaLock />,
    title: "Security",
    subtitle: "We Make Apps Tha Are Secured And Protected Over The Internet",
  },
  {
    icon: <FaRocket />,
    title: "Fast",
    highlight: "Service",
    subtitle: "We Make Apps Tha Are Secured And Protected Over The Internet",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-wrapper">
        <div className="features-left">
          <img
            src="/assets/features.png"
            alt="Safe and Secured Apps"
            className="feature-image"
          />
        </div>

        <div className="features-right">
          <p className="section-subtitle">FEATURES</p>

          <h2 className="section-title">
            P5 DIGITAL SOLUTIONS DESIGNS <br />
            SAFE & SECURED <span className="highlight">WEB</span> AND{" "}
            <span className="highlight">MOBILE APPS</span>
          </h2>

          <Row className="g-4 mt-3">
            {features.map((feature, index) => (
              <Col key={index} md={6} sm={12}>
                <div className="service-card">
                  <span className="outside-line"></span>

                  <div className="service-icon-circle">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>

                  <h5>
                    {feature.title}{" "}
                    <span className="highlight">{feature.highlight}</span>
                  </h5>

                  <p>{feature.subtitle}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

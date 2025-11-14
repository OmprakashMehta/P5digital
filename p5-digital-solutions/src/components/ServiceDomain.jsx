import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaCloud,
  FaCogs,
  FaGlobe,
  FaShoppingCart,
  FaPaintBrush,
  FaCube,
  FaUserCog,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile Application",
    highlight: "Development",
  },
  { icon: <FaCogs />, title: "Enterprise Software", highlight: "Development" },
  { icon: <FaGlobe />, title: "Web Application", highlight: "Development" },
  { icon: <FaShoppingCart />, title: "E-Commerce", highlight: "Development" },
  { icon: <FaPaintBrush />, title: "UI/UX", highlight: "Design" },
  { icon: <FaCube />, title: "Software Product", highlight: "Development" },
  {
    icon: <FaUserCog />,
    title: "HRMS Payroll Software",
    highlight: "Development",
  },
  { icon: <FaMobileAlt />, title: "DeFi Apps And", highlight: "Development" },
  { icon: <FaCogs />, title: "Enterprise Software", highlight: "Development" },
];

const ServiceDomain = () => {
  return (
    <section className="service-domain-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            OUR SERVICE <span className="service-highlight">DOMAIN</span>
          </h2>
          <p className="service-subtitle">
            We Provide Services In Following Fields:
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={4} sm={6}>
              <div className="service-card">
                <span className="outside-line "></span>

                <div className="service-icon-circle">
                  <div className="service-icon-back"></div>
                  <div className="service-icon-front">{service.icon}</div>
                </div>

                <h5>
                  {service.title}{" "}
                  <span className="highlight">{service.highlight}</span>
                </h5>
                <p>
                  We Offer A Full Cycle Of Application Design, Integration And
                  Management Services.
                </p>
                <a href="#" className="view-more">
                  View More ↗
                </a>
              </div>
            </Col>
          ))}
        </Row>

        <div className="button-wrapper">
          <div className="button-double-layer">
            <div className="button-back-layer"></div>

            <a href="/services" className="button-front-layer">
              Checkout All Services
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDomain;

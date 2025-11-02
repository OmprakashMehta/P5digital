import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloud, FaUsersCog, FaLightbulb, FaUserShield } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={7}>
            <div className="about-content">
              <p className="section-subtitle">ABOUT US</p>
              <h2 className="section-title">
                THE <br/> BEST DIGITAL <span className="highlight">SOLUTION</span> PROVIDER IN YOUR AREA
              </h2>
              <p className="about-text">
                Started in 2022, P5 Digital Solutions has so far helped several online businesses,
                healthcare, and academic institutions to address their challenges. Our marketing plans
                are a perfect mix of team, strategy, and process that helps brands to identify
                real-time opportunities, connect with their target audience, and acquire new customers.
                We offer a range of integrated digital marketing plans along with web design, web
                development, and Android/iOS app development services at affordable prices.
              </p>

              <h5 className="features-title">KEY <span className="highlight">FEATURES</span></h5>
              <Row className="features-row">
                <Col sm={6} className="feature-item">
                  <FaCloud className="feature-icon" />
                  <span>Cloud Based Application Support.</span>
                </Col>
                <Col sm={6} className="feature-item">
                  <FaUsersCog className="feature-icon" />
                  <span>Highly Skilled Tech Workforce.</span>
                </Col>
                <Col sm={6} className="feature-item">
                  <FaLightbulb className="feature-icon" />
                  <span>Expert In Building Cost Effective Products.</span>
                </Col>
                <Col sm={6} className="feature-item">
                  <FaUserShield className="feature-icon" />
                  <span>Backed By Technical Architects From Ex Microsoft And Ex Adobe.</span>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Image */}
          <Col md={5} className="text-center">
            <img
              src="src/assets/development-cycle.png"
              alt="Software Development Life Cycle"
              className="about-image img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

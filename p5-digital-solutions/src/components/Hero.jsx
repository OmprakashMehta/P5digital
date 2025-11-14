import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={10}>
            <div className="hero-content">
              <p className="tagline">WE DELIVER YOUR DREAMS</p>
              <p className="intro">INTRODUCING</p>
              <h1 className="hero-title">
                P5 DIGITAL <span className="highlight">SOLUTIONS</span>
              </h1>
              <p className="hero-text">
                The world is currently in the midst of a new industrial revolution.
                P5 Digital Solutions track your business needs, help grow your
                network, advertise your business, and develop tools to accelerate
                your growing needs.{" "}
                <span className="highlight">
                  "Let's begin your digital journey together."
                </span>
              </p>
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

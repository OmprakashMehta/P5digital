import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceDomain from "../components/ServiceDomain";
import BusinessCTA from "../components/BusinessCTA";

const About = () => {
  return (
    <>
    <section className="about-section py-5 about-page">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="about-content">
              <h2 className="section-title">
                OUR <span className="highlight">COMPANY</span>
              </h2>
              <p className="about-text">
                P5 Digital Solutions team has experienced the pleasure of
                helping clients achieve their goals by growing their digital
                footprints through a full suite of digital services including
                SEO, Social Media advertising, web and hybrid app development.
                P5 Digital Solutions provides small to mid-sized to large
                businesses with an array of digital services and strategies
                designed to increase web and mobile presence, generate leads to
                expand clients' customer base, and deliver significant ROI &
                increased revenues.
              </p>

              <Row className="founder-row">
                <Col md={6}>
                  <div className="founder-card">
                    <h4 className="f-name">
                      Nishant <span>Kumar</span>
                    </h4>
                    <p className="f-role">Co-Founder</p>
                    <p className="f-details">
                      Brings in 10 years experience of working with a leading
                      MNC in Compliance and Banking Domains and in the
                      Government sector
                    </p>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="founder-card">
                    <h4 className="f-name">
                      Tamweer <span>Raza</span>
                    </h4>
                    <p className="f-role">Co-Founder</p>
                    <p className="f-details">
                      Brings in 6 years experience of tackling technical and
                      operational issues.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={5} className="text-center">
            <img
              src="src/assets/aboutpage/about-us.png"
              alt="Company"
              className="about-image img-fluid custom-about-img"
            />
          </Col>
        </Row>
      </Container>

    </section>
      <ServiceDomain />
       <BusinessCTA />
       </>
  );
};

export default About;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaUserGraduate,
  FaChartLine,
  FaUsersCog,
  FaLaptopCode,
} from "react-icons/fa";

import BusinessCTA from "../components/BusinessCTA";

const careerData = [
  {
    icon: <FaUserGraduate />,
    title: "Internship",
    highlight: "Programme",
    list: "We are looking for a highly motivated intern to join our team. The successful candidate will assist in implementing and improving ...",
  },
  {
    icon: <FaChartLine />,
    title: "Sales &",
    highlight: "Markteting",
    list: "Lead generation, handling existing clients, following up on payments receivable, manage marketing efforts such as website, brochures, ...",
  },
  {
    icon: <FaLaptopCode />,
    title: "IT",
    list: "Join Our IT team for the position of Software Developer, Full Stack Developer, Frontend/Backend Developer, UI/UX Designer, Tester...",
  },
  {
    icon: <FaUsersCog />,
    title: "Human",
    highlight: "Resource",
    list: "Onboarding and Documentation, Managing & Distribution of Joining Kit, Assist in monitoring/tracking employee relations issues ...",
  },
];

const Career = () => {
  return (
    <>
      <section className="service-domain-section py-5 blog-section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              Interested to work with us? Checkout <br /><span className="highlight">open positions</span>
            </h2>
            <p className="service-subtitle">
              Amazing career opportunities for experienced as well as freshers.
            </p>
          </div>

          <Row className="g-4">
            {careerData.map((careers, index) => (
              <Col key={index} sm={6}>
                <div className="service-card">
                  <span className="outside-line "></span>

                  <div className="service-icon-circle">
                    <div className="service-icon">{careers.icon}</div>
                  </div>

                  <h5>
                    {careers.title}{" "}
                    <span className="highlight">{careers.highlight}</span>
                  </h5>
                  <p>{careers.list}</p>

                  <div class="d-flex justify-content-between align-items-center mt-2">
                    <h5 class="m-0">Full Time</h5>

                    <a href="#" class="view-more m-0">
                      Apply Now ↗
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <BusinessCTA />
    </>
  );
};

export default Career;

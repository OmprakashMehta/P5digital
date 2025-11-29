import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCogs, FaGlobe } from "react-icons/fa";
import BusinessCTA from "../components/BusinessCTA";

const blogData = [
  {
    icon: <FaCogs />,
    title: "Vite",
    list: "Vite is A Next Generation Frontend Tooling Which is Faster Than Create-React-App",
  },
  {
    icon: <FaGlobe />,
    title: "Cloud",
    highlight: "Computing",
    list: "Cloud Computing Is The On-Demand Availability Of Computer System Resources, Especially Data Storage",
  },
];

const Blog = () => {
  return (
    <>
      <section className="service-domain-section py-5 blog-section">
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
            {blogData.map((blogs, index) => (
              <Col key={index} sm={6}>
                <div className="service-card">
                  <span className="outside-line "></span>

                  <div className="service-icon-circle">
                    <div className="service-icon">{blogs.icon}</div>
                  </div>

                  <h5>
                    {blogs.title}{" "}
                    <span className="highlight">{blogs.highlight}</span>
                  </h5>
                  <p>{blogs.list}</p>
                  <a href="#" className="view-more">
                    View More ↗
                  </a>
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

export default Blog;

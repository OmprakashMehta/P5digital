import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaArrowRight,
  FaCube,
  FaHeartbeat,
  FaBullhorn,
  FaUserCog,
  FaCloud,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import FeaturesSection from "../components/FeaturesSection";
import BusinessCTA from "../components/BusinessCTA";

const serviceData = [
  {
    title: "Academic",
    highlight: "Services",
    icon: <FaCube />,
    list: [
      { name: "Staff/Student Attendance System", link: "/attendance" },
      { name: "Library Management", link: "/library" },
      { name: "Activity Tracker", link: "/activity" },
    ],
  },
  {
    title: "Health",
    highlight: "care",
    icon: <FaHeartbeat />,
    list: [
      { name: "Patient Record Management", link: "/patient-record" },
      { name: "Pharmacy", link: "/pharmacy" },
      { name: "Diagnostic(s) Record System", link: "/diagnostic" },
      { name: "Hospital Management System", link: "/hospital" },
    ],
  },
  {
    title: "Digital",
    highlight: "Marketing",
    icon: <FaBullhorn />,
    list: [
      { name: "Search Engine Optimization", link: "/seo" },
      { name: "Pharmacy", link: "/pharmacy" },
      { name: "Digital Promotion", link: "/promotion" },
      { name: "SMS/E-Mail/Whatsapp", link: "/sms" },
    ],
  },
  {
    title: "Custom IT",
    highlight: "Services",
    icon: <FaUserCog />,
    list: [
      { name: "Search Engine Optimization", link: "/seo" },
      { name: "Pharmacy", link: "/pharmacy" },
      { name: "Digital Promotion", link: "/promotion" },
      { name: "SMS/E-Mail/Whatsapp", link: "/sms" },
    ],
  },
  {
    title: "Featured",
    highlight: "Services",
    icon: <FaCloud />,
    list: [{ name: "Search Engine Optimization", link: "/seo" }],
  },
  {
    title: "Social Media",
    highlight: "Promotion",
    icon: <FaUsers />,
    list: [{ name: "Channel-Specific Social Media Services", link: "/social-media" }],
  },
  {
    title: "Real-Estate Software",
    highlight: "Services",
    icon: <FaBuilding />,
    list: [{ name: "Real-estate Software Services", link: "/real-estate" }],
  },
];

const Service = () => {
  return (
    <>
    <section className="service-domain-section py-5 service-page">
      <Container>

        <div className="text-center mb-5">
          <h2 className="section-title">
            OUR SERVICE <span className="service-highlight">DOMAIN</span>
          </h2>
          <p className="service-subtitle">
            We Provide Services In Following Fields:
          </p>
        </div>

        <Row >
          {serviceData.map((item, index) => (
            <Col md={4} sm={6} key={index}>
              <div className="service-card service-page-card">

                <span className="outside-line"></span>

                <div className="service-icon-circle">
                  <div className="service-icon-back"></div>
                  <div className="service-icon-front">
                    {item.icon}
                  </div>
                </div>

                <h5>
                  {item.title}{" "}
                  <span className="highlight">{item.highlight}</span>
                </h5>

                <ul className="domain-list">
                  {item.list.map((listItem, idx) => (
                    <li key={idx}>
                      <a href={listItem.link}>
                        <FaArrowRight className="list-arrow" />
                        {listItem.name}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </Col>
          ))}
        </Row>

        <div className="button-wrapper">
          <div className="button-double-layer">
            <div className="button-back-layer"></div>

            <a href="/contact" className="button-front-layer">
              Get In Touch With Us
            </a>
          </div>
        </div>

      </Container>
    </section>
     <FeaturesSection />
      <BusinessCTA />
    </>
  );
};

export default Service;

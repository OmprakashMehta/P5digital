import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaUserGraduate,
  FaChartLine,
  FaUsersCog,
  FaLaptopCode,
} from "react-icons/fa";


const careerData = [
  {
    icon: <FaUserGraduate />,
    title: "Montfort",
    highlight: "School",
    subtitle: "School",
    list: "P5 Digital Solutions has provided us with modern and very useful services. They are the best in the market.",
  },
  {
    icon: <FaChartLine />,
    title: "Fellamart",
    subtitle: "E-commerce Company",
    list: "The company has provided us the services as per our expectations. Their team is full of people with great energy and motivation.",
  },
  {
    icon: <FaLaptopCode />,
    title: "P5 Events",
    highlight: "Management",
    subtitle: "ScEvent Management Companyhool",
    list: "It was very benefitting for our company to have P5 Digital Solutions on board. They provided us with a reliable solution.",
  },
  {
    icon: <FaUsersCog />,
    title: "True Infosystems",
    highlight: "Pvt Ltd",
    subtitle: "Bulk SMS Service",
    list: "P5 Digital Solutions sticked right to our requirements and gave us with robust solution.",
  },
  {
    icon: <FaUsersCog />,
    title: "Subhras",
    subtitle: "Money Lending App",
    list: "Thanks to P5 Digital Solution, we have an amazing money lending app that works as expected.",
  },
];

const Contact = () => {
  return (
    <>
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          
          <Col md={5} className="text-center">
            <div className="contact-image-wrapper">
              <img
                src="/assets/contact-us.png"
                alt="Contact"
                className="contact-img"
              />
            </div>
          </Col>

          <Col md={7}>
            <Form className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Services</Form.Label>
                    <Form.Control type="text" placeholder="Enter Service" />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Write Message..." />
                  </Form.Group>
                </Col>

                <Col md={12} className="text-end">
                  <Button className="submit-btn">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>

        </Row>
      </Container>
    </section>



<section className="service-domain-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">
              The Best Digital Agencies Recommend<br /><span className="highlight">Our Software</span>
            </h2>
            <p className="service-subtitle">
              Industry experts mention their experience using our software and the excellent results they have achieved
            </p>
          </div>

          <Row className="g-4">
            {careerData.map((careers, index) => (
              <Col key={index} sm={6}>
                <div className="service-card">
                  <span className="outside-line "></span>
<div className="icon-title-row">
                  <div className="service-icon-circle">
                    <div className="service-icon">{careers.icon}</div>
                  </div>
<div className="title-row">
                  <h5>
                    {careers.title}{" "}
                    <span className="highlight">{careers.highlight}</span>
                  </h5>
                   <p>{careers.subtitle}</p>
                   </div>
</div>
                  <hr />
                  <p>{careers.list}</p>

                  
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

<hr />


<section className="visit-section">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6}>
            <h3 className="visit-title">
              VISIT <span>US</span>
            </h3>

            <p className="visit-info">P5 Digital Solutions</p>
            <p className="visit-info">Sharda Complex</p>
            <p className="visit-info">
              Budhwa Mahadev Chowk, Hazaribagh
            </p>
            <p className="visit-info">Jharkhand 825301</p>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={6} className="text-center">
            <div className="visit-img-wrapper">
              <img
                src="/assets/map.png"
                alt="Location Map"
                className="visit-img"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
</>
  );
};

export default Contact;

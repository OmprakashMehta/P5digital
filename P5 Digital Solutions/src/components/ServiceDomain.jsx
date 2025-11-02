import React from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaBuilding,
  FaPencilRuler,
  FaShoppingCart,
  FaCubes,
  FaUserCog,
  FaEthereum,
} from "react-icons/fa";

const ServiceDomain = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Application",
      highlight: "Development",
      desc: "We offer a full cycle of application design, integration and management services.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Application",
      highlight: "Development",
      desc: "We build websites using the latest technologies like CSS, React. Our services include custom web app development.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      highlight: "Development",
      desc: "We offer scalable online store solutions with payment integration.",
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX",
      highlight: "Design",
      desc: "A balance of creativity and usability for engaging digital experiences.",
    },
    {
      icon: <FaBuilding />,
      title: "Enterprise Software",
      highlight: "Development",
      desc: "Custom enterprise solutions for complex business processes and automation.",
    },
    {
      icon: <FaCubes />,
      title: "Software Product",
      highlight: "Development",
      desc: "From idea to execution, we build reliable and scalable software products.",
    },
    {
      icon: <FaUserCog />,
      title: "HRMS Payroll Software",
      highlight: "Provider",
      desc: "Comprehensive HR and payroll management system for organizations.",
    },
    {
      icon: <FaEthereum />,
      title: "DeFi Apps And",
      highlight: "DApps",
      desc: "We create decentralized applications on blockchain with secure smart contracts.",
    },
  ];

  return (
    <section className="service-domain py-5 text-center">
      <div className="container">
        <h2 className="service-domain-title">
          OUR SERVICE <span>DOMAIN</span>
        </h2>
        <p className="service-domain-subtitle">
          We Provide Services In Following Fields:
        </p>

        <div className="row mt-5">
          {services.map((service, index) => (
            <div className="col-md-6 mb-4" key={index}> 
              <div className="service-domain-card">
                <div className="icon-outer">
                  <div className="icon-inner">{service.icon}</div>
                </div>
                <h5 className="service-title">
                  {service.title} <span>{service.highlight}</span>
                </h5>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-5">
          <button className="service-btn">View All Services</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDomain;

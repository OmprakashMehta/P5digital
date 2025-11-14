import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h5>QUICK LINKS</h5>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>ABOUT</h5>
          <ul>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Web App Development</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">Custom Enterprise Software</a>
            </li>
            <li>
              <a href="#">Blockchain Software</a>
            </li>
            <li>
              <a href="#">e-Commerce Software</a>
            </li>
            <li>
              <a href="#">ERP & CRM</a>
            </li>
            <li>
              <a href="#">Software Product Development</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>VISIT US</h5>
          <p>
            P5 Digital Solutions <br />
            Sharda Complex, <br />
            Budhwa Mahadev Chowk, Hazaribagh <br />
            Jharkhand 825301
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@p5digital.in">info@p5digital.in</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+91980459725">+91 9810459725</a>,{" "}
            <a href="tel:+917004963433">+91 7004953433</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>

        <div className="footer-links">
          <a href="#">Refund Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
        </div>

        <div className="footer-credit">
          Made by <span>P5 Digital Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="mb-4">
            <h4>About Our Business</h4>
            <p>
              Welcome to our Flower Shop! We offer a wide variety of beautiful
              floral arrangements for all occasions. Our mission is to bring joy
              and beauty into your life with our fresh, high-quality flowers.
            </p>
            <p>
              Our flowers are sourced from the best growers and are always
              fresh. We take pride in our customer service and aim to make every
              experience delightful. Thank you for choosing us for your floral
              needs!
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Contact Us</h4>
            <p>
              <strong>Address:</strong> 123 Flower Street, Blossom City, FL
              12345
            </p>
            <p>
              <strong>Email:</strong> contact@flowershop.com
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="bouquet" smooth={true} duration={500}>
                  Bouquet
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="basket" smooth={true} duration={500}>
                  Basket
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="vase" smooth={true} duration={500}>
                  Vase
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="perfume" smooth={true} duration={500}>
                  Perfume
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="review" smooth={true} duration={500}>
                  Reviews
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Flower Shop. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

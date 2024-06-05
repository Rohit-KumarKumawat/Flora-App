import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacts.css";

const Contacts = () => {
  return (
    <Container className=" container">
      <Row
        className="contact-section flex justify-content-center  "
        style={{ padding: "5%" }}
      >
        <Col md={4} className="contact-description">
          <img className="w-100 h-100" src="/images/z-contacts.jpg" alt="" />
        </Col>
        <Col md={4} className="contact-form">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;

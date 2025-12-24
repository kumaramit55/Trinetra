import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaSmile } from "react-icons/fa";
import "../../assets/css/talktous/talktous.css";


function TalkToUs() {
  return (
    <div className="talk-container">
      <Container>
        <Row className="mb-5">
          <Col md={8}>
            <h1 className="talk-heading">💬 Talk to Us</h1>
            <p className="talk-subtext">
              We’d love to hear from you! Whether it’s a question, feedback, or just a friendly hello <FaSmile color="#002452" />, we’re here to help.
            </p>
          </Col>
        </Row>

        <Row className="talk-grid">
          {/* Contact Information */}
          <Col md={5} className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />  
              <span>Gurugram, Haryana, 122011</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />  
              <span>trinetrabusinessesservices@gmail.com</span>
            </div>
          </Col>

          {/* Form */}
          <Col md={7}>
            <Form className="talk-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>👤 Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>📧 Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>📝 Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>💬 Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
              </Form.Group>

              <Button variant="primary" type="submit" size="md" className="w-100">
                Send Message 🚀
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TalkToUs;

import React from 'react';
import { Container, Row, Col } from "reactstrap";
import breast from "./images.jpeg";
import rinoplasti from "./blog8.jpg";

const PatientStories1 = () => {
  return (
    <Container style={{ padding: "30px 0", marginTop: "5%" }}>
      <Row>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>Celebrating Transformation: A Breast Implant Success Story with HealTrip Global in Istanbul, Turkey</h1>
          <p style={{ color: "#0c2347" }}>At HealTrip, we celebrate the journeys of transformation with each patient we assist. Today, we share the inspiring story of a patient from the United Kingdom who underwent a successful breast implant surgery in Istanbul, Turkey.

          In her heartfelt testimonial, she highlights the exceptional care and support she received from our dedicated team of surgeons and medical professionals. From the initial consultation to the post-operative care, our patient felt confident and well-cared-for every step of the way.

          Through this testimonial, we invite you to witness the transformative power of our services and the impact it has had on our patient's life. Discover how HealTrip Global can guide you towards achieving your aesthetic goals with confidence, affordability, and outstanding results.

          Contact us today to begin your own journey towards transformation with HealTrip.</p>
        </Col>
        <Col md={6}>
          <img src={breast} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
      <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
      <Row>
        <Col md={6}>
          <img src={rinoplasti} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>Life-Changing Rhinoplasty: A Testimonial from a Thrilled Patient from the United Kingdom</h1>
          <p style={{ color: "#0c2347" }}>Embark on a journey of transformation with our delighted patient from the United Kingdom, who underwent a life-altering rhinoplasty procedure at HealTrip in Istanbul. Through her heartfelt testimonial, she shares her profound experience, starting from her initial consultation with our expert surgeon to the attentive post-operative care she received.

Our patient reflects on the exceptional quality of our services, the compassionate support extended by our staff, and the breathtaking results of her rhinoplasty. If you're contemplating rhinoplasty, we invite you to explore her testimonial and witness the remarkable changes achievable with HealTrip.

At HealTrip, our unwavering dedication lies in crafting exceptional patient journeys, achieving extraordinary outcomes, and ensuring the well-being and comfort of our patients from diverse backgrounds. Take the first step towards transformation with us today.

          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PatientStories1;

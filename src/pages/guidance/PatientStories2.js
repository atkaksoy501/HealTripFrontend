import React from 'react';
import { Container, Row, Col } from "reactstrap";
import whitening from "./dental1.jpeg";
import photo from "./seffafplak.webp";

const PatientStories2 = () => {
  return (
    <Container style={{ padding: "30px 0", marginTop: "5%" }}>
      <Row>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Beaming Smiles: Testimonial of a Happy Patient from Germany"</h1>
          <p style={{ color: "#0c2347" }}>Hi there! I'm a happy patient from Germany who underwent professional teeth whitening treatment at HealTrip in Istanbul. Let me share my experience with you. During my initial appointment, I had a detailed discussion with our expert dentist about the teeth whitening process. Throughout the treatment, I felt at ease thanks to the friendly and gentle approach of our wonderful staff.

The results of my teeth whitening treatment were truly amazing! Thanks to the expertise of our hospital's staff and their friendly demeanor, I feel like I have a brighter and more confident smile. If you're looking to get rid of stubborn stains or enhance your smile's appearance, HealTrip can provide you with the professional teeth whitening service you need.

Contact HealTrip today to schedule your teeth whitening treatment and achieve a brighter, more confident smile!</p>
        </Col>
        <Col md={6}>
          <img src={whitening} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
      <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
      <Row>
        <Col md={6}>
          <img src={photo} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Effortless Smiles: Story of a Satisfied Patient from France"</h1>
          <p style={{ color: "#0c2347" }}>Hello! I'm a satisfied patient from France who underwent plaque removal therapy at HealTrip in Istanbul. Let me share my experience with you. During my initial appointment, I discussed plaque formation and removal with our experienced dentist. Throughout the treatment, I felt comfortable thanks to the gentle and professional approach of our wonderful staff.

After my plaque removal therapy, I noticed a significant improvement in my oral health! Thanks to the expertise of our hospital's team and their friendly demeanor, I feel like my smile is healthier and brighter. If you're struggling with plaque buildup or looking for preventive care, HealTrip can provide you with comprehensive plaque removal solutions.

Contact HealTrip today to schedule your plaque removal therapy and take the first step towards effortless smiles!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PatientStories2;

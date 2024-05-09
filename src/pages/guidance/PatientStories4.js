import React from 'react';
import PatientStories from './PatientStories';
import { Container, Row, Col } from "reactstrap";
import photo1 from "./blog4.jpg";
import photo2 from "./FUE-Follicular-Unit-Extraction.jpg";
import photo3 from "./Blog7.webp";

const PatientStories4 = () => {
  return (
    <Container style={{ padding: "30px 0", marginTop: "5%" }}>
      <Row>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Hair Transplant Testimonial:"</h1>
          <p style={{ color: "#0c2347" }}>Hi everyone! I'm Mark, and I want to share my experience with hair transplant surgery at HealTrip. Like many men, I struggled with hair loss for years, feeling self-conscious and insecure about my appearance. After researching various options, I decided to undergo hair transplant surgery with HealTrip, and it was one of the best decisions I've ever made.

From the moment I arrived at HealTrip, I felt reassured and supported by the professional team. They guided me through every step of the process, from the initial consultation to the surgery itself and the post-operative care. Their expertise and compassion made me feel confident and comfortable throughout the entire experience.

Since my hair transplant surgery, my confidence has soared, and I feel like a new man. The results exceeded my expectations, and I couldn't be happier with how my hair looks now. Thanks to HealTrip, I've regained not just my hair, but also my confidence and self-esteem.
</p>
        </Col>
        <Col md={6}>
          <img src={photo1} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
      <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
      <Row>
        <Col md={6}>
          <img src={photo2} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Hair Restoration Testimonial:"</h1>
          <p style={{ color: "#0c2347" }}>Hey there! I'm Laura, and I want to share my journey with hair restoration at HealTrip. For years, I struggled with thinning hair and felt frustrated and embarrassed by my appearance. After trying various treatments with little success, I decided to explore hair restoration options with HealTrip.

The team at HealTrip was incredibly supportive and knowledgeable, guiding me through the entire process with care and compassion. From the initial assessment to the restoration procedure and the follow-up appointments, I felt like I was in good hands every step of the way.

Since undergoing hair restoration treatment, I've seen a significant improvement in the thickness and fullness of my hair. I feel more confident and comfortable in my own skin, and I'm grateful to HealTrip for helping me regain my confidence and self-esteem. </p>
        </Col>
        <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Hair Transplantation Journey:"</h1>
          <p style={{ color: "#0c2347" }}>Hello! I'm Michael, and I want to share my hair transplantation journey with you. Like many men, I struggled with hair loss and felt insecure about my appearance. After researching various options, I decided to undergo hair transplantation surgery at HealTrip, and it was truly life-changing.

The team at HealTrip was amazing, providing me with support and guidance throughout the entire process. From the initial consultation to the surgery itself and the follow-up care, I felt like I was in good hands every step of the way.

Since my hair transplantation surgery, I've regained not just my hair, but also my confidence and self-esteem. I feel like a new person, and I'm grateful to HealTrip for giving me the opportunity to feel confident and comfortable in my own skin again.





</p>
        </Col>
        <Col md={6}>
          <img src={photo3} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default PatientStories4;

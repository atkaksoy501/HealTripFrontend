import React from 'react';
import PatientStories from './PatientStories';
import { Container, Row, Col } from "reactstrap";
import midebalonu from "./mide-balonu-700x311.jpg";
import photo1 from "./obezite.webp";
import photo2 from "./images (2).jpeg";

const PatientStories3 = () => {
  return (
    <Container style={{ padding: "30px 0", marginTop: "5%" }}>
      <Row>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Gastric Bypass Surgery Testimonial:"</h1>
          <p style={{ color: "#0c2347" }}>Hello! I'm Emily, and I'd like to share my journey with gastric bypass surgery at HealTrip. For years, I struggled with obesity and its related health issues, feeling like I was stuck in a cycle I couldn't break. That's when I decided to explore surgical options, and after thorough research, I chose HealTrip for their expertise and supportive approach.

The team at HealTrip guided me through every step of the process, from the initial consultation to the surgery itself and the post-operative care. Their professionalism and compassion made me feel safe and confident throughout the entire experience.

Since my gastric bypass surgery, my life has changed in ways I never thought possible. Not only have I shed excess weight, but I've also experienced improvements in my overall health and well-being. I feel like I've been given a second chance at life, and I'm forever grateful to HealTrip for helping me along this transformative journey.
</p>
        </Col>
        <Col md={6}>
          <img src={photo1} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
      <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
      <Row>
        <Col md={6}>
          <img src={midebalonu} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Gastric Balloon Testimonial:"</h1>
          <p style={{ color: "#0c2347" }}>Hi there! I'm Alex, and I want to share my experience with the gastric balloon treatment at HealTrip. Like many others, I struggled with weight loss for years, trying countless diets and exercise routines with little success. That's when I decided to explore other options and discovered the gastric balloon treatment offered by HealTrip.

The process was smooth and straightforward, thanks to the supportive team at HealTrip who guided me through every step. From the initial consultation to the insertion of the gastric balloon and the follow-up appointments, I felt supported and encouraged every step of the way.

Since undergoing the gastric balloon treatment, I've seen significant changes in my weight and overall health. I feel more energized, confident, and in control of my life than ever before. Thanks to HealTrip, I've been given the tools and support I need to achieve my weight loss goals and live a healthier, happier life.

          </p>
        </Col>
        <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
        <Col md={6}>
          <h1 style={{ color: "#003366" }}>"Gastric Sleeve Surgery Testimonial:"</h1>
          <p style={{ color: "#0c2347" }}>Hey there! I'm Sarah, and I want to share my journey with gastric sleeve surgery at HealTrip. Battling weight issues for years took a toll on my physical and emotional well-being, and I knew I needed to make a change. After researching my options, I decided to undergo gastric sleeve surgery with HealTrip, and it was one of the best decisions I've ever made.

The team at HealTrip was with me every step of the way, providing support, guidance, and encouragement when I needed it most. From the initial consultation to the surgery itself and the follow-up appointments, I felt cared for and supported throughout the entire process.

Since my gastric sleeve surgery, I've experienced a complete transformation in my life. Not only have I lost a significant amount of weight, but I've also gained confidence, energy, and a newfound zest for life. I'm grateful to HealTrip for giving me the tools and support I needed to embark on this life-changing journey.

</p>
        </Col>
        <Col md={6}>
          <img src={photo2} alt="Sude" style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default PatientStories3;

import React from "react";
import { Container, Row, Col } from 'reactstrap';
import aboutPhoto from "./about.jpg";
import CheckIcon from '@mui/icons-material/Check';
import "./AboutUs.css";
import about_background from "./about_background.jpg"
import ExperienceSection from "../home/ExperienceSection";
import { WhyHealTripSection } from "../home/WhyHealTripSection";
export default function AboutUs() {
  return (
    <section id="about" className="about" style={{marginTop:"59px"}}>
      <div className="section-title" style={{backgroundImage: `url(${about_background})`}}>
        <h1 style={{textAlign: "center", color: "#295D6D", fontSize: "4.5rem", fontWeight: "bold", fontFamily: "'Oswald', sans-serif"}}>ABOUT US</h1>
          <p style={{textAlign:"center", color:"#295D6D", fontSize:"1.1rem",fontWeight:"700"}}>Welcome to HealTrip,  where your health is our top priority. Your journey to a healthier begins here.</p>
        </div>
      <Container data-aos="fade-up">
        <Row style={{padding:"30px 0"}}>
          <Col lg="6" data-aos="fade-right">
            <img src={aboutPhoto} className="img-fluid" alt="" />
          </Col>
          <Col lg="6" className="pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3 style={{color:"#295d6d", fontWeight:"bold", fontSize:"1.5rem"}}>Discover the HealTrip Difference: Your Path to Exceptional Care</h3>
            <p style={{color:"#295D6D", fontSize:"1.1rem" }} className="fst-italic">
            With state-of-the-art facilities and a team of compassionate healthcare professionals, we strive to provide personalized care tailored to your individual needs. Whether you're seeking routine check-ups, specialized treatments, or preventive care, we're here to support you every step of the way.
            </p>
            <ul style={{listStyleType:"none"}}>
              <li style={{color:"#295D6D" }}><CheckIcon style={{color:"#295D6D", fontSize:"25px"}}/> Our mission at HealTrip is to prioritize your health and well-being by providing personalized and compassionate care tailored to your individual needs. We aim to be your trusted partner in achieving optimal health and wellness</li>
              <li style={{color:"#295D6D" , paddingTop:"10px"}}><CheckIcon style={{color:"#295D6D", fontSize:"25px"}}/> We offer a wide range of healthcare services, including routine check-ups, specialized treatments, preventive care, diagnostic services, and more. Our state-of-the-art facilities are equipped with the latest medical technology to ensure the highest quality of care. </li>
              <li style={{color:"#295D6D" , paddingTop:"10px"}}><CheckIcon style={{color:"#295D6D", fontSize:"25px"}}/> We understand that every patient is unique, which is why we take a patient-centered approach to care. Our team works closely with you to develop personalized treatment plans that address your specific needs and concerns.</li>
            </ul>
            <p className="fst-italic" style={{color:"#295D6D", fontSize:"1.1rem" }}>
            Quality and excellence are at the core of everything we do at HealTrip. We are dedicated to delivering the highest standards of care and ensuring that our patients receive the best possible outcomes.
            </p>
          </Col>
        </Row>
      </Container>
      <ExperienceSection></ExperienceSection>
      <WhyHealTripSection></WhyHealTripSection>
    </section>
  );
}

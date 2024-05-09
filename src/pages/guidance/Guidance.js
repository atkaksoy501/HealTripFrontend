import React from 'react';
import "./Guidance.css";
import { Container, Row, Col } from "reactstrap";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./orta_neden_ico5.png";
import icon7 from "./orta_neden_ico6.png";
import icon8 from "./orta_neden_ico7.png";
import medicalGuidanceImage from './medical-guidance.jpg';


import PatientStories from "./PatientStories";
const Guidance = () => {
  return (
    <div style={{ marginTop: "2%" }}>
            <div className="section-title" style={{backgroundImage: `url(${medicalGuidanceImage})`}}>
        <h1 style={{textAlign: "center", color: "#295D6D", fontSize: "4.5rem", fontWeight: "bold", fontFamily: "'Oswald', sans-serif"}}>YOUR JOURNEY</h1>
          <p style={{textAlign:"center", color:"#295D6D", fontSize:"1.1rem",fontWeight:"700"}}>We are here for you on every step of your aesthetic treatment surgery!</p>
        </div>
    
      <Container>
      <Row style={{ marginTop: "2%" }}>
          <Col >
            <PatientStories />
          </Col>
        </Row>
     
        
        <Row style={{marginTop: "5%" }}>
          <Col md={6} className="guidance-item">
            <img src={icon1} alt="VIP Transfer" className="icon" />
            <div style={{ color: "#3c879e",}}>
              <h1 style={{textAlign: "center"}}>1</h1>
              <h3 style={{textAlign: "center"}}>VIP Transfer Services</h3>
              <p style={{textAlign: "center"}}>Welcoming service at the airport and VIP Transfer services between airport-hotel-hospital</p>
            </div>
          </Col>
          <Col md={6} className="guidance-item">
            
            <img src={icon2} alt="Consultation with Doctors" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>2</h1>
              <h3>Consultation with Doctors</h3>
              <p>Detailed examinations of our doctors before the procedure</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="guidance-item">
            <img src={icon3} alt="Operations at the Best Hospital" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>3</h1>
              
              <h3>Operations at the Best Hospital in Istanbul</h3>
              <p>Surgeries at JCI accredited state-of-art hospitals in Istanbul</p>
            </div>
          </Col>
          <Col md={6} className="guidance-item">
            <img src={icon4} alt="24/7 Assistance" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>4</h1>
              <h3>24/7 Assistance During Your Stay</h3>
              <p>24/7 assistance with native English speaker medical advisors</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="guidance-item">
            <img src={icon5} alt="Accommodation Options" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>5</h1>
              <h3>Accommodation Options That Will Make You Feel Like You're at Home</h3>
              <p>5 star hotel accommodation with extra services</p>
            </div>
          </Col>
          <Col md={6} className="guidance-item">
            <img src={icon6} alt="Pre-travel Check-ups" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>6</h1>
              <h3>Pre-travel check-ups for your safe flight back home</h3>
              <p>Follow-up visits before you leave Turkey to reduce the risk of unwanted complications.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="guidance-item">
            <img src={icon7} alt="All Checks Completed" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>7</h1>
              <h3>All checks are completed, the patient is ready to fly home.</h3>
              <p>VIP transfer to the airport</p>
            </div>
          </Col>
          <Col md={6} className="guidance-item">
            <img src={icon8} alt="Ongoing Support" className="icon" />
            <div style={{ color: "#3c879e",textAlign: "center"}} >
              <h1>8</h1>
              <h3>Ongoing Support After Ret,urning Home</h3>
              <p>Follow-up services and your personal medical consultant you can contact even after returning home</p>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Guidance;

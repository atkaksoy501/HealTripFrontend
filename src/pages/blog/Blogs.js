import React from 'react'
import "./Blogs.Css";
import { Container, Row, Col } from "reactstrap";
import photo1 from  "./blog1.jpg";
import photo2 from "./blog2.jpg";
import photo3 from "./blog3.jpg";
import photo4 from "./blog4.jpg";
import photo5 from "./blog5.jpg";
import photo6 from "./blog6.jpg";



export default function Blogs() {
  return (
    
    <Container style={{ padding: "30px 0" }}>
    <h1
      style={{
        textAlign: "center",
        color: "#3c879e",
        fontWeight: "1000",
        fontSize:"2.5rem",
        marginBottom:"0",
        fontFamily: "Oswald , sans-serif"
      }}
    >

    </h1>
    <Row>
    
      <Col md={4}>
        
  
          <img src={photo1} alt="Sude" className="img-fluid" />
          <h2 className="content_header">
            What nose fillers can do for your nose?
          </h2>
          <p className="content_text">
            What nose fillers can do for your nose? Nose filler What nose
            fillers can do for your nose? Are you considering nose filler in
            Turkey? Look no further than HealTrip Global, where we offer
            top-quality...
          </p>
        
      </Col>
      <Col md={4}>
        
          {" "}
          {}
          <img src={photo2} alt="Sude" className="img-fluid" />
          <h2 className="content_header">Hair Loss in Women</h2>
          <p className="content_text">
            Hair loss is a common problem that affects millions of women
            around the world. It can cause emotional distress and have a
            negative impact on a woman's self-esteem.
          </p>
       
      </Col>
      <Col md={4}>
        
          <img src={photo3} alt="Sude" className="img-fluid" />
          <h2 className="content_header">
            How To Maintain Good Oral Hygiene?
          </h2>
          <p className="content_text">
            Good oral hygiene is essential to maintain healthy teeth and gums.
            Oral hygiene refers to the practices that we use to keep our
            mouths clean and free from harmful bacteria.
          </p>
       
      </Col>
    </Row>
    <Row>
    <Col md={4}>
        
  
        <img src={photo4} alt="Sude" className="img-fluid" />
        <h2 className="content_header">
        Hair Loss for Men
        </h2>
        <p className="content_text">
        Hair loss can be a frustrating and distressing experience for men, affecting not only their physical appearance but also their self-esteem a...
        </p>
      
    </Col>
    <Col md={4}>
      
        {" "}
        {}
        <img src={photo5} alt="Sude" className="img-fluid" />
        <h2 className="content_header">Almond Eye Surgery in Turkey: Benefits, Risks, and What to Expect</h2>
        <p className="content_text">
        Almond eye surgery in Turkey is a highly sought-after procedure that can significantly enhance the shape and appearance of the eyes. Whether...
        </p>
     
    </Col>
    <Col md={4}>
      
        <img src={photo6} alt="Sude" className="img-fluid" />
        <h2 className="content_header">
        Everything You Need To Know About General Anaesthesia
        </h2>
        <p className="content_text">
        General anesthesia is a medical state induced by the administration of drugs to a patient to achieve unconsciousness, loss of sensation, and...
        </p>
     
    </Col>
    </Row>
  </Container>
  )
}

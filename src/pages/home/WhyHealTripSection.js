import React from "react";
import { Container, Row, Col } from "reactstrap";

import photo1 from "./images/orta_neden_1.png";
import photo2 from "./images/orta_neden_2.png";
import photo3 from "./images/orta_neden_3.png";

export const WhyHealTripSection = () => {
  return (
    <Container style={{ padding: "30px 0", textAlign:"center" }}>
      <Row>
        <Col md={4} style={{ padding: "15px 15px" }}>
          <img src={photo1} alt="Burak" className="img-fluid" style={{width:"100px", height:"100px"}}/>
          <h2 className="content_header" style={{color:"#3c879e"}}>Detailed Consultation</h2>
          <p className="content_text" style={{color:"#3c879e"}}>
            We ensure detailed consultations and open discussions about every
            aspect of the procedure with patient.
          </p>
        </Col>
        <Col md={4} style={{ padding: "15px 15px" }}>
          <img src={photo2} alt="Burak" className="img-fluid" style={{width:"100px", height:"100px"}} />
          <h2 className="content_header" style={{color:"#3c879e"}}>Total Care</h2>
          <p className="content_text" style={{color:"#3c879e"}}> 
            We Provide seamless assistance, ensuring your well-being at every
            step of the way, including transfers.
          </p>
        </Col>
        <Col md={4} style={{ padding: "15px 15px" }}>
          <img src={photo3} alt="Burak" className="img-fluid" style={{width:"100px", height:"100px"}}/>
          <h2 className="content_header" style={{color:"#3c879e"}}>Best Result</h2>
          <p className="content_text" style={{color:"#3c879e"}}>
            You wake up to a better version of yourself
          </p>
        </Col>
      </Row>
    </Container>
  );
};

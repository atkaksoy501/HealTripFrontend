import "./EmergencySection.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
export const EmergencySection = () => {
  return (
    <div className="content_emergency">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1>In an emergency? Need help now?</h1>
            <p>
              Regrettably, dental emergencies can arise unexpectedly, causing
              distress and discomfort. At make an appointment section, you can
              take immediate assistance from our dedicated team. We comprehend
              the urgency of your situation and are committed to providing swift
              and effective care to address your urgent dental needs.
            </p>
            <Link to="/contact">
              <Button
                className="make-an-appointment-button"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #3c879e",
                  color: "#3c879e",
                  borderRadius: "40px",
                  textDecoration: "none",
                  width: "280px",
                  height: "40px",
                  fontWeight: "1000",
                  fontSize: "1.3rem",
                }}
              >
                Make an Appointment
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

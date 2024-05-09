import React, { useState } from 'react';
import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

const PatientStories = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container>
      <Row className="mt-3 border-top pt-3">
        <Col xs="12">
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="d-inline-block ml-3">
            <DropdownToggle tag="div" caret color="primary" style={{ backgroundColor: "transparent", border: "none", width: "200px", fontSize: "20px", fontWeight: "bold", color: "#295D6D", transition: "color 0.3s" }}>
              Patient Stories
            </DropdownToggle>
            <DropdownMenu style={{ backgroundColor: "#f8f9fa" }}>
              <DropdownItem>
                <Link to="/aesthetic-surgery-patient-stories" style={{ color: "#3c879e" }}>Aesthetic Surgery</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/dental-treatments-patient-stories" style={{ color: "#3c879e" }}>Dental Treatments</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/metabolic-surgery-patient-stories" style={{ color: "#3c879e" }}>Metabolic Surgery</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/hair-plant-patient-stories" style={{ color: "#3c879e" }}>Hair Plant</Link>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default PatientStories;

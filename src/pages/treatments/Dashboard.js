import React, { useState } from 'react';
import Departments from './Departments'
import Treatments from './Treatments'
// eslint-disable-next-line
import { Container} from 'semantic-ui-react'
import "./Dashboard.css";
import dahsboard_background from "./blog6.jpg"


export default function Dashboard() {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(1);
  const [selectedDepartmentName, setSelectedDepartmentName] = useState('Aesthetic Surgery');

  const handleDepartmentClick = (departmentId, departmentName) => {
    setSelectedDepartmentId(departmentId);
    setSelectedDepartmentName(departmentName);
  };

  return (
    <div style={{ marginTop: "59px" }}>
      <div className="section-title" style={{ backgroundImage: `url(${dahsboard_background})` }}>
        <h1 style={{ textAlign: "center", color: "#295D6D", fontSize: "4.5rem", fontWeight: "bold", fontFamily: "'Oswald', sans-serif" }}>TREATMENTS</h1>
        <p style={{ textAlign: "center", color: "#295D6D", fontSize: "1.1rem", fontWeight: "700" }}>Welcome to our treatments page! <br />Explore a world of relaxation as we offer a range of luxurious treatments designed to pamper your body and soothe your mind.</p>
      </div>
      <Container className="main">
        <Departments onDepartmentClick={handleDepartmentClick} />
        <Treatments departmentId={selectedDepartmentId} departmentName={selectedDepartmentName} />
      </Container>
    </div>
  );
}

import React, { useState } from 'react';
import Departments from './Departments'
import Treatments from './Treatments'
// eslint-disable-next-line
import { Container} from 'semantic-ui-react'
import "./Dashboard.css";


export default function Dashboard() {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(1);
  const [selectedDepartmentName, setSelectedDepartmentName] = useState('Aesthetic Surgery');

  const handleDepartmentClick = (departmentId, departmentName) => {
    setSelectedDepartmentId(departmentId);
    setSelectedDepartmentName(departmentName);
  };

  return (
    <div style={{marginTop:"59px"}}>
      <Container className="main">
        <Departments onDepartmentClick={handleDepartmentClick} />
        <Treatments departmentId={selectedDepartmentId} departmentName={selectedDepartmentName} />
      </Container>
    </div>
  );
}

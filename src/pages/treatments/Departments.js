import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "semantic-ui-react";
import DepartmentService from "../../services/departmentService";
import "./Departments.css";

export default function Departments({ onDepartmentClick }) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    let departmentService = new DepartmentService();
    departmentService
      .getDepartments()
      .then((result) => setDepartments(result.data));
  }, []);

  return (
    <div style={{marginTop:"6%"}}>
      <ButtonGroup widths={departments.length}>
        {departments.map((department) => (
          <Button className="custom-button" onClick={() => onDepartmentClick(department.id, department.departmentName)} key={department.id}>{department.departmentName}</Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

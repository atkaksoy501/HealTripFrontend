import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";
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
    <div>
      <ButtonGroup className="button-container" style={{width:"100%", display:"flex", justifyContent:"center", textAlign:"center"}}>
        {departments.map((department) => (
          <Button className="custom-button" onClick={() => onDepartmentClick(department.id, department.departmentName)} key={department.id}>{department.departmentName}</Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

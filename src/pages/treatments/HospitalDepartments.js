import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";
import "./Departments.css";

export default function Departments({ onDepartmentClick, hospital_id }) {
  const [departmentsData, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(`https://healtrip.azurewebsites.net/hospital/get/${hospital_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch hospital data");
        }
        const hospitalData = await response.json();
        
        const departments = hospitalData.departments.map(departmentObj => ({
          id: departmentObj.department.id,
          departmentName: departmentObj.department.departmentName
        }));
        
        setDepartments(departments);
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      }
    };
  
    if (hospital_id) {
      fetchDepartments();
    }
  }, [hospital_id]);

  return (
    <div style={{marginTop:"3%"}}>
      <ButtonGroup className="button-container" style={{width:"100%", display:"flex", justifyContent:"center", textAlign:"center"}}>
        {departmentsData.map((department) => (
          <Button className="custom-button" onClick={() => onDepartmentClick(department.id, department.departmentName)} key={department.id}>{department.departmentName}</Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

export default function GetMyProfile() {

  const [patientForms, setPatientForms] = useState([]);
  const [patient, setPatient] = useState(null);
  const [showForms, setShowForms] = useState(false); 

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      setPatient(decodedToken);
    }
  }, []);

  useEffect(() => {
    const fetchPatientForms = async () => {
      try {
        if (patient) {
          const response = await axios.get(`https://healtrip.azurewebsites.net/patient/get/${patient.id}`);
          setPatientForms(response.data.bookings);
        }
      } catch(error) {
        console.log(error);
      }
    }
    fetchPatientForms();
  }, [patient]);

  const handleShowForms = () => {
    setShowForms(true);
  };

  const handleShowProfile = () => {
    setShowForms(false);
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "50px" }}>
      <ButtonGroup
        className="button-container"
        style={{
          width: "60%",
          display: "flex",
          margin: "auto",
          borderColor: "#fff",
        }}
      >
        <Button className="custom-button" onClick={handleShowForms}>My Forms</Button>
        <Button className="custom-button" onClick={handleShowProfile}>Profile Settings</Button>
      </ButtonGroup>

      {showForms ? (
        patientForms && patientForms.map(form => (
          <div key={form.id}>
            <p>{form.hospital.hospitalName}</p>
            <p>{form.retreat.retreat_name}</p>
            <p>{form.description}</p>
            <p>----------------------------------------</p>
          </div>
        ))
      ) : (
        <h2>profile</h2>
      )}
    </div>
  );
}

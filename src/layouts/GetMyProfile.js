import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealingIcon from "@mui/icons-material/Healing";
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
          const response = await axios.get(
            `https://healtrip.azurewebsites.net/patient/get/${patient.id}`
          );
          setPatientForms(response.data.bookings);
        }
      } catch (error) {
        console.log(error);
      }
    };
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
        <Button className="custom-button" onClick={handleShowForms}>
          My Forms
        </Button>
        <Button className="custom-button" onClick={handleShowProfile}>
          Profile Settings
        </Button>
      </ButtonGroup>

      {showForms ? (
        patientForms &&
        patientForms.map((form) => (
          <div key={form.id} style={{ marginTop: "30px" }}>
            <li
              key={form.id}
              className="list-group-item"
              style={{
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
                padding: "10px",
                margin: "auto",
              }}
            >
              <div>
                <div style={{ display: "flex", color: "#295d6d" }}>
                  <div style={{ display: "flex", paddingTop: "3px" }}>
                    <LocalHospitalIcon style={{ color: "#295d6d" }} />
                  </div>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ fontWeight: "1000", fontSize: "20px" }}>
                      Hospital Name:{" "}
                    </h3>
                    <p
                      style={{
                        marginTop: "6px",
                        marginLeft: "6px",
                        fontWeight: "bold",
                        color: "#3c879e",
                      }}
                    >
                      {form.hospital.hospitalName}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", color: "#295d6d" }}>
                  <div style={{ display: "flex", paddingTop: "3px" }}>
                    <HealingIcon style={{ color: "#295d6d" }} />
                  </div>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ fontWeight: "1000", fontSize: "20px" }}>
                      Retreat Name:{" "}
                    </h3>

                    <p
                      style={{
                        marginTop: "6px",
                        marginLeft: "6px",
                        fontWeight: "bold",
                        color: "#3c879e",
                      }}
                    >
                      {form.retreat.retreat_name}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", color: "#295d6d" }}>
                  <div style={{ display: "flex", paddingTop: "3px" }}>
                    <DescriptionIcon style={{ color: "#295d6d" }} />
                  </div>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ fontWeight: "1000", fontSize: "20px" }}>
                      Retreat Name:{" "}
                    </h3>

                    <p
                      style={{
                        marginTop: "6px",
                        marginLeft: "6px",
                        fontWeight: "bold",
                        color: "#3c879e",
                      }}
                    >
                      {form.description}
                    </p>
                  </div>
                </div>                
                
                <div style={{ display: "flex", color: "#295d6d" }}>
                  <div style={{ display: "flex", paddingTop: "3px" }}>
                    <CalendarMonthIcon style={{ color: "#295d6d" }} />
                  </div>
                  <div style={{ display: "flex" }}>
                    <h3 style={{ fontWeight: "1000", fontSize: "20px" }}>
                      Submission Date:{" "}
                    </h3>

                    <p
                      style={{
                        marginTop: "6.5px",
                        marginLeft: "6px",
                        fontWeight: "bold",
                        color: "#3c879e",
                      }}
                    >
                      {form.bookingDate}
                    </p>
                  </div>
                </div>


              </div>
            </li>
          </div>
        ))
      ) : (
        <h2>profile</h2>
      )}
    </div>
  );
}

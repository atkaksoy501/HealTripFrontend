import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";


import { jwtDecode } from "jwt-decode";
import axios from "axios";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealingIcon from "@mui/icons-material/Healing";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function GetMyProfile() {
  const [patientForms, setPatientForms] = useState([]);
  const [token, setToken] = useState(null);
  const [patient, setPatient] = useState(null);
  const [showForms, setShowForms] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      setToken(decodedToken);
    }
  }, []);

  useEffect(() => {
    const fetchPatientForms = async () => {
      try {
        if (token) {
          const response = await axios.get(
            `https://healtrip.azurewebsites.net/patient/get/${token.id}`
          );
          setPatientForms(response.data.bookings);
          setPatient(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPatientForms();
  }, [token]);

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
                      Medical History:{" "}
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
        <div style={{ padding: "50px 100px" }}>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">First Name</Label>
                  {patient && (
                    <Input
                      name="name"
                      type="name"
                      value={patient.first_name}
                      onChange={(e) =>
                        setPatient({ ...patient, first_name: e.target.value })
                      }
                    />
                  )}
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Last Name</Label>
                  {patient && (
                    <Input
                      name="name"
                      type="name"
                      value={patient.last_name}
                      onChange={(e) =>
                        setPatient({ ...patient, last_name: e.target.value })
                      }
                    />
                  )}
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label >Email</Label>
                  {patient && (
                    <Input
                      type="email"
                      value={patient.email}
                      onChange={(e) =>
                        setPatient({ ...patient, email: e.target.value })
                      }
                    />
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label >Password</Label>
                  <Input
                    placeholder="password"
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label >Phone Number</Label>
                  <Input
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label >Your Height (cm)</Label>
                  <Input   />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label >Your Weight (kg)</Label>
                  <Input  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label >Select</Label>
                  <Col>
                    <Input  type="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Undefined</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Col>

              <Col md={1}>
              <Label >Birth Date</Label>
                <FormGroup style={{paddingTop:"2px"}}>
                  <input type="date"  style={{height:"30px"}} />
                </FormGroup>
              </Col>
            </Row>

            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Button style={{backgroundColor:"#295d6d", fontWeight:"bold"}}>Save All Changes</Button>

            </div>
          </Form>
        </div>
      )}
    </div>
  );
}

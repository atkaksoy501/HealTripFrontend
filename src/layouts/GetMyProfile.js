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
import {Link } from "react-router-dom";


import { jwtDecode } from "jwt-decode";
import axios from "axios";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealingIcon from "@mui/icons-material/Healing";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Swal from "sweetalert2";
import ImageComponentFromBase64 from "../pages/treatments/ImageComponentFromBase64";

export default function GetMyProfile() {
  const [patientForms, setPatientForms] = useState([]);
  const [token, setToken] = useState(null);
  const [patient, setPatient] = useState(null);
  const [showForms, setShowForms] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [oldEmail, setOldEmail] = useState("");
  const [oldPhoneNumber, setOldPhoneNumber] = useState("");
  const [hospitalImages, setHospitalImages] = useState([]);
  const [hospitalIds, setHospitalIds] = useState([])
  const [oldPassword, setOldPassword] = useState("")
  const [authPassword, setAuthPassword] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      setToken(decodedToken);
    }
  }, []);

  useEffect(() => {
    const fetchHospitalImage = async () => {
      let tempHospitalImages = [];
  
      for (let i = 0; i < hospitalIds.length; i++) {
        console.log("hospitalid: ", hospitalIds[i]);
        const response = await axios.get(
          `https://healtrip.azurewebsites.net/image/hospital/get/hospital/${hospitalIds[i]}`
        );
        tempHospitalImages[i] = response.data;
      }
  
      setHospitalImages(tempHospitalImages);
    };
  
    fetchHospitalImage();
  }, [hospitalIds]);

  


  useEffect(() => {
    const fetchPatientForms = async () => {
      try {
        if (token) {
          const response = await axios.get(
            `https://healtrip.azurewebsites.net/patient/get/${token.id}`
          );
          const array = [];
          for(let i= 0; i < response.data.bookings.length; i++ ){
            array[i] = response.data.bookings[i].hospital.id;
          }
          setHospitalIds(array);
          setPatientForms(response.data.bookings);
          setPatient(response.data);
          setFirstName(response.data.first_name);
          setLastName(response.data.last_name);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phone_number);
          setWeight(response.data.patient_weight);
          setHeight(response.data.patient_height);
          setGender(response.data.gender);
          setBirthDate(response.data.birth_date);
          setOldPhoneNumber(response.data.phone_number);
          setOldEmail(response.data.email);
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

  const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChangePassword = async (e) => {
    console.log("handle change calist")

    e.preventDefault();
    
    const payload = {
      oldPassword: oldPassword,
      password: password
    };

    try {
      const newToken = localStorage.getItem("token");
      
      if (!newToken) {
        throw new Error("Token not found in localStorage");
      }
      
      const headers = {
        Authorization: `Bearer ${newToken}`,
      };
      console.log(token.id);
      await axios.put(
        `https://healtrip.azurewebsites.net/patient/update/${token.id}`,
        payload,
        { headers: headers }
      );
      
      Swal.fire("Successfully!", "Your password is changed.", "success");
      const tokenPayload ={
        email: email,
        password : password
      }
      const responseToken = await axios.post('https://healtrip.azurewebsites.net/auth/authenticate', tokenPayload);
      localStorage.setItem("token", responseToken?.data)
      window.location.reload();
    } catch (error) {
      console.error("Save error:", error);
      Swal.fire(
        "Error!",
        "An error occurred while attempting to change password",
        "error"
      );
    }
  };  

  const handleSave = async (e) => {
    console.log("handle save calist")
    e.preventDefault();
    
    if (!isEmailValid(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    
    let payload = {
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate,
      gender: gender,
      patient_height: height,
      patient_weight: weight,
    };
    
    if (oldEmail !== email) {
      payload.email = email;
    }
    
    if (phoneNumber !== oldPhoneNumber) {
      payload.phone_number = phoneNumber;
    }
    
    try {
      const newToken = localStorage.getItem("token");
      
      if (!newToken) {
        throw new Error("Token not found in localStorage");
      }
      
      const headers = {
        Authorization: `Bearer ${newToken}`,
      };
      console.log(token.id);
      await axios.put(
        `https://healtrip.azurewebsites.net/patient/update/${token.id}`,
        payload,
        { headers: headers }
      );
      
      Swal.fire("Successfully!", "Your changes are saved.", "success");
      const tokenPayload ={
        email: email,
        password : authPassword
      }
      const responseToken = await axios.post('https://healtrip.azurewebsites.net/auth/authenticate', tokenPayload);
      localStorage.setItem("token", responseToken?.data)
      window.location.reload();
    } catch (error) {
      console.error("Save error:", error);
      Swal.fire(
        "Error!",
        "An error occurred while attempting to save changes",
        "error"
      );
    }
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
      <div>
        <h1 style={{textAlign:"center", color:"#295d6d", paddingTop:"30px"}}>My Forms</h1>
        {patientForms &&
          patientForms.map((form, index = 0) => (
            <div key={form.id} style={{ marginTop: "30px" }}>
              <li
                key={form.id}
                className="list-group-item"
                style={{
                  border: "1px solid #ccc",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "80%",
                  padding: "10px",
                  margin: "auto",
                }}
              >
                <div style={{ paddingRight: "20px" }}>
                  {hospitalImages &&
                    hospitalImages.length > 0 &&
                    hospitalImages[index] && (
                      <Link
                      to={`/hospitals/${encodeURIComponent(form.hospital.id)}`}
                    >                       <ImageComponentFromBase64
                    base64String={hospitalImages[index].image}
                  /></Link>

                    )}
                </div>


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
        ))}
        </div>
      ) : (
        <div style={{ padding: "0 100px", paddingTop:"50px" }}>
          <Form onSubmit={(e) => handleChangePassword(e)}>
        <h1 style={{textAlign:"center", color:"#295d6d",paddingBottom:"20px"}}>Change Password</h1>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Old Password
                  </Label>
                  <Input
                    placeholder="Old Password"
                    type="password"
                    required
                    style={{ borderWidth: "2px" }}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    New Password
                  </Label>
                  <Input
                    placeholder="New Password"
                    type="password"
                    required
                    style={{ borderWidth: "2px" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={4}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "25px",
                  }}
                >
                  <Button
                    style={{ backgroundColor: "#295d6d", fontWeight: "bold" }}
  
                  >
                    Change Password
                  </Button>
                </div>
              </Col>
            </Row>

            </Form>
            <Form onSubmit={(e) => handleSave(e)}>

            <Row
              style={{
                borderTop: "2px solid #ccc",
                marginTop: "30px",
                paddingTop: "20px",
              }}
            >
        <h1 style={{textAlign:"center", color:"#295d6d", paddingBottom:"30px", paddingTop:"10px"}}>Change Profile Information</h1>

              <Col md={4}>
                <FormGroup>
                  <Label
                    style={{ color: "#295d6d", fontWeight: "bold" }}
                    for="exampleEmail"
                  >
                    First Name
                  </Label>
                  {patient && (
                    <Input
                      name="name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{ borderWidth: "2px" }}
                    />
                  )}
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Last Name
                  </Label>
                  {patient && (
                    <Input
                      name="name"
                      type="name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{ borderWidth: "2px" }}
                    />
                  )}
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Email
                  </Label>
                  {patient && (
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!emailError}
                      helperText={emailError}
                      style={{ borderWidth: "2px" }}
                    />
                  )}
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Phone Number
                  </Label>
                  <Input
                    maxLength="11"
                    minLength="11"
                    value={phoneNumber}
                    style={{ borderWidth: "2px" }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Your Height (cm)
                  </Label>
                  <Input
                    type="number"
                    value={height}
                    style={{ borderWidth: "2px" }}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Your Weight (kg)
                  </Label>
                  <Input
                    type="number"
                    value={weight}
                    style={{ borderWidth: "2px" }}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Gender
                  </Label>
                  <Col>
                    <Input
                      type="select"
                      value={gender}
                      style={{ borderWidth: "2px" }}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Undefined</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Col>

              <Col md={4} >
                <Label style={{ color: "#295d6d", fontWeight: "bold" }}>Birth Date</Label>
                <FormGroup style={{ paddingTop: "2px" }}>
                  <input
                    type="date"
                    style={{ height: "30px" }}
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={4} >
                <FormGroup>
                  <Label style={{ color: "#295d6d", fontWeight: "bold" }}>
                    Enter Your Password To Save Profile Information
                  </Label>
                  <Input
                    placeholder="Enter your password to save profile information"
                    type="password"
                    required="true"
                    style={{ borderWidth: "2px" }}
                    onChange={(e) => setAuthPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ backgroundColor: "#295d6d", fontWeight: "bold", marginTop:"30px"}}

              >
                Save Profile Information
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}

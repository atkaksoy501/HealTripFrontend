/* eslint-disable jsx-a11y/iframe-has-title */
import {React, useState} from "react";
import {
  Image,
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  ButtonGroup,
} from "semantic-ui-react";
import photo1 from "./contact.jpeg";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "reactstrap";
import Swal from 'sweetalert2';
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    try {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
        message: message
      };
  
      const response = await axios.post(
        'https://healtrip.azurewebsites.net/email/send',
        payload
      );
  
      if (response.status === 200) {
        Swal.fire("Success!", "Your Form Is Sent.", "success");
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      } else {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error('Error', error);
      Swal.fire("Error!", "An error occurred while attempting to send form", "error");
    } finally{
      setLoading(false)
      
    }
  };


  return (
    <div
      class="contact"
      style={{
        marginTop: "59px",
      }}
    >
      <div
        className="contact-header"
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h1 style={{ color: "#295d6d", fontSize: "4rem", fontWeight: "600" }}>CONTACT US</h1>
        </div>
        <Image style={{ opacity: "0.4", minHeight: "300px" }} src={photo1} fluid />
      </div>
      <div
        class="contact-mid"
        style={{
          marginLeft: "16%",
          marginRight: "16%",
          marginTop: "4%",
          marginBottom: "4%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div>
          <Container>
            <Row>
              <Col md={6}>
                <h2>Please fill in your details</h2>
                <Form onSubmit={(e) => handleSave(e)}>
                  <FormGroup widths={2}>
                    <FormInput placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <FormInput placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                  </FormGroup>
                  <FormGroup widths={2}>
                    <FormInput placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                    <FormInput placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                  </FormGroup>
                  <FormInput width={16} placeholder="E-Mail Address" onChange={(e) => setEmail(e.target.value)}/>
                  <FormInput width={16} placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} />
                  <FormCheckbox label="I agree to the Terms and Conditions" required="true"/>
                  <ButtonGroup widths="3">
                    <Button type="submit" className="sendButton" disabled={loading}>
                    {loading ? <ClipLoader size={24} color="#fff" /> : "Send"}
                    </Button>
                  </ButtonGroup>
                </Form>
              </Col>
              <Col md={6}>
                <h2>HealTrip</h2>
                <div class="location">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    color="#3c879e"
                    style={{ fontSize: "1.2em" }}
                  />
                  <span>
                    Çıplaklı, Akdeniz Blv. No:290/A, 07190 Döşemealtı/Antalya
                  </span>
                </div>
                <div class="phone" style={{ marginTop: "2%" }}>
                  <FontAwesomeIcon icon={faPhone} color="#3c879e" />
                  <span>+90 554 382 22 15</span>
                </div>
                <div class="phone" style={{ marginTop: "2%" }}>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    color="#3c879e"
                    style={{ fontSize: "1.3em" }}
                  />
                  <span>+90 554 382 22 15</span>
                </div>
                <div class="mail" style={{ marginTop: "2%" }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#3c879e"
                    style={{ fontSize: "1.1em" }}
                  />
                  <span>healtrip.codewizards@gmail.com</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container>
        <div class="gmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.2356482233486!2d30.618362076305235!3d37.051867253471976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39abd6e49aa8d%3A0x329b9c7bc561e87a!2sAntalya%20Bilim%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1711130859737!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: "0", width:"100%", marginBottom:"30px"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

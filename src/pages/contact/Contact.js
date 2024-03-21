import React from "react";
import {
  Image,
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  ButtonGroup,
  GridRow, GridColumn, Grid,
} from "semantic-ui-react";
import photo1 from "./contact.jpeg";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import MapContainer from "./MapContainer";

export default function Contact() {
  return (
    <div
      class="contact"
      style={{
        marginTop: "59px"
      }}
    >
      <div>
        <h1>Contact US</h1>
        <Image src={photo1} fluid />
      </div>
      <div
        class="contact-mid"
        style={{
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "1%",
          marginBottom: "1%",
          backgroundColor: "#3c879e",
        }}
      >
        <div style={{ margin: "1%" }}>
          <Grid>
            <GridRow>
              <GridColumn width={10}>
                <h2>Please fill in your details</h2>
                <Form>
                  <FormGroup widths={2}>
                    <FormInput placeholder="First Name" />
                    <FormInput placeholder="Last Name" />
                  </FormGroup>
                  <FormGroup widths={2}>
                    <FormInput placeholder="Address" />
                    <FormInput placeholder="Phone Number" />
                  </FormGroup>
                  <FormInput width={16} placeholder="E-Mail Address" />
                  <FormInput width={16} placeholder="Your Message" />
                  <FormCheckbox label="I agree to the Terms and Conditions" />
                  <ButtonGroup widths="3">
                    <Button type="submit" color="olive">
                      Send
                    </Button>
                  </ButtonGroup>
                </Form>
              </GridColumn>
              <GridColumn width={6}>
                <h2>HealTrip</h2>
                <div class="location">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    color="white" 
                    style={{ fontSize: '1.2em' }}
                  />
                  <span>
                    Çıplaklı, Akdeniz Blv. No:290/A, 07190{" "}
                    <span>Döşemealtı/Antalya</span>
                  </span>
                </div>
                <div class="phone" style={{marginTop:"2%"}}>
                  <FontAwesomeIcon icon={faPhone} color="white"/>
                  <span>+90 554 382 22 15</span>                
                </div>
                <div class="phone" style={{marginTop:"2%"}}>
                  <FontAwesomeIcon icon={faWhatsapp} color="white" style={{ fontSize: '1.3em' }}/>
                  <span>+90 554 382 22 15</span>
                </div>
                <div class="mail" style={{marginTop:"2%"}}>
                  <FontAwesomeIcon icon={faEnvelope} color="white" style={{ fontSize: '1.1em' }}/>
                  <span>ÖMÜRBABA@healtrip.com</span>
                </div>
              </GridColumn>
            </GridRow>
          </Grid>
          <div style={{marginTop:"2%", marginBottom:"2%"}}>
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

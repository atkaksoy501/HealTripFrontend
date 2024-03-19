import React from "react";
import {
  Image,
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  ButtonGroup
} from "semantic-ui-react";
import photo1 from "./contact.jpeg";
import "./Contact.css";

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
        style={{ marginLeft:"25%", marginRight:"25%", marginTop:"1%", marginBottom:"1%", backgroundColor: "#3c879e" }}
      >
        <h2>Please fill in your details</h2>
        <div style={{margin:"1%"}}>
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
            <ButtonGroup widths='3'>
              <Button type="submit" color="olive">Send</Button>
            </ButtonGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

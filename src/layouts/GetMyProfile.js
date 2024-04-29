import React from 'react'
import { ButtonGroup, Button } from "reactstrap";


export default function GetMyProfile() {
  return (
    <div style={{marginTop:"100px", marginBottom:"50px"}}>
    <ButtonGroup className="button-container" style={{width:"60%",display:"flex", margin:"auto", borderColor: "#fff"}}>
        <Button className="custom-button">My Forms</Button>
        <Button className="custom-button">Profile Settings</Button>
    </ButtonGroup>
  </div>
  )
}

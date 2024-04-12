import React from "react";
import "./MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from "reactstrap";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div class="banner">
      <div class="container">
        <h1>WELCOME TO HEALTRIP</h1>
        <p>
          We are team of talented doctors providing healthcare services with
          advance technologies.
        </p>
        <br></br>
        <Link to="/about-us">
        <Button className="button" style={{ backgroundColor: '#3c879e', fontSize:"18px", borderRadius: "30px", width:"200px", fontWeight:"bold"}}><span>Learn More</span>
            </Button> 
        </Link>
      </div>
    </div>
  );
};

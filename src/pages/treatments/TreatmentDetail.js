import React from "react";
import { useLocation } from "react-router-dom";

export default function TreatmentDetail() {
  const location = useLocation();
  console.log('Location state:', location.state);
  const { treatment } = location.state || {};

  return (
    <div style={{ marginTop: "80px" }}>
        <h1>Treatment Detail</h1>
        <p>Name: </p>
    </div>
  );
}

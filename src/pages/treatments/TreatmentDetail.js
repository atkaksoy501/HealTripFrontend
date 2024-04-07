import React from "react";
import { useParams } from "react-router-dom";

export default function TreatmentDetail() {
  const { retreat_id } = useParams();

  return (
    <div style={{ marginTop: "80px" }}>
      <h1>Treatment Detail</h1>
      <p>Retreat Id: {retreat_id}</p>
    </div>
  );
}

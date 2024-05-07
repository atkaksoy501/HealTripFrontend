import React from "react";

export default function GetMedicalAdvice() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '80vh', marginTop:"100px", marginBottom:"40px"}}>
      <iframe
        src="https://healtripai.onrender.com/?embed=true&pass=ss32_817"
        title="HealTrip AI"
        frameBorder="0"
        style={{
          flex: 1,
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'relative',
          padding:"0 15%",
        }}
        width="100%"
      />

    </div>
  );
}

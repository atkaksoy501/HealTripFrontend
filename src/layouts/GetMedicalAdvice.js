import React from "react";

export default function GetMedicalAdvice() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh', marginTop:"100px", marginBottom:"40px"}}>
      <iframe
        src="https://healtripai.onrender.com/?embed=true&pass=ss32_817"
        title="Embedded Content"
        frameBorder="0"
        style={{
          flex: 1,
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'relative',
          padding:"0 10%",
        }}
        width="100%"
      />

    </div>
  );
}

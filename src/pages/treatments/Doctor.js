import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import ImageComponentFromBase64 from "./ImageComponentFromBase64";

export default function Doctor() {
  const { doctor_id } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(
          `https://healtrip.azurewebsites.net/doctor/get/${doctor_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setDoctorData(data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch doctor data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctorData();
  }, [doctor_id]);

  return (
    <Container
      data-aos="fade-up"
      style={{ marginTop: "80px", marginBottom: "30px" }}
    >
      {loading ? (
        <Row className="justify-content-center">
          <Col>
            <div className="d-flex justify-content-center">
              <ClipLoader
                color={"#295d6d"}
                loading={loading}
                size={90}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col lg="4" data-aos="fade-right">
            <div>
              <ImageComponentFromBase64
                base64String={doctorData.doctorImage}
              />
            </div>
          </Col>

          <Col lg="8" className="pt-4 pt-lg-0 content" data-aos="fade-left">
            <h2 style={{ color: "#295d6d" }}>
              {doctorData.doctorName}
            </h2>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Consults at "+ doctorData.hospital.hospitalName}
            </p>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Department: "+ doctorData.department.departmentName}
            </p>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {`Experience: ${doctorData.experience_year}+ years`}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, CardBody, CardTitle, Card } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import ImageComponentFromBase64 from "./ImageComponentFromBase64";
import "./Treatments.css";

export default function TreatmentDetail() {
  const { retreat_id } = useParams();
  const [retreatData, setRetreatData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRetreatData = async () => {
      try {
        const response = await fetch(
          `https://healtrip.azurewebsites.net/retreat/get/${retreat_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setRetreatData(data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch retreat data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRetreatData();
  }, [retreat_id]);

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
                base64String={retreatData.image.image}
              />
            </div>
          </Col>

          <Col lg="8" className="pt-4 pt-lg-0 content" data-aos="fade-left">
            <h2 style={{ color: "#295d6d" }}>
              {retreatData.retreat_name +
                " Care Unveiled: Discovering Innovative Solutions"}
            </h2>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {retreatData.description}
            </p>
          </Col>
          <h1 style={{ marginTop: "30px", color: "#295D6D" }}>Hospitals</h1>
          {retreatData.department.hospitals.map((hospital) => (
            <Col
              lg={3}
              md={6}
              key={hospital.id}
              style={{
                marginTop: "10px",
                display: "flex",
              }}
            >
              <Link
                to={`/hospitals/${encodeURIComponent(hospital.id)}`}
                state={{ hospital }}
              >
                <div className="link-image">
                  <Card
                    className="custom-card-content"
                    style={{
                      width: "100%",
                    }}
                  >
                    {console.log(hospital)}
                    {hospital.hospital.hospitalImages &&
                      hospital.hospital.hospitalImages.length > 0 && (
                        <ImageComponentFromBase64
                          base64String={
                            hospital.hospital.hospitalImages[0].image
                          }
                        />
                      )}
                    <CardBody>
                      <CardTitle tag="h5" className="custom-card-header">
                        {hospital.hospital.hospitalName}
                      </CardTitle>
                    </CardBody>
                  </Card>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

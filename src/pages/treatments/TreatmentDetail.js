import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import ImageComponentFromBase64 from "./ImageComponentFromBase64";

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
            <p style={{color:"#295D6D", fontSize:"1.1rem" }} className="fst-italic">
                {retreatData.description}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

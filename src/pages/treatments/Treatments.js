import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Card,
} from "reactstrap";
import ImageComponentFromBase64 from "./ImageComponentFromBase64";
import "./Treatments.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

export default function Treatments({ departmentId, departmentName }) {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("Department ID:", departmentId);
    if (departmentId) {
      axios
        .get(
          `https://healtrip.azurewebsites.net/retreat/getByDepartmentId/${departmentId}`
        )
        .then((response) => {
          setTreatments(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching treatments:", error);
          setLoading(false);
        });
    }
  }, [departmentId]);

  return (
    <div style={{ marginTop: "1%" }}>
      <div style={{ textAlign: "center", paddingTop: "30px" }}>
        <ClipLoader
          color={"#295d6d"}
          loading={loading}
          size={90}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      {!loading && (
        <div>
          <div
            className="title"
            style={{ textAlign: "center", paddingBottom: "15px" }}
          >
            <h2>{departmentName}</h2>
          </div>
          <div>
            <Container>
              <Row>
                {treatments.map((treatment) => (
                  <Col
                    md={4}
                    key={treatment.id}
                    style={{
                      padding: "1.5%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      to={`/treatments/${encodeURIComponent(
                        treatment.id
                      )}`}
                      state={{ treatment }}
                    >
                      <div className="link-image">
                        <Card
                          className="custom-card-content"
                          style={{
                            width: "18rem",
                          }}
                        >
                          <ImageComponentFromBase64
                            base64String={treatment.image.image}
                          />
                          <CardBody>
                            <CardTitle tag="h5" className="custom-card-header">
                              {treatment.retreat_name + " Treatment"}
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect} from 'react'
import { Container, Row, Col, CardBody, CardTitle, CardText, Card} from "reactstrap";
import ImageComponentFromBase64 from './ImageComponentFromBase64';
import "./Treatments.css";
import axios from 'axios';

export default function Treatments({ departmentId, departmentName }) {

  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    console.log("Department ID:", departmentId);
    if (departmentId) {
      axios.get(`http://localhost:8080/retreat/getByDepartmentId/${departmentId}`)
        .then(response => setTreatments(response.data))
        .catch(error => console.error('Error fetching treatments:', error));
    }
  }, [departmentId]);

  return (
    <div style={{ marginTop: "1%" }}>
      <div
        className="title"
        style={{ marginBottom: "1%", textAlign: "center" }}
      >
        <h2>{departmentName}</h2>
      </div>
      <div>
        <Container>
          <Row>
            {treatments.map((treatment) => (
              <Col md={4} key={treatment.id}  style={{padding:"1%"}}>
                <Card className='custom-card-content'
                  style={{
                    width: "18rem"
                  }}
                >
                  <ImageComponentFromBase64
                    base64String={treatment.image.image}
                  ></ImageComponentFromBase64>
                  <CardBody>
                    <CardTitle tag="h5" className='custom-card-header'>{treatment.retreat_name}</CardTitle>
                    <CardText className='custom-card-desc'>{treatment.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, CardBody, CardTitle, Card } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";
import ImageComponentFromBase64 from "./ImageComponentFromBase64";

export default function Hospital() {
  const { hospital_id } = useParams();
  const [hospitalData, setHospitalData] = useState(null);
  const [treatmentsData, setTreatmentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const hospitalResponse = await fetch(
          `https://healtrip.azurewebsites.net/hospital/get/${hospital_id}`
        );
        if (!hospitalResponse.ok) {
          throw new Error("Failed to fetch hospital data");
        }
        const hospitalData = await hospitalResponse.json();
        setHospitalData(hospitalData);

        const departmentIds = hospitalData.departments.map(
          (departmentObj) => departmentObj.department.id
        );

        const treatmentsDataArray = await Promise.all(
          departmentIds.map(async (departmentId) => {
            const response = await fetch(
              `https://healtrip.azurewebsites.net/retreat/getByDepartmentId/${departmentId}`
            );
            if (!response.ok) {
              throw new Error(
                `Failed to fetch treatments data for department ${departmentId}`
              );
            }
            const departmentTreatments = await response.json();
            return departmentTreatments;
          })
        );

        const allTreatments = treatmentsDataArray.flat();
        setTreatmentsData(allTreatments);

        setLoading(false); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitalData();
  }, [hospital_id]);

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
                base64String={hospitalData.hospitalImages[0].image}
              />
            </div>
          </Col>

          <Col lg="8" className="pt-4 pt-lg-0 content" data-aos="fade-left">
            <h2 style={{ color: "#295d6d" }}>{hospitalData.hospitalName}</h2>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Bed capacity: " + hospitalData.bed_capacity}
            </p>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Contact phone: " + hospitalData.contactPhone}
            </p>
            <p
              style={{ color: "#295D6D", fontSize: "1.1rem" }}
              className="fst-italic"
            >
              {"Address: " +
                hospitalData.address.addressDetail +
                " " +
                hospitalData.address.city +
                " " +
                hospitalData.address.country}
            </p>
          </Col>
          <h1 style={{ marginTop: "30px", color: "#295D6D" }}>Treatments</h1>
          {treatmentsData.map((treatment) => (
            <Col
              lg={3}
              md={6}
              key={treatment.id}
              style={{
                marginTop: "10px",
                display: "flex",
              }}
            >
              <Link
                to={`/treatments/${encodeURIComponent(treatment.id)}`}
                state={{ treatment }}
              >
                <div className="link-image">
                  <Card
                    className="custom-card-content"
                    style={{
                      width: "100%",
                    }}
                  >
                    {console.log(treatment)}
                    {treatment.image &&
                      treatment.image.image && ( // Burada image'nin var olduğunu ve image içinde image'nin de var olduğunu kontrol ediyoruz
                        <ImageComponentFromBase64
                          base64String={treatment.image.image}
                        />
                      )}
                    <CardBody>
                      <CardTitle tag="h5" className="custom-card-header">
                        {treatment.retreat_name}
                      </CardTitle>
                    </CardBody>
                  </Card>
                </div>
              </Link>
            </Col>
          ))}
          <h1 style={{ marginTop: "30px", color: "#295D6D" }}>Doctors</h1>
          {hospitalData.doctors.map((doctor) => (
            <Col
              lg={3}
              md={6}
              key={doctor.id}
              style={{
                marginTop: "10px",
                display: "flex",
              }}
            >
              <Link
                to={`/doctors/${encodeURIComponent(doctor.id)}`}
                state={{ doctor }}
              >
                <div className="link-image">
                  <Card
                    className="custom-card-content"
                    style={{
                      width: "100%",
                    }}
                  >
                    {console.log(doctor)}
                    {doctor.doctorImage && (
                      <ImageComponentFromBase64
                        base64String={doctor.doctorImage}
                      />
                    )}
                    <CardBody>
                      <CardTitle tag="h5" className="custom-card-header">
                        {doctor.doctorName}
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
